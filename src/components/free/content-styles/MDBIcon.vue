<template>
  <i :class="className" v-bind="attrs"><slot></slot></i>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBIcon",
  props: {
    iconStyle: {
      type: String,
      default: "fas"
    },
    icon: String,
    flag: String,
    size: String
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        props.iconStyle,
        props.flag ? `flag ${props.flag}` : `fa-${props.icon}`,
        props.size && `fa-${props.size}`
      ];
    });

    return {
      className,
      attrs
    };
  }
};
</script>
