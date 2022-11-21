import { ref } from "vue";

const debounce = ref(false);

const onlyModal = ref<boolean>(null);

const isOnlyModal = () => {
  onlyModal.value = !document.body.classList.contains("modal-open");
};

export const useScrollbarWidth = () => {
  // Animation
  const defaultPaddingRight = document.body.style.paddingRight;
  const getScrollbarWidth = () => {
    const scrollDiv = document.createElement("div");
    scrollDiv.className = "modal-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    const scrollbarWidth =
      scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };
  const beforeEnter = () => {
    if (document.body.scrollHeight > window.innerHeight) {
      !onlyModal.value && isOnlyModal();
      debounce.value = true;
      document.body.classList.add("modal-open");
      if (onlyModal.value) {
        const paddingRightWhenActive = Number(getScrollbarWidth().toFixed(2));
        if (paddingRightWhenActive > 0) {
          document.body.style.paddingRight = `${paddingRightWhenActive}px`;
        }
        setTimeout(() => (debounce.value = false), 500);
      }
    }
  };
  const afterLeave = () => {
    if (debounce.value) return;
    if (onlyModal.value) {
      document.body.classList.remove("modal-open");
      document.body.style.paddingRight = defaultPaddingRight;
    }
  };

  return {
    beforeEnter,
    afterLeave,
  };
};
