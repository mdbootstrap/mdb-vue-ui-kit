<template>
  <component :is="tag" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBListGroup",
  props: {
    tag: {
      type: String,
      default: "ul",
    },
    horizontal: {
      type: [Boolean, String],
      default: false,
    },
    flush: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "list-group",
        props.horizontal && horizontalClass.value,
        props.flush && "list-group-flush",
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
      attrs,
    };
  },
};
</script>
