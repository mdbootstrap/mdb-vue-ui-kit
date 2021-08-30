<template>
  <component :is="props.tag" :class="className" v-bind="attrs">
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
      default: "div"
    },
    text: {
      type: [String, Array]
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["card-body", props.text && spreadProps(props.text)];
    });

    const spreadProps = props => {
      if (typeof props === "string") {
        return `text-${props}`;
      }
      return props.map(prop => `text-${prop}`.trim()).join(" ");
    };

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
