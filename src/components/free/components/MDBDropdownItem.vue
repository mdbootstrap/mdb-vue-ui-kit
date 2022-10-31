<template>
  <li :tabindex="divider ? null : 0">
    <component
      v-if="hasLinkOrTag"
      v-bind="$attrs"
      :is="tagName"
      :to="to"
      :exact="to ? exact : null"
      :href="to ? null : href"
      :class="className"
      :target="tab"
      :type="tag === 'button' ? 'button' : null"
      :aria-current="active ? true : null"
      :aria-disabled="disabled ? true : null"
      :disabled="disabled ? true : null"
      @click="handleEscAndOutsideClick"
    >
      <slot />
    </component>
    <hr v-else-if="divider" class="dropdown-divider" />
    <slot v-else />
  </li>
</template>

<script lang="ts">
export default {
  name: "MDBDropdownItem",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, PropType, inject } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "a",
  },
  to: [String, Object] as PropType<string | { [props: string]: string }>,
  href: String,
  disabled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: false,
  },
  exact: {
    type: Boolean,
    default: false,
  },
  newTab: {
    type: Boolean,
    default: false,
  },
  submenu: {
    type: Boolean,
    default: false,
  },
  submenuIcon: String,
  divider: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  header: {
    type: Boolean,
    default: false,
  },
});

const className = computed(() => {
  return [
    dropdownClass.value,
    props.disabled ? "disabled" : "",
    props.active ? "active" : "",
    props.submenu && "dropdown-submenu",
  ];
});

const hasLinkOrTag = computed(() => {
  if (
    props.to !== undefined ||
    props.href !== undefined ||
    props.tag !== "a" ||
    props.text
  ) {
    return true;
  }
  return false;
});

const dropdownClass = computed(() => {
  if (props.text) {
    return "dropdown-item-text";
  } else if (props.header) {
    return "dropdown-header";
  }
  return "dropdown-item";
});

const tagName = computed(() => {
  if (props.to) {
    return "router-link";
  } else if (props.text) {
    return "span";
  }
  return props.tag;
});

const tab = computed(() => {
  if (props.newTab) {
    return "_blank";
  }
  return null;
});

const handleEscAndOutsideClick = inject(
  "handleEscAndOutsideClick",
  () => false
);
</script>
