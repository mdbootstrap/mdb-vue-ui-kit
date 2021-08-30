import { ref } from "vue";
import { on, off } from "./MDBEventHandlers";

function MDBFocusTrap() {
  const trapElement = ref(null);
  const firstFocusableElement = ref(null);
  const lastFocusableElement = ref(null);

  function initFocusTrap(element) {
    trapElement.value = element;

    calculateFocusTrap();

    on(window, "keydown", focusFirstElement);

    return true;
  }

  function calculateFocusTrap() {
    const focusable = Array.from(
      trapElement.value.querySelectorAll(
        'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => {
      return (
        !el.classList.contains("ps__thumb-x") &&
        !el.classList.contains("ps__thumb-y") &&
        !el.disabled
      );
    });

    if (focusable.length === 0) return;

    firstFocusableElement.value = focusable[0];

    lastFocusableElement.value = focusable[focusable.length - 1];
    on(lastFocusableElement.value, "keydown", (e) =>
      handleLastElementKeydown(e, true)
    );
  }

  function handleLastElementKeydown(e) {
    if (e.key === "Tab") {
      e.preventDefault();
      focusTrap();
    }
  }

  function focusTrap() {
    if (!firstFocusableElement.value) return;

    firstFocusableElement.value.focus();
  }

  function focusFirstElement(e, trap = false) {
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
