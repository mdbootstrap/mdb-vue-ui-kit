<template>
  <component :is="props.tag" :class="className">
    <router-link
      v-if="props.to"
      :class="linkClassName"
      :exact="props.exact"
      :to="props.to"
      :target="tab"
      v-bind="attrs"
    >
      <slot></slot>
    </router-link>
    <a
      v-else-if="props.href"
      :href="props.href"
      :class="linkClassName"
      :target="tab"
      v-bind="attrs"
    >
      <slot></slot>
    </a>
    <slot v-else v-bind="attrs"> </slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBNavbarItem",
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean
    },
    exact: {
      type: Boolean,
      default: false
    },
    newTab: {
      type: Boolean,
      default: false
    },
    to: [Object, String],
    href: {
      type: String
    },
    linkClass: {
      type: String
    }
  },
  setup(props, { attrs }) {
    const className = computed(() => {
      return ["nav-item", !props.to && !props.href && props.active && "active"];
    });

    const linkClassName = computed(() => {
      return [
        "nav-link",
        props.disabled && "disabled",
        props.active && "active",
        props.linkClass
      ];
    });
    const tab = computed(() => {
      if (props.newTab) {
        return "_blank";
      }
    });

    return {
      props,
      attrs,
      className,
      linkClassName,
      tab
    };
  }
};
</script>
