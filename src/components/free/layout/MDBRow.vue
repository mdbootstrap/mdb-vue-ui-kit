<template>
  <component :is="tag" :class="className" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBContainer",
  props: {
    tag: {
      type: String,
      default: "div"
    },
    start: {
      type: Boolean,
      default: false
    },
    end: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    between: {
      type: Boolean,
      default: false
    },
    around: {
      type: Boolean,
      default: false
    },
    cols: {
      type: [String, Array]
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "row",
        props.cols ? `${spreadProps(props.cols)}` : "",
        props.start && "justify-content-start",
        props.end && "justify-content-end",
        props.center && "justify-content-center",
        props.between && "justify-content-between",
        props.around && "justify-content-around"
      ];
    });

    const spreadProps = props => {
      if (typeof props === "string") {
        return `row-cols-${props}`;
      }
      return props.map(prop => `row-cols-${prop}`.trim()).join(" ");
    };

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
