<template>
  <component
    :is="tag"
    :src="src"
    :alt="alt"
    :class="className"
    v-bind="attrs"
  ></component>
  <div class="card-img-overlay" v-if="overlay">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBCardImg",
  props: {
    tag: {
      type: String,
      default: "img"
    },
    src: {
      type: String,
      required: true
    },
    alt: String,
    top: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    fluid: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        props.top && `card-img-top`,
        props.bottom && `card-img-bottom`,
        props.fluid && `img-fluid`,
        props.overlay && "card-img",
        !props.top &&
          !props.bottom &&
          !props.fluid &&
          !props.overlay &&
          `card-img`
      ];
    });

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
