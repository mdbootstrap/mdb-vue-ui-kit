<template>
  <component
    :is="tag"
    v-mdb-ripple="ripple"
    :type="type"
    :role="role"
    :class="className"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBBtn",
};
</script>

<script setup lang="ts">
import { ref, computed, PropType } from "vue";
import vMdbRipple from "../../../directives/free/mdbRipple";

const props = defineProps({
  color: String,
  size: String,
  outline: String,
  rounded: Boolean,
  floating: Boolean,
  toggler: Boolean,
  toggle: Boolean,
  role: {
    type: String,
    default: "button",
  },
  type: {
    type: String,
    default: "button",
  },
  tag: {
    type: String,
    default: "button",
  },
  block: {
    type: Boolean,
    default: false,
  },
  ripple: {
    type: [Object, Boolean] as PropType<
      { [props: string]: string | number | boolean } | boolean
    >,
    default: (props: { outline: string; color: string }) =>
      props.outline || props.color === "light" || props.color === "link"
        ? { color: "dark" }
        : true,
  },
  picker: Boolean,
});
const emit = defineEmits(["update:toggle"]);

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
    toggle.value && "active",
  ];
});

const handleClick = () => {
  if (props.toggler) {
    toggle.value = !toggle.value;
    emit("update:toggle", toggle.value);
  }
};
</script>
