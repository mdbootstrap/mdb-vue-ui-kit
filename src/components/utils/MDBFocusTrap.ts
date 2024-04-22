import { ref } from "vue";
import { on, off } from "./MDBEventHandlers";

type FocusableElement =
  | HTMLButtonElement
  | HTMLAnchorElement
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type TrapElement = HTMLElement | HTMLBodyElement;

export interface FocusTrapInstance {
  initFocusTrap: (element: TrapElement) => boolean;
  removeFocusTrap: () => void;
}

function MDBFocusTrap(): FocusTrapInstance {
  const trapElement = ref<TrapElement>();
  const firstFocusableElement = ref();
  const lastFocusableElement = ref();

  function initFocusTrap(element: TrapElement) {
    trapElement.value = element;

    calculateFocusTrap();

    on(window, "keydown", focusFirstElement);

    return true;
  }

  function calculateFocusTrap() {
    if (!trapElement.value) {
      return;
    }
    const focusable = Array.from(
      trapElement.value.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as NodeListOf<FocusableElement>
    ).filter((el: FocusableElement) => {
      const shouldFocus = el instanceof HTMLAnchorElement ? true : !el.disabled;
      return (
        !el.classList.contains("ps__thumb-x") &&
        !el.classList.contains("ps__thumb-y") &&
        shouldFocus
      );
    });

    if (focusable.length === 0) return;

    firstFocusableElement.value = focusable[0];

    lastFocusableElement.value = focusable[focusable.length - 1];
    on(lastFocusableElement.value, "keydown", (e: KeyboardEvent) =>
      handleLastElementKeydown(e)
    );
  }

  function handleLastElementKeydown(e: KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();
      focusTrap();
    }
  }

  function focusTrap() {
    if (!firstFocusableElement.value) return;

    firstFocusableElement.value.focus();
  }

  function focusFirstElement(e: KeyboardEvent, trap = false) {
    if (e.key === "Tab") {
      e.preventDefault();
      focusTrap();
    }
    if (trap) return;
    off(window, "keydown", focusFirstElement);
  }

  function removeFocusTrap() {
    off(lastFocusableElement.value, "keydown", handleLastElementKeydown);
  }

  return {
    initFocusTrap,
    removeFocusTrap,
  };
}

export default MDBFocusTrap;
