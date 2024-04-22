import { ref, nextTick, reactive } from "vue";
import { createPopper } from "@popperjs/core";

interface PopperOptionsValue {
  [props: string]: any;
}

interface PopperOptions {
  value?: PopperOptionsValue;
}

interface PopperInstance {
  destroy: () => void;
  update: () => void;
}

function MDBPopper() {
  const isPopperActive = ref(false);
  const triggerEl = ref<HTMLElement>();
  const popperEl = ref<HTMLElement>();
  const popper = ref<PopperInstance | undefined | void>(undefined);
  const popperOptions = reactive<PopperOptions>({});

  function setPopper(
    trigger: HTMLElement,
    popper: HTMLElement,
    config: object
  ) {
    triggerEl.value = trigger;
    popperEl.value = popper;
    popperOptions.value = {
      placement: "bottom",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 0],
          },
        },
      ],
      ...config,
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
    if (!triggerEl.value || !popperEl.value) {
      return;
    }
    if (popper.value === undefined || !popper.value) {
      popper.value = createPopper(
        triggerEl.value,
        popperEl.value,
        popperOptions.value
      );
    } else {
      popper.value.update();
    }
  }

  function updatePopper(option: string, value: any) {
    if (popperOptions.value) {
      popperOptions.value[option] = value;
    }

    if (triggerEl.value && popperEl.value) {
      popper.value = createPopper(
        triggerEl.value,
        popperEl.value,
        popperOptions.value
      );
    }
  }

  function destroyPopper() {
    if (!popper.value) {
      return;
    }

    popper.value.destroy();
    popper.value = undefined;
  }

  function getPopperOffset(offset: unknown, element: HTMLElement) {
    if (typeof offset === "string") {
      return offset.split(",").map((val) => Number.parseInt(val, 10));
    }

    if (typeof offset === "function") {
      return (popperData: unknown) => offset(popperData, element);
    }

    return offset;
  }

  return {
    setPopper,
    togglePopper,
    isPopperActive,
    openPopper,
    closePopper,
    updatePopper,
    destroyPopper,
    getPopperOffset,
  };
}

export default MDBPopper;
