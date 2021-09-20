<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBBreadcrumb",
  props: {
    tag: {
      type: String,
      default: "ol",
    },
  },

  setup(props) {
    const className = computed(() => {
      return ["breadcrumb"];
    });

    return {
      className,
      props,
    };
  },
};
</script>
