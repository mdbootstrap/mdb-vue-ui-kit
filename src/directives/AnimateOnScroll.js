export default {
  name: 'animateOnScroll',
  inserted(el, binding) {
    let f = () => {
      const offset = el => {
        var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
      };
      if (offset(el).top - window.scrollY < window.innerHeight) {
        let classNames = el.getAttribute('class');
        classNames = `${classNames} animated ${binding.value}`;
        el.setAttribute(
          'class',
          classNames
        );
      }
      return offset(el).top - window.scrollY < window.innerHeight;
    };
    window.addEventListener('scroll', f);
  }
};