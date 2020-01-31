const ScrollSpy = {
  inserted(el, binding, vnode) {
    el.scrollSpy = {
      spy: null,
      findHrefs: null,
      setActive: null,
      clickHandler: null,
      links: [],
      container: window,
      scrollPosition: null,
      visible: 0.5
    };

    if (binding.value) {
      el.scrollSpy.container = document.getElementById(binding.value.container) || window;
      el.scrollSpy.visible = binding.value.visible || 0.5;
    }

    el.scrollSpy.scrollPosition = el.scrollSpy.container === window ? el.scrollSpy.container.scrollY : el.scrollSpy.container.scrollTop;

    el.scrollSpy.findHrefs = node => {
      if (node.attributes && node.attributes.href) {
        el.scrollSpy.links.push(node);
      } else if (node.childNodes) {
        node.childNodes.forEach(child => el.scrollSpy.findHrefs(child));
      }
    };

    el.scrollSpy.setActive = index => {
      if (binding.value && binding.value.callback) {
        vnode.context[binding.value.callback](index);
        return;
      }
      el.scrollSpy.links.forEach((link, i) => {
        if (index === i) link.classList.add("active");
        else link.classList.remove("active");
      });
    };

    el.scrollSpy.spy = () => {
      if (el.disableScroll) return;

      const container = el.scrollSpy.container;

      const scrollPosition =
        container === window ? container.scrollY : container.scrollTop;
      const direction =
        scrollPosition - el.scrollSpy.scrollPosition > 0 ? 1 : -1;
      el.scrollSpy.scrollPosition = scrollPosition;

      el.scrollSpy.links.forEach(link => {
        const element = document.querySelector(link.hash);
        const rect = element.getBoundingClientRect();

        let condition;

        if (container === window) {
          condition =
            window.innerHeight > rect.top + rect.height * el.scrollSpy.visible &&
            rect.top + rect.height * (1 - el.scrollSpy.visible) >= 0;
        } else {
          const containerRect = container.getBoundingClientRect();

          condition =
            rect.top + rect.height * el.scrollSpy.visible <=
              containerRect.top + containerRect.height &&
            rect.top + rect.height * (1 - el.scrollSpy.visible) >= containerRect.top;
        }

        link.isLinkActive = condition;
      });

      const activeLinks = el.scrollSpy.links.filter(link => link.isLinkActive);

      if (activeLinks.length > 0) {
        const activeElement =
          direction === 1
            ? activeLinks[activeLinks.length - 1]
            : activeLinks[0];

        const activeLink = activeElement.scrollspyIndex;

        el.scrollSpy.setActive(activeLink);
      } else el.scrollSpy.setActive(-1);
    };



    el.scrollSpy.clickHandler = (e, link) => {
      const container = el.scrollSpy.container;

      window.clearTimeout(el.disableScrollTimeout);
      el.disableScroll = true;
      e.preventDefault();

      const element = document.querySelector(link.hash);
      const rect = element.getBoundingClientRect();

      if (container === window) {
        window.scrollTo({
          top: window.scrollY + rect.y - rect.height * el.scrollSpy.visible,
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

      el.scrollSpy.setActive(link.scrollspyIndex);

      el.disableScrollTimeout = setTimeout(() => {
        el.disableScroll = false;
      }, 800);
    };

    el.scrollSpy.findHrefs(el);

    el.scrollSpy.links.forEach((link, i) => {
      link.scrollspyIndex = i;
      link.addEventListener("click", e => el.scrollSpy.clickHandler(e, link));
    });

    el.scrollSpy.spy();

    el.scrollSpy.container.addEventListener("scroll", el.scrollSpy.spy);
  },
  unbind(el) {
    window.removeEventListener("scroll", el.scrollSpy.spy);
  }
};

export default ScrollSpy;
export { ScrollSpy as mdbScrollSpy, ScrollSpy };
