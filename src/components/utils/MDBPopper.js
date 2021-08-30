import { ref, nextTick, reactive } from "vue";
import Popper from "popper.js";

function MDBPopper() {
  const isPopperActive = ref(false);
  const triggerEl = ref(null);
  const popperEl = ref(null);
  const popper = ref(undefined);
  const popperOptions = reactive({});

  function setPopper(trigger, popper, config) {
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

  function togglePopper() {
    isPopperActive.value = !isPopperActive.value;

    if (isPopperActive.value) {
      nextTick(() => setupPopper());
    }
  }

  function openPopper() {
    if (isPopperActive.value) {
      return;
    }
    isPopperActive.value = true;
    nextTick(() => (popper.value = setupPopper()));
  }

  function closePopper() {
    if (!isPopperActive.value) {
      return;
    }

    isPopperActive.value = !isPopperActive.value;
  }

  function setupPopper() {
    if (popper.value === undefined || !popper.value) {
      popper.value = new Popper(
        triggerEl.value,
        popperEl.value,
        popperOptions.value
      );
    } else {
      popper.value.scheduleUpdate();
    }
  }

  function updatePopper(option, value) {
    popperOptions.value[option] = value;

    popper.value = new Popper(
      triggerEl.value,
      popperEl.value,
      popperOptions.value
    );
  }

  function destroyPopper() {
    if (!popper.value) {
      return;
    }

    popper.value.destroy();
    popper.value = undefined;
  }

  return {
    setPopper,
    togglePopper,
    isPopperActive,
    openPopper,
    closePopper,
    updatePopper,
    destroyPopper
  };
}

export default MDBPopper;
