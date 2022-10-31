<template>
  <component :is="props.tag" :class="className">
    <router-link
      v-if="to"
      :class="linkClassName"
      :exact="exact"
      :to="to"
      :target="tab"
    >
      <slot />
    </router-link>
    <a v-else-if="href" :href="href" :class="linkClassName" :target="tab">
      <slot></slot>
    </a>
    <slot v-else />
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBNavbarItem",
};
</script>

<script setup lang="ts">
import { computed, PropType } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "li",
  },
  active: {
    type: Boolean,
    default: false,
  },
  disabled: Boolean,
  exact: {
    type: Boolean,
    default: false,
  },
  newTab: {
    type: Boolean,
    default: false,
  },
  to: [Object, String] as PropType<{ [props: string]: string } | string>,
  href: String,
  linkClass: String,
});

const className = computed(() => {
  return ["nav-item", !props.to && !props.href && props.active && "active"];
});
const linkClassName = computed(() => {
  return [
    "nav-link",
    props.disabled && "disabled",
    props.active && "active",
    props.linkClass,
  ];
});
const tab = computed(() => {
  if (props.newTab) {
    return "_blank";
  }
  return "";
});
</script>
