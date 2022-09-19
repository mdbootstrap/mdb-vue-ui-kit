import type { DirectiveBinding } from "vue";

interface Element extends HTMLElement {
  clickOutside?: (e: Event) => void;
}

export default {
  stopProp(e: Event) {
    e.stopPropagation();
  },

  mounted(el: Element, binding: DirectiveBinding) {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement;
      if (!el.contains(target) && el !== target) {
        binding.value(e);
      }
    };
    el.clickOutside = handler;

    const event = binding.modifiers.mousedown ? "mousedown" : "click";

    document.addEventListener(event, (e) => el.clickOutside?.(e));
    document.addEventListener("touchstart", (e) => el.clickOutside?.(e));
  },

  unmounted(el: Element, binding: DirectiveBinding) {
    if (!el.clickOutside) return;

    const event = binding.modifiers.mousedown ? "mousedown" : "click";

    document.removeEventListener(event, (e) => el.clickOutside?.(e));
    document.removeEventListener("touchstart", (e) => el.clickOutside?.(e));
    delete el.clickOutside;
  },
};
