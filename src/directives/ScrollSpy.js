export default {
  inserted(el, binding, vnode) {
    let container = window;
    let visible = 0.5;
    if (binding.value) {
      container = document.getElementById(binding.value.container) || window;
      visible = binding.value.visible || 0.5;
    }

    let links = [];

    const findHrefs = el => {
      if (el.attributes && el.attributes.href) {
        links.push(el);
      } else if (el.childNodes) {
        el.childNodes.forEach(child => findHrefs(child));
      }
    };

    const setActive = index => {
      if (binding.value && binding.value.callback) {
        vnode.context[binding.value.callback](index);
        return;
      }
      links.forEach((link, i) => {
        if (index === i) link.classList.add("active");
        else link.classList.remove("active");
      });
    };

    el.spy = () => {
      links.forEach((link, i) => {
        const element = document.querySelector(link.hash);
        const rect = element.getBoundingClientRect();

        let condition;

        if (container === window) {
          condition =
            window.scrollY + rect.y + rect.height * visible <=
            container.scrollY + container.innerHeight;
        } else {
          const containerRect = container.getBoundingClientRect();

          condition =
            rect.y + rect.height * visible <=
            containerRect.y + containerRect.height;
        }

        if (condition) {
          setActive(i);
        }
      });
    };

    const scrollHandler = (e, link) => {
      e.preventDefault();

      const element = document.querySelector(link.hash);
      const rect = element.getBoundingClientRect();

      if (container === window) {
        window.scrollTo({
          top: window.scrollY + rect.y - rect.height * visible,
          behavior: "smooth"
        });
      } else {
        
        const containerRect = container.getBoundingClientRect();

        container.style.scrollBehavior = "smooth";

        container.scrollTop =
          container.scrollTop +
          rect.y -
          containerRect.y +
          rect.height -
          containerRect.height;
      }
    };

    findHrefs(el);

    links.forEach(link => {
      link.addEventListener("click", e => scrollHandler(e, link));
    });

    el.spy();

    container.addEventListener("scroll", el.spy);
  },
  unbind(el) {
    window.removeEventListener("scroll", el.spy);
  }
};
