import { ref, reactive } from "vue";

const isVisible = element => {
  if (!element) {
    return false;
  }

  if (element.style && element.parentNode && element.parentNode.style) {
    const elementStyle = getComputedStyle(element);
    const parentNodeStyle = getComputedStyle(element.parentNode);

    return (
      elementStyle.display !== "none" &&
      parentNodeStyle.display !== "none" &&
      elementStyle.visibility !== "hidden"
    );
  }

  return false;
};

function MDBStackable() {
  const stackableElement = ref(null);
  const stackableSelector = ref(null);
  const toastProxy = ref(null);
  const config = reactive({});
  const offset = ref(null);
  const parent = ref(null);

  function setStack(proxy, element, selector, options) {
    stackableElement.value = element;
    stackableSelector.value = selector;
    toastProxy.value = proxy;
    config.position = options.position || "top";
    config.container = options.container || null;
    config.refresh = options.refresh || 1000;
    config.filter =
      options.filter ||
      function(el) {
        return el;
      };

    if (config.container) {
      parent.value = document.querySelector(config.container);
    }
  }

  function stackableElements() {
    return [...document.querySelectorAll(stackableSelector.value)]
      .filter((el, i) => config.filter(el, i))
      .map(el => ({ el, rect: el.getBoundingClientRect() }))
      .filter(({ el, rect }) => {
        const basicCondition =
          el.id !== stackableElement.value.id && isVisible(el);
        if (offset.value === null) {
          return basicCondition;
        }

        return basicCondition && getBoundryOffset(rect) < offset.value;
      })
      .sort((a, b) => {
        return getBoundryOffset(b.rect) - getBoundryOffset(a.rect);
      });
  }

  function nextStackElements() {
    return [...document.querySelectorAll(stackableSelector.value)]
      .filter(el => el.id !== stackableElement.value.id && isVisible(el))
      .filter((el, i) => config.filter(el, i))
      .filter(el => {
        return getBoundryOffset(el.getBoundingClientRect()) > offset.value;
      });
  }

  function getBoundryOffset(rect) {
    let parentTopOffset = 0;
    let parentBottomBoundry = window.innerHeight;

    if (parent.value) {
      const parentRect = parent.value.getBoundingClientRect();

      parentTopOffset = parentRect.top;
      parentBottomBoundry = parentRect.bottom;
    }

    if (config.position === "top") {
      return rect.top - parentTopOffset;
    }
    return parentBottomBoundry - rect.bottom;
  }

  function calculateStackingOffset() {
    const [previousElement] = stackableElements();

    if (!previousElement) {
      offset.value = 0;
    } else {
      offset.value =
        getBoundryOffset(previousElement.rect) + previousElement.rect.height;
    }

    return offset.value;
  }

  function resetStackingOffset() {
    offset.value = null;
  }

  return {
    setStack,
    nextStackElements,
    calculateStackingOffset,
    resetStackingOffset
  };
}

export default MDBStackable;
