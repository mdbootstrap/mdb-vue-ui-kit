<template>
  <keep-alive>
    <div v-if="isVertical" :class="columnClassName">
      <component :is="tag" :class="className" v-bind="attrs">
        <slot />
      </component>
    </div>
    <component v-else :is="tag" :class="className" v-bind="attrs">
      <slot />
    </component>
  </keep-alive>
</template>

<script>
import { computed, inject } from "vue";
export default {
  name: "MDBTabContent",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    col: {
      type: String,
      default: "9",
    },
    contentClasses: String,
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["tab-content", props.contentClasses && props.contentClasses];
    });

    const columnClassName = computed(() => {
      return [`col-${props.col}`];
    });

    const isVertical = inject("isVertical", false);

    return {
      isVertical,
      className,
      columnClassName,
      props,
      attrs,
    };
  },
};
</script>
