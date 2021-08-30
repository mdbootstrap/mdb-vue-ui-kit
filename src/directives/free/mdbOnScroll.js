export default {
  mounted(el, binding) {
    if (binding.value === false || !el) return;

    const options = binding.value;

    let isFirstShow = true;
    let isFirstHide = true;

    el.animate = () => {
      const offset = parseInt(options.offset, 10) || 0;
      const repeatOnShow = options.repeatOnShow || false;
      const callback = options.callback || options;

      const getOffset = () => {
        var rect = el.getBoundingClientRect();
        return rect.top;
      };

      const elementOffsetTop = getOffset();
      const elementHeight = el.offsetHeight;
      const windowHeight = window.innerHeight;
      const isInView =
        elementOffsetTop + offset <= windowHeight &&
        elementOffsetTop + offset + elementHeight >= 0;

      switch (true) {
        case isInView && isFirstShow:
          if (repeatOnShow) {
            isFirstHide = true;
          }
          isFirstShow = false;
          callback("hasShown");
          break;
        case !isInView && isFirstHide && !isFirstShow:
          if (repeatOnShow) {
            isFirstShow = true;
          }
          isFirstHide = false;
          callback("hasHidden");
          break;
        default:
          break;
      }
    };

    window.addEventListener("scroll", el.animate);
  },
  unmounted(el, binding) {
    if (binding.value === false) return;

    window.removeEventListener("scroll", el.animate);
  },
};
