<template>
  <button :class="className" aria-label="Close" v-bind="attrs"></button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBtnClose",
  props: {
    white: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["btn-close", props.white && `btn-close-white`];
    });

    return {
      className,
      attrs
    };
  }
};
</script>
