<template>
  <component :is="tagName" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardTitle",
  props: {
    tag: {
      type: String,
      default: "h5",
    },
    subtitle: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const tagName = computed(() => {
      if (!props.subtitle) {
        return props.tag;
      }
      return props.tag !== "h5" ? props.tag : "h6";
    });

    const className = computed(() => {
      return [props.subtitle ? "card-subtitle" : "card-title"];
    });

    return {
      className,
      tagName,
      props,
      attrs,
    };
  },
};
</script>
