<template>
  <component :is="tag" :class="className" v-bind="attrs">
    <a
      class="page-link"
      :href="href"
      :aria-label="labelValue"
      :aria-disabled="disabled"
      :tabindex="disabledTabindex"
    >
      <span v-if="icon" aria-hidden="true">
        <slot></slot>
      </span>
      <span v-if="icon" class="sr-only">{{ labelValue }}</span>
      <slot v-else></slot>
    </a>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBPageItem",
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
    href: {
      type: String,
    },
    icon: {
      type: Boolean,
      defaul: false,
    },
    label: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return [
        "page-item",
        props.active && "active",
        props.disabled && "disabled",
      ];
    });

    const labelValue = computed(() => {
      return props.icon && props.label ? props.label : props.href;
    });

    const disabledTabindex = computed(() => {
      return props.disabled ? "-1" : " false";
    });

    return {
      className,
      labelValue,
      disabledTabindex,
      props,
      attrs,
    };
  },
};
</script>
