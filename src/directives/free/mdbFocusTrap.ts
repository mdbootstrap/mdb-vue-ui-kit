import { on, off } from "../../../src/components/utils/MDBEventHandlers";

interface FocusElement extends HTMLElement {
  initFocusTrap: () => void;
  calculateFocusTrap: () => void;
  focusFirstElement: (e?: KeyboardEvent, trap?: boolean) => void;
  focusTrap: () => void;
  removeFocusTrap: () => void;
  handleLastElementKeydown: () => void;
}

interface FocusableElement extends HTMLElement {
  disabled?: boolean;
}

export default {
  mounted(el: FocusElement) {
    if (!el) return;

    let firstFocusableElement: HTMLElement;
    let lastFocusableElement: HTMLElement;

    el.initFocusTrap = () => {
      el.calculateFocusTrap();

      on(window, "keydown", el.focusFirstElement);
    };

    el.calculateFocusTrap = () => {
      const focusable = Array.from(
        el.querySelectorAll<FocusableElement>(
          'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
      ).filter((item) => {
        return (
          !item.classList.contains("ps__thumb-x") &&
          !item.classList.contains("ps__thumb-y") &&
          !item.disabled
        );
      });

      if (focusable.length === 0) return;

      firstFocusableElement = focusable[0];

      lastFocusableElement = focusable[focusable.length - 1];
      on(lastFocusableElement, "keydown", (e: KeyboardEvent) =>
        (el.focusFirstElement as Function)(e, true)
      );
    };

    el.focusTrap = () => {
      if (!firstFocusableElement) return;

      firstFocusableElement.focus();
    };

    el.focusFirstElement = (e: KeyboardEvent, trap = false) => {
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
  unmounted(el: FocusElement) {
    if (!el) return;

    el.removeFocusTrap();
  },
};
