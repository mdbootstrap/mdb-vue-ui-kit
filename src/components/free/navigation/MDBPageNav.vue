<template>
  <component :is="tag" :class="className" v-bind="attrs">
    <a
      v-if="prev"
      class="page-link"
      :href="href"
      :tabindex="disabledTabindex"
      :aria-disabled="disabled"
      aria-label="Previous"
    >
      <span aria-hidden="true">{{ prevValue }}</span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      v-if="next"
      class="page-link"
      :href="href"
      :tabindex="disabledTabindex"
      :aria-disabled="disabled"
      aria-label="Next"
    >
      <span aria-hidden="true">{{ nextValue }}</span>
      <span class="sr-only">Next</span>
    </a>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBPageNav",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: "#"
    },
    prev: {
      type: Boolean,
      default: false
    },
    next: {
      type: Boolean,
      default: false
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["page-item", props.disabled && "disabled"];
    });

    const prevValue = computed(() => {
      return props.icon ? "«" : "Previous";
    });

    const nextValue = computed(() => {
      return props.icon ? "»" : "Next";
    });

    const disabledTabindex = computed(() => {
      return props.disabled ? "-1" : " false";
    });

    return {
      className,
      prevValue,
      nextValue,
      disabledTabindex,
      props,
      attrs
    };
  }
};
</script>
