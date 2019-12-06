<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
const ModalTitle = {
  props: {
    tag: {
      type: String,
      default: "h5"
    },
    bold: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return [
        'modal-title',
        this.bold && 'font-weight-bold'
      ];
    }
  }
};

export default ModalTitle;
export { ModalTitle as mdbModalTitle };
</script>
