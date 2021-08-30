import { on, off } from "@/components/utils/MDBEventHandlers";

export default {
  mounted(el) {
    if (!el) return;

    let firstFocusableElement;
    let lastFocusableElement;

    el.initFocusTrap = () => {
      el.calculateFocusTrap();

      on(window, "keydown", el.focusFirstElement);
    };

    el.calculateFocusTrap = () => {
      const focusable = Array.from(
        el.querySelectorAll(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter(item => {
        return (
          !item.classList.contains("ps__thumb-x") &&
          !item.classList.contains("ps__thumb-y") &&
          !item.disabled
        );
      });

      if (focusable.length === 0) return;

      firstFocusableElement = focusable[0];

      lastFocusableElement = focusable[focusable.length - 1];
      on(lastFocusableElement, "keydown", e => el.focusFirstElement(e, true));
    };

    el.focusTrap = () => {
      if (!firstFocusableElement) return;

      firstFocusableElement.focus();
    };

    el.focusFirstElement = (e, trap = false) => {
      if (e.key === "Tab") {
        e.preventDefault();
        el.focusTrap();
      }
      if (trap) return;
      off(window, "keydown", el.focusFirstElement);
    };

    el.removeFocusTrap = () => {
      off(lastFocusableElement, "keydown", el.handleLastElementKeydown);
    };

    el.initFocusTrap();
  },
  unmounted(el) {
    if (!el) return;

    el.removeFocusTrap();
  }
};
