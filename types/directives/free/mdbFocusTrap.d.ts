interface FocusElement extends HTMLElement {
    initFocusTrap: () => void;
    calculateFocusTrap: () => void;
    focusFirstElement: (e?: KeyboardEvent, trap?: boolean) => void;
    focusTrap: () => void;
    removeFocusTrap: () => void;
    handleLastElementKeydown: () => void;
}
declare const _default: {
    mounted(el: FocusElement): void;
    unmounted(el: FocusElement): void;
};
export default _default;
