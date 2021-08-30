<template>
  <component :is="props.tag" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardGroup",
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["card-group"];
    });

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
