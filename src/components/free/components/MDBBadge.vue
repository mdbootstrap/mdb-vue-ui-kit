<template>
  <component :is="props.tag" :class="className" v-bind="attrs">
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBadge",
  props: {
    color: String,
    pill: Boolean,
    dot: Boolean,
    notification: Boolean,
    tag: {
      type: String,
      default: "span"
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "badge",
        props.color && `bg-${props.color}`,
        props.pill && "rounded-pill",
        props.dot && "badge-dot",
        props.notification && "badge-notification"
      ];
    });

    return {
      className,
      attrs,
      props
    };
  }
};
</script>
