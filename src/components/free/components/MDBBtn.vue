<template>
  <component
    :is="tag"
    :type="type"
    :role="role"
    :class="className"
    v-bind="attrs"
    @click="handleClick"
    v-mdb-ripple="ripple"
  >
    <slot></slot
  ></component>
</template>

<script>
import { computed, ref } from "vue";
import mdbRipple from "@/directives/free/mdbRipple";

export default {
  name: "MDBBtn",
  props: {
    color: String,
    size: String,
    outline: String,
    rounded: Boolean,
    floating: Boolean,
    toggler: Boolean,
    toggle: Boolean,
    role: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    tag: {
      type: String,
      default: "button"
    },
    block: {
      type: Boolean,
      default: false
    },
    ripple: {
      type: [Object, Boolean],
      default: props =>
        props.outline || props.color === "light" || props.color === "link"
          ? { color: "dark" }
          : true
    },
    picker: Boolean
  },
  directives: { mdbRipple },
  inheritAttrs: false,
  emits: ["update:toggle"],
  setup(props, { attrs, emit }) {
    const toggle = ref(props.toggle);

    const className = computed(() => {
      return [
        !props.picker && "btn",
        props.color && `btn-${props.color}`,
        props.size && `btn-${props.size}`,
        props.outline && `btn-outline-${props.outline}`,
        props.rounded && "btn-rounded",
        props.floating && "btn-floating",
        props.block && "btn-block",
        toggle.value && "active"
      ];
    });

    function handleClick() {
      if (props.toggler) {
        toggle.value = !toggle.value;
        emit("update:toggle", toggle.value);
      }
    }

    return {
      className,
      attrs,
      props,
      handleClick
    };
  }
};
</script>
