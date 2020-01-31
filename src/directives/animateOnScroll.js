const animateOnScroll = {
  inserted(el, binding) {
    let hideAfterFirstScroll = false;

    el.animate = () => {

      if (window.scrollY > 0 && !hideAfterFirstScroll) {
        hideAfterFirstScroll = true;
        el.setAttribute("style", "visibility: hidden");
      }

      const offset = el => {
        var rect = el.getBoundingClientRect(),
          scrollLeft =
            window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };

      const position = binding.value.position || 0;
      const delay = binding.value.delay || 0;
      const animation = binding.value.animation || binding.value;

      if (
        offset(el).top -
          window.scrollY +
          el.clientHeight +
          (window.innerHeight * position) / 100 <
        window.innerHeight
      ) {
        setTimeout(() => {
          let classNames = el.getAttribute("class");
          if (!classNames.split(" ").find(el => el === animation)) {
            classNames = `${classNames} animated ${animation}`;
            el.setAttribute("style", "visibility: visible");
            el.setAttribute("class", classNames);
          }
        }, delay);
      }
      return offset(el).top - window.scrollY < window.innerHeight;
    };
    window.addEventListener("scroll", el.animate);
  },
  unbind(el) {
    window.removeEventListener("scroll", el.animate);
  }
};

export default animateOnScroll;
export { animateOnScroll as mdbAnimateOnScroll, animateOnScroll };

