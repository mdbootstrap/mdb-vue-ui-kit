<template>
  <component
    :is="tag"
    :class="className"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :disabled="disabled ? true : null"
    v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBListGroupItem",
  props: {
    tag: {
      type: String,
      default: "li",
    },
    active: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Boolean,
      default: false,
    },
    color: String,
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "list-group-item",
        props.active && "active",
        props.disabled && "disabled",
        props.action && "list-group-item-action",
        props.color && `list-group-item-${props.color}`,
      ];
    });

    return {
      className,
      props,
      attrs,
    };
  },
};
</script>
