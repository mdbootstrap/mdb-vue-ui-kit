import { ref, nextTick, reactive } from "vue";
import Popper from "popper.js";

function MDBUsePopper() {
  const isActive = ref(false);
  const triggerEl = ref(null);
  const popperEl = ref(null);
  const popper = ref(undefined);
  const popperOptions = reactive({});

  function setInitial(trigger, popper, config) {
    triggerEl.value = trigger;
    popperEl.value = popper;
    popperOptions.value = {
      placement: "bottom",
      eventsEnabled: false,
      modifiers: {
        offset: {
          offset: "0"
        }
      },
      ...config
    };
  }

  function toggle() {
    isActive.value = !isActive.value;

    if (isActive.value) {
      nextTick(() => setupPopper());
    }
  }

  function open() {
    if (isActive.value) {
      return;
    }

    isActive.value = true;
    nextTick(() => setupPopper());
  }

  function close() {
    if (!isActive.value) {
      return;
    }

    isActive.value = !isActive.value;
  }

  function setupPopper() {
    if (popper.value === undefined) {
      popper.value = new Popper(
        triggerEl.value,
        popperEl.value,
        popperOptions.value
      );
    } else {
      popper.value.scheduleUpdate();
    }
  }

  function destroy() {
    if (!popper.value) {
      return;
    }

    popper.value.destroy();
  }

  return {
    setInitial,
    toggle,
    isActive,
    open,
    close,
    destroy
  };
}

export default MDBUsePopper;
