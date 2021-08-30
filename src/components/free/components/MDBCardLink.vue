<template>
  <component :is="props.tag" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardLink",
  props: {
    tag: {
      type: String,
      default: "a"
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["card-link"];
    });

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
