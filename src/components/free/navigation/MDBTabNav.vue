<template>
  <div v-if="isVertical" :class="columnClassName">
    <component :is="tag" :class="className">
      <slot />
    </component>
  </div>
  <component v-else :is="tag" :class="className">
    <slot />
  </component>
</template>

<script>
import { computed, inject } from "vue";

export default {
  name: "MDBTabNav",
  props: {
    tag: {
      type: String,
      default: "ul",
    },
    pills: {
      type: Boolean,
    },
    justify: {
      type: Boolean,
    },
    fill: {
      type: Boolean,
    },
    col: {
      type: String,
      default: "3",
    },
    tabsClasses: String,
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "nav",
        props.pills ? "nav-pills" : "nav-tabs",
        props.justify && "nav-justified",
        props.fill && "nav-fill",
        isVertical.value && "flex-column",
        props.tabsClasses && props.tabsClasses,
      ];
    });

    const columnClassName = computed(() => {
      return [`col-${props.col}`];
    });

    const isVertical = inject("isVertical", false);

    return {
      className,
      columnClassName,
      isVertical,
      props,
      attrs,
    };
  },
};
</script>
