<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardGroup",
  props: {
    tag: {
      type: String,
      default: "div",
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["card-group"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
