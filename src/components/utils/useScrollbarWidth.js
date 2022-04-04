import { ref } from "vue";

const debounce = ref(false);

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
      debounce.value = true;
      document.body.classList.add("modal-open");
      const paddingRightWhenActive = getScrollbarWidth().toFixed(2);
      if (paddingRightWhenActive > 0) {
        document.body.style.paddingRight = `${paddingRightWhenActive}px`;
      }
      setTimeout(() => (debounce.value = false), 500);
    }
  };
  const afterLeave = () => {
    if (debounce.value) return;
    document.body.classList.remove("modal-open");
    document.body.style.paddingRight = defaultPaddingRight;
  };

  return {
    beforeEnter,
    afterLeave,
  };
};
