<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBListGroup",
  props: {
    flush: {
      type: Boolean,
      default: false,
    },
    horizontal: {
      type: [Boolean, String],
      default: false,
    },
    numbered: Boolean,
    tag: {
      type: String,
      default: "ul",
    },
  },
  setup(props) {
    const className = computed(() => {
      return [
        "list-group",
        props.horizontal && horizontalClass.value,
        props.flush && "list-group-flush",
        props.numbered && "list-group-numbered",
      ];
    });

    const horizontalClass = computed(() => {
      if (!props.horizontal) {
        return;
      }
      return props.horizontal !== true
        ? `list-group-horizontal-${props.horizontal}`
        : "list-group-horizontal";
    });

    return {
      className,
      props,
    };
  },
};
</script>
