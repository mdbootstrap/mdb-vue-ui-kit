<template>
  <component
    :is="tag"
    :class="className"
    :aria-current="active ? true : null"
    :aria-disabled="disabled ? true : null"
    :disabled="disabled ? true : null"
    v-mdb-ripple="props.ripple"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";
import mdbRipple from "@/directives/free/mdbRipple";

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
    noBorder: {
      type: Boolean,
      default: false,
    },
    spacing: {
      type: [Boolean, String],
      default: false,
    },
    ripple: {
      type: [Object, Boolean],
      default: false,
    },
  },
  directives: { mdbRipple },
  setup(props) {
    const spacingClass = computed(() => {
      if (!props.spacing) {
        return;
      }
      return props.spacing !== true ? props.spacing : "px-3";
    });

    const className = computed(() => {
      return [
        "list-group-item",
        props.active && "active",
        props.disabled && "disabled",
        props.action && "list-group-item-action",
        props.color && `list-group-item-${props.color}`,
        props.noBorder && `border-0`,
        props.spacing && spacingClass.value,
      ];
    });

    return {
      className,
      props,
    };
  },
};
</script>
