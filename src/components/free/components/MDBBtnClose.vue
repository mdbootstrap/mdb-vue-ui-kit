<template>
  <button :class="className" aria-label="Close"></button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBtnClose",
  props: {
    white: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["btn-close", props.white && `btn-close-white`];
    });

    return {
      className,
    };
  },
};
</script>
