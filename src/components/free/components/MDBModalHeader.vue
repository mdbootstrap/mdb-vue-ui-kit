<template>
  <component :is="tag" :class="className" v-bind="context.attrs">
    <slot></slot>
    <MDBBtnClose v-if="close" :white="closeWhite" @click.prevent="closeModal" />
  </component>
</template>

<script>
import { computed, inject } from "vue";
import MDBBtnClose from "./MDBBtnClose";

export default {
  name: "MDBModalHeader",
  components: {
    MDBBtnClose
  },
  props: {
    tag: {
      type: String,
      default: "div"
    },
    close: {
      type: Boolean,
      default: true
    },
    closeWhite: {
      type: Boolean,
      default: false
    },
    color: String
  },
  setup(props, context) {
    const closeModal = inject("closeModal", false);

    const className = computed(() => {
      return ["modal-header", props.color && `bg-${props.color}`];
    });

    return {
      className,
      closeModal,
      context,
      props
    };
  }
};
</script>
