import {
  computed,
  EmitsOptions,
  onBeforeUnmount,
  provide,
  ref,
  watchEffect,
} from "vue";
import { on, off } from "../../components/utils/MDBEventHandlers";
import MDBFocusTrap from "../../../src/components/utils/MDBFocusTrap";

export interface Props {
  modelValue: boolean;
  animation: boolean;
  staticBackdrop: boolean;
  size: string | undefined;
  centered: boolean | string;
  scrollable: boolean;
  fullscreen: boolean | string;
  dialogClasses: string | undefined;
  removeBackdrop: boolean;
  keepOverflow: boolean;
  bgSrc: string;
  keyboard: boolean;
  focus: boolean;
  duration: number;
  labelledby: string;
  tag: string;
}

export default function useMDBModal(
  props: Partial<Props>,
  emit: (name: string, value?: any) => void
) {
  const root = ref("root");
  const dialog = ref<HTMLElement | string>("dialog");
  const dialogTransform = ref("");
  const focusTrap = ref(null);

  const isActive = ref(props.modelValue);
  const clickFromBackdrop = ref(false);

  const thisElement = ref<HTMLElement | null | string>(null);

  watchEffect(() => {
    isActive.value = props.modelValue;
    if (isActive.value) {
      emit("update:modelValue", true);
    }
  });

  const wrapperClass = computed(() => {
    return [
      "modal",
      props.animation && "fade",
      isActive.value && "show",
      props.staticBackdrop && "modal-static",
    ];
  });

  const dialogClass = computed(() => {
    return [
      "modal-dialog",
      props.size && "modal-" + props.size,
      props.centered && "modal-dialog-centered",
      props.scrollable && "modal-dialog-scrollable",
      props.fullscreen && fullscreenClass.value,
      props.dialogClasses,
    ];
  });

  const backdropStyle = computed(() => {
    return props.removeBackdrop
      ? false
      : { "background-color": `rgba(0,0,0, 0.5)` };
  });

  // shouldOverflow with backdropOverflowStyle prevents bottom modal create additional scrollbar on show
  const shouldOverflow = ref(false);
  const backdropOverflowStyle = computed(() => {
    if (shouldOverflow.value || props.keepOverflow) {
      return;
    }
    return "overflow: hidden";
  });

  const computedContentStyle = computed(() => {
    return props.bgSrc ? { "background-image": `url("${props.bgSrc}")` } : null;
  });

  const fullscreenClass = computed(() => {
    if (!props.fullscreen) {
      return false;
    }
    return [
      props.fullscreen !== true
        ? `modal-fullscreen-${props.fullscreen}`
        : "modal-fullscreen",
    ];
  });

  const animateStaticBackdrop = () => {
    if (typeof dialog.value !== "string") {
      animateStaticModal(dialog.value);
    }
  };

  const closeModal = () => {
    emit("update:modelValue", false);
  };

  provide("closeModal", closeModal);

  const animateStaticModal = (el: HTMLElement) => {
    el.style.transform = `scale(1.02)`;
    setTimeout(() => (el.style.transform = `scale(1.0)`), 300);
  };

  const handleEscKeyUp = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isActive.value) {
      closeModal();
    }
  };

  const isBodyOverflowing = ref<boolean | null>(null);
  const scrollbarWidth = ref(0);

  // Bootstrap way to measure scrollbar width
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "modal-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth =
      scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  const setScrollbar = () => {
    const rect = document.body.getBoundingClientRect();
    isBodyOverflowing.value =
      Math.round(rect.left + rect.right) < window.innerWidth;
    scrollbarWidth.value = isBodyOverflowing.value
      ? Number(getScrollbarWidth().toFixed(2))
      : 0;
  };

  const enter = (el: HTMLElement) => {
    shouldOverflow.value = false;

    dialogTransform.value = "translate(0, -25%)";

    const child = el.childNodes[0] as HTMLElement;
    child.style.transform = dialogTransform.value;
    el.style.opacity = "0";
    el.style.display = "block";

    setScrollbar();

    isOnlyNonInvasiveModal();

    if (onlyNonInvasiveModal.value) {
      document.body.style.paddingRight = `${scrollbarWidth.value}px`;
      el.style.paddingRight = `${scrollbarWidth.value}px`;
      document.body.classList.add("modal-open");
    }

    emit("show", root.value);
  };
  const afterEnter = (el: HTMLElement) => {
    const child = el.childNodes[0] as HTMLElement;
    child.style.transform = "translate(0,0)";
    el.style.opacity = "1";

    setTimeout(() => {
      shouldOverflow.value = true;
      emit("shown", root.value);
    }, 400);
    thisElement.value = root.value;

    if (props.keyboard) {
      on(window, "keyup", handleEscKeyUp);
    }

    if (props.focus) {
      focusTrap.value = MDBFocusTrap();
      focusTrap.value?.initFocusTrap(root.value);
    }
  };
  const beforeLeave = (el: HTMLElement) => {
    const child = el.childNodes[0] as HTMLElement;
    child.style.transform = dialogTransform.value;
    el.style.opacity = "0";

    if (onlyNonInvasiveModal.value) {
      setTimeout(() => {
        el.style.paddingRight = "";
        document.body.style.paddingRight = "";
        document.body.classList.remove("modal-open");
      }, 200);
    }

    emit("hide", thisElement.value);

    if (props.keyboard) {
      off(window, "keyup", handleEscKeyUp);
    }
    if (props.focus && focusTrap.value) {
      focusTrap.value.removeFocusTrap();
    }
  };
  const afterLeave = () => {
    emit("hidden", thisElement.value);
    shouldOverflow.value = false;
  };

  onBeforeUnmount(() => {
    off(window, "keyup", handleEscKeyUp);
  });

  const onlyNonInvasiveModal = ref(true);

  const isOnlyNonInvasiveModal = () => {
    onlyNonInvasiveModal.value = document.body.classList.contains("modal-open")
      ? document.querySelector(".modal.non-invasive")
        ? true
        : false
      : true;
  };

  return {
    wrapperClass,
    dialogClass,
    backdropStyle,
    backdropOverflowStyle,
    computedContentStyle,
    root,
    dialog,
    isActive,
    closeModal,
    animateStaticBackdrop,
    enter,
    afterEnter,
    beforeLeave,
    afterLeave,
    scrollbarWidth,
    setScrollbar,
    shouldOverflow,
    thisElement,
    handleEscKeyUp,
    focusTrap,
    dialogTransform,
    animateStaticModal,
    fullscreenClass,
    clickFromBackdrop,
    isOnlyNonInvasiveModal,
    onlyNonInvasiveModal,
  };
}
