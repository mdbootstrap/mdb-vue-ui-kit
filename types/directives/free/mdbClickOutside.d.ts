import type { DirectiveBinding } from "vue";
interface Element extends HTMLElement {
    clickOutside?: (e: Event) => void;
}
declare const _default: {
    stopProp(e: Event): void;
    mounted(el: Element, binding: DirectiveBinding): void;
    unmounted(el: Element, binding: DirectiveBinding): void;
};
export default _default;
