<template>
  <component :is="tag" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
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
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["card-text"];
    });

    return {
      className,
      props,
      attrs,
    };
  },
};
</script>
