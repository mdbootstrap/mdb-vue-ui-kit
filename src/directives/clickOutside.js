export default {
  stopProp(e) {
    e.stopPropagation();
  },

  inserted(el, binding) {
    const handler = e => {
      if (!el.contains(e.target) && el !== e.target) {
        binding.value(e);
      }
    }
    el.clickOutside = handler;

    document.addEventListener('click', el.clickOutside);
    document.addEventListener('touchstart', el.clickOutside);
  },

  unbind(el) {
    if (!el.clickOutside) return;

    document.removeEventListener('click', el.clickOutside);
    document.removeEventListener('touchstart', el.clickOutside);
    delete el.clickOutside;
  }
};
