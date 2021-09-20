<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardBody",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    text: {
      type: [String, Array],
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["card-body", props.text && spreadProps(props.text)];
    });

    const spreadProps = (props) => {
      if (typeof props === "string") {
        return `text-${props}`;
      }
      return props.map((prop) => `text-${prop}`.trim()).join(" ");
    };

    return {
      className,
      props,
    };
  },
};
</script>
