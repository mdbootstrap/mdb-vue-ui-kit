<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardText",
  props: {
    tag: {
      type: String,
      default: "p",
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["card-text"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
