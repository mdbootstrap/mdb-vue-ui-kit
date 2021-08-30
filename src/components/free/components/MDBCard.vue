<template>
  <component :is="tag" :class="className" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCard",
  props: {
    tag: {
      type: String,
      default: "div",
    },
    border: {
      type: String,
    },
    bg: {
      type: String,
    },
    text: {
      type: [String, Array],
    },
    shadow: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "card",
        props.border && `border border-${props.border}`,
        props.bg && `bg-${props.bg}`,
        props.shadow && `shadow-${props.shadow}`,
        props.text && spreadProps(props.text),
      ];
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
      attrs,
    };
  },
};
</script>
