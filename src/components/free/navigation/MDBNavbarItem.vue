<template>
  <component :is="props.tag" :class="className" v-bind="attrs">
    <router-link
      v-if="to"
      :class="linkClassName"
      :exact="exact"
      :to="to"
      :target="tab"
    >
      <slot></slot>
    </router-link>
    <a v-else-if="href" :href="href" :class="linkClassName" :target="tab">
      <slot></slot>
    </a>
    <slot v-else> </slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBNavbarItem",
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
    },
    exact: {
      type: Boolean,
      default: false,
    },
    newTab: {
      type: Boolean,
      default: false,
    },
    to: [Object, String],
    href: {
      type: String,
    },
    linkClass: {
      type: String,
    },
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
        props.linkClass,
      ];
    });
    const tab = computed(() => {
      if (props.newTab) {
        return "_blank";
      }

      return false;
    });

    return {
      props,
      attrs,
      className,
      linkClassName,
      tab,
    };
  },
};
</script>
