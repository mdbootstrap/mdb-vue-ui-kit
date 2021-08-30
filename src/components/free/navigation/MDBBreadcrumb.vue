<template>
  <component :is="props.tag" :class="className" v-bind="attrs"
    ><slot></slot
  ></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBreadcrumb",
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },

  setup(props, { attrs }) {
    const className = computed(() => {
      return ["breadcrumb"];
    });

    return {
      className,
      props,
      attrs
    };
  }
};
</script>
