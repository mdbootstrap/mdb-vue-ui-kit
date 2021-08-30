<template>
  <component
    :is="tag"
    :class="className"
    v-bind="$attrs"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @keydown.right="handleRight"
    @keydown.left="handleLeft"
    @touchstart="handleTouchstart"
    @touchmove="handleTouchmove"
    @touchend="handleTouchend"
  >
    <div v-if="indicators" class="carousel-indicators">
      <button
        v-for="(item, key) in items"
        :key="key"
        type="button"
        :class="activeItemKey === key && 'active'"
        :aria-current="activeItemKey === key && 'true'"
        :aria-label="`Slide ${key + 1}`"
        @click="slideTo(key)"
      ></button>
    </div>

    <div class="carousel-inner" ref="carouselInnerRef">
      <div v-for="(item, key) in items" class="carousel-item" :key="key">
        <img :src="item.src" :alt="item.alt" :class="itemsClass" />
        <div v-if="item.label || item.caption" :class="captionsClass">
          <h5 v-if="item.label">{{ item.label }}</h5>
          <p v-if="item.caption">{{ item.caption }}</p>
        </div>
      </div>
    </div>

    <button
      v-if="controls"
      @click="prev"
      class="carousel-control-prev"
      type="button"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      v-if="controls"
      @click="next"
      class="carousel-control-next"
      type="button"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </component>
</template>

<script>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";

export default {
  name: "MDBCarousel",
  props: {
    captionsClass: {
      type: String,
      default: "carousel-caption d-none d-md-block",
    },
    controls: {
      type: Boolean,
      default: true,
    },
    dark: Boolean,
    fade: Boolean,
    indicators: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: [Number, Boolean],
      default: 5000,
    },
    items: {
      type: Array,
      reguired: true,
    },
    itemsClass: {
      type: String,
      default: "d-block w-100",
    },
    keyboard: {
      type: Boolean,
      default: true,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    pause: {
      type: [String, Boolean],
      default: "hover",
    },
    tag: {
      type: String,
      default: "div",
    },
    touch: {
      type: Boolean,
      default: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const className = computed(() => {
      return [
        "carousel",
        "slide",
        props.fade && "carousel-fade",
        props.dark && "carousel-dark",
      ];
    });

    const activeItemKey = ref(props.modelValue);
    const carouselInnerRef = ref(null);
    const isSliding = ref(false);

    let slidingInterval = null;
    let isPaused = false;

    const prev = () => {
      slideTo("prev");
    };
    const next = () => {
      slideTo("next");
    };
    const slideTo = (target) => {
      if (isSliding.value) {
        return;
      }

      const isPausedState = isPaused;
      isPaused = false;

      slide(target);

      isPaused = isPausedState;
    };

    const slide = (target) => {
      if (isPaused || !carouselInnerRef.value) {
        return;
      }

      isSliding.value = true;
      const targetItemKey = getTargetKey(target);
      const isNext = getTargetSlideOrder(target);
      const directionalClassName = getDirectionalClassName(isNext);
      const orderClassName = getOrderClassName(isNext);
      const currentItem = getItem(activeItemKey.value);
      const targetItem = getItem(targetItemKey);

      activeItemKey.value = targetItemKey;
      targetItem.classList.add(orderClassName);
      emit("update:modelValue", activeItemKey.value);

      if (props.interval) {
        reloadInterval();
      }

      setTimeout(() => {
        currentItem.classList.add(directionalClassName);
        targetItem.classList.add(directionalClassName);
      }, 20);

      setTimeout(() => {
        currentItem.classList.remove("active");
        currentItem.classList.remove(directionalClassName);
        targetItem.classList.remove(directionalClassName);
        targetItem.classList.remove(orderClassName);
        targetItem.classList.add("active");
        isSliding.value = false;
      }, 600);
    };

    const getTargetKey = (target) => {
      if (target === "prev" && activeItemKey.value <= 0) {
        return props.items.length - 1;
      } else if (target === "prev") {
        return activeItemKey.value - 1;
      } else if (
        target === "next" &&
        activeItemKey.value >= props.items.length - 1
      ) {
        return 0;
      } else if (target === "next") {
        return activeItemKey.value + 1;
      } else {
        return target;
      }
    };
    const getTargetSlideOrder = (target) => {
      if (target === "next" || target > activeItemKey.value) {
        return true;
      } else {
        return false;
      }
    };
    const getDirectionalClassName = (isNext) =>
      isNext ? "carousel-item-start" : "carousel-item-end";
    const getOrderClassName = (isNext) =>
      isNext ? "carousel-item-next" : "carousel-item-prev";
    const getItem = (key) =>
      carouselInnerRef.value.querySelectorAll(".carousel-item")[key];

    const reloadInterval = () => {
      clearInterval(slidingInterval);
      slidingInterval = null;

      const itemInterval =
        props.items[activeItemKey.value].interval || props.interval;
      slidingInterval = setInterval(() => {
        slide("next");
      }, itemInterval);
    };

    // keyboard accessibility
    const handleMouseenter = () => {
      if (props.pause === "hover" && props.interval) {
        clearInterval(slidingInterval);
        slidingInterval = null;
        isPaused = true;
      }
    };
    const handleMouseleave = () => {
      if (props.pause === "hover" && props.interval) {
        reloadInterval();
        isPaused = false;
      }
    };
    const handleRight = () => {
      if (props.keyboard) {
        next();
      }
    };
    const handleLeft = () => {
      if (props.keyboard) {
        prev();
      }
    };

    // touch events
    const pointerEvent = Boolean(window.PointerEvent);
    const touchStartX = ref(0);
    const touchDeltaX = ref(0);
    const handleTouchstart = (event) => {
      if (!props.touch) {
        return;
      }

      if (
        pointerEvent &&
        (event.pointerType === "pen" || event.pointerType === "touch")
      ) {
        touchStartX.value = event.clientX;
      } else {
        touchStartX.value = event.touches[0].clientX;
      }
    };
    const handleTouchmove = (event) => {
      if (!props.touch) {
        return;
      }

      touchDeltaX.value =
        event.touches && event.touches.length > 1
          ? 0
          : event.touches[0].clientX - touchStartX.value;
    };
    const handleTouchend = (event) => {
      if (!props.touch) {
        return;
      }

      if (
        pointerEvent &&
        (event.pointerType === "pen" || event.pointerType === "touch")
      ) {
        touchDeltaX.value = event.clientX - touchStartX.value;
      }

      handleSwipe();
    };
    const handleSwipe = () => {
      const absDeltax = Math.abs(touchDeltaX.value);

      if (absDeltax <= 40) {
        return;
      }

      const direction = absDeltax / touchDeltaX.value;
      touchDeltaX.value = 0;

      if (!direction) {
        return;
      }

      if (direction > 0) {
        prev();
      } else {
        next();
      }
    };

    onMounted(() => {
      const currentActiveItem =
        carouselInnerRef.value.querySelectorAll(".carousel-item")[
          activeItemKey.value
        ];
      currentActiveItem.classList.add("active");

      if (props.interval) {
        reloadInterval();
      }
    });

    onUnmounted(() => {
      if (props.interval) {
        clearInterval(slidingInterval);
        slidingInterval = null;
      }
    });

    watch(
      () => props.modelValue,
      (targetItemKey) => slideTo(targetItemKey)
    );

    return {
      className,
      carouselInnerRef,
      activeItemKey,
      handleMouseenter,
      handleMouseleave,
      handleRight,
      handleLeft,
      handleTouchstart,
      handleTouchmove,
      handleTouchend,
      slideTo,
      next,
      prev,
    };
  },
};
</script>
