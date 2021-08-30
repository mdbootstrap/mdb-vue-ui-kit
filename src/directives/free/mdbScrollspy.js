const mdbScrollspy = {
  mounted(el, binding) {
    el.scrollspy = {
      links: [],
      container: window,
      scrollPosition: null,
      async: false,
      offset: 0,
    };

    if (binding.value) {
      el.scrollspy.container =
        document.getElementById(binding.value.container) || window;
      el.scrollspy.async = binding.value.async || false;
      el.scrollspy.offset = binding.value.offset || 0;
    }

    el.scrollspy.scrollPosition = getScrollPostion(el.scrollspy.container);

    el.scrollspy.findHrefs = (node) => {
      if (node.attributes && node.attributes.href) {
        el.scrollspy.links.push(node);
        if (node.classList.contains("collapsible-scrollspy")) {
          const list = node.parentNode.querySelector("ul");
          list.dataset.mdbCollapsibleScrollspyHeight = list.clientHeight;

          list.style.overflow = "hidden";
          list.style.height = "0";
        }
      } else if (node.childNodes) {
        node.childNodes.forEach((child) => el.scrollspy.findHrefs(child));
      }
    };

    el.scrollspy.setActive = (index) => {
      if (binding.value && binding.value.callback) {
        binding.instance[binding.value.callback](index);
        return;
      }
      el.scrollspy.links.forEach((link, i) => {
        if (index === i) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });

      setNestedActive(el.scrollspy.links, index, el.scrollspy.container);
      setCollapsibleActive(el.scrollspy.links);
    };

    el.scrollspy.spy = () => {
      if (el.disableScroll) return;

      const container = el.scrollspy.container;

      el.scrollspy.scrollPosition = getScrollPostion(container);

      el.scrollspy.links.forEach((link) => {
        const element = document.querySelector(link.hash);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();

        let condition;

        if (container === window) {
          condition =
            window.innerHeight > rect.top && rect.top + rect.height >= 0;
        } else {
          const containerRect = container.getBoundingClientRect();

          condition =
            rect.top <= containerRect.top + containerRect.height &&
            rect.top + rect.height >= containerRect.top;
        }

        link.isLinkActive = condition;
      });

      const activeLinks = el.scrollspy.links.filter(
        (link) => link.isLinkActive
      );

      if (activeLinks.length > 0) {
        const activeElement = activeLinks[0];
        const activeLink = activeElement.scrollspyIndex;

        el.scrollspy.setActive(activeLink);
      } else {
        el.scrollspy.setActive(-1);
      }
    };

    el.scrollspy.clickHandler = (e, link) => {
      const container = el.scrollspy.container;

      window.clearTimeout(el.disableScrollTimeout);
      el.disableScroll = true;
      e.preventDefault();

      const element = document.querySelector(link.hash);
      if (!element) {
        return;
      }

      const rect = element.getBoundingClientRect();

      if (container === window) {
        window.scrollTo({
          top: window.scrollY + rect.y - el.scrollspy.offset,
        });
      } else {
        const containerRect = container.getBoundingClientRect();
        container.style.scrollBehavior = "smooth";
        container.scrollTop =
          container.scrollTop + rect.y - containerRect.y - el.scrollspy.offset;
      }

      el.scrollspy.setActive(link.scrollspyIndex);
      setParentsActive(el.scrollspy.links[link.scrollspyIndex], el);
      setCollapsibleActive(el.scrollspy.links);

      el.disableScrollTimeout = setTimeout(() => {
        el.disableScroll = false;
      }, 800);
    };

    el.scrollspy.findHrefs(el);

    el.scrollspy.links.forEach((link, i) => {
      link.scrollspyIndex = i;
      link.addEventListener("click", (e) => el.scrollspy.clickHandler(e, link));
    });

    el.scrollspy.spy();

    el.scrollspy.container.addEventListener("scroll", el.scrollspy.spy);
    window.addEventListener("resize", el.scrollspy.spy);
  },

  updated(el, binding) {
    if (
      binding.modifiers.async &&
      !binding.value.loading &&
      binding.oldValue.loading
    ) {
      setTimeout(() => {
        el.scrollspy.links = [];
        el.scrollspy.findHrefs(el);
        el.scrollspy.links.forEach((link, i) => {
          link.scrollspyIndex = i;
          link.addEventListener("click", (e) =>
            el.scrollspy.clickHandler(e, link)
          );
        });

        el.scrollspy.spy();
      }, 0);
    }
  },

  unmounted(el) {
    window.removeEventListener("scroll", el.scrollspy.spy);
    window.removeEventListener("resize", el.scrollspy.spy);
  },
};

const setNestedActive = (links, index, container) => {
  const allLinks = links[index];

  if (!allLinks) {
    return;
  }

  const allNestedLinks = [...allLinks.parentNode.querySelectorAll("a")];
  allNestedLinks.shift();
  allNestedLinks.forEach((link) => {
    const element = document.querySelector(link.hash);
    if (!element) {
      return;
    }

    const rect = element.getBoundingClientRect();

    let condition;

    if (container === window) {
      condition = window.innerHeight > rect.top && rect.top + rect.height >= 0;
    } else {
      const containerRect = container.getBoundingClientRect();

      condition =
        rect.top < containerRect.top &&
        rect.top + rect.height > containerRect.top;
    }

    link.isActive = condition;
  });

  const activeLinks = allNestedLinks.filter((link) => link.isLinkActive);
  if (activeLinks.length > 0) {
    activeLinks[0].classList.add("active");
  }
};

const setParentsActive = (link, el) => {
  let parent = link.parentNode;

  if (!parent) {
    return;
  }

  while (parent !== el) {
    if (parent.classList.contains("nav-item")) {
      parent.querySelector("a").classList.add("active");
    }
    parent = parent.parentNode;
  }
};

const getScrollPostion = (container) => {
  return container === window ? container.scrollY : container.scrollTop;
};

const setCollapsibleActive = (links) => {
  links.forEach((link) => {
    if (
      link.classList.contains("collapsible-scrollspy") &&
      link.classList.contains("active")
    ) {
      const list = link.parentNode.querySelector("ul");

      list.style.overflow = "hidden";
      list.style.height = `${list.dataset.mdbCollapsibleScrollspyHeight}px`;
    } else if (link.classList.contains("collapsible-scrollspy")) {
      const list = link.parentNode.querySelector("ul");

      list.style.overflow = "hidden";
      list.style.height = "0";
    }
  });
};

export default mdbScrollspy;
