<template>
  <div v-if="responsive" :class="wrapperClasses">
    <component
      :class="tableClasses"
      :style="tableStyle"
      :is="tag"
      v-bind="attrs"
    >
      <slot></slot>
    </component>
  </div>

  <component
    v-else
    :class="tableClasses"
    :style="tableStyle"
    :is="tag"
    v-bind="attrs"
  >
    <slot></slot>
  </component>
</template>

<script>
import { computed } from "vue";

export default {
  name: "MDBTable",
  props: {
    tag: {
      type: String,
      default: "table",
    },
    variant: {
      type: String,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    light: {
      type: Boolean,
      default: false,
    },
    border: {
      type: [Boolean, String],
      default: false,
    },
    borderless: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    responsive: {
      type: [Boolean, String],
      default: false,
    },
    align: {
      type: String,
    },
    sm: {
      type: Boolean,
      default: false,
    },
    tableStyle: {
      type: String,
    },
    captionTop: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const wrapperClasses = computed(() => {
      if (!props.responsive) {
        return false;
      }
      return props.responsive !== true
        ? `table-responsive-${props.responsive}`
        : "table-responsive";
    });

    const borderClass = computed(() => {
      if (!props.border) {
        return "";
      }
      return props.border !== true
        ? `table-bordered border-${props.border}`
        : "table-bordered";
    });

    const tableClasses = computed(() => {
      return [
        "table",
        props.dark && "table-dark",
        props.light && "table-light",
        props.variant && `table-${props.variant}`,
        props.striped && "table-striped",
        borderClass.value,
        props.borderless && "table-borderless",
        props.hover && "table-hover",
        props.sm && "table-sm",
        props.align && props.align === "top"
          ? "align-top"
          : props.align === "bottom"
          ? "align-bottom"
          : props.align === "middle"
          ? "align-middle"
          : "",
        props.captionTop && "caption-top",
        props.tableStyle,
      ];
    });

    return {
      wrapperClasses,
      tableClasses,
      props,
      attrs,
    };
  },
};
</script>
