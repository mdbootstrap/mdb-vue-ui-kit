<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardLink",
  props: {
    tag: {
      type: String,
      default: "a",
    },
  },
  setup(props) {
    const className = computed(() => {
      return ["card-link"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
