<template>
  <component :is="tag" :class="className" role="toolbar">
    <slot></slot>
  </component>
</template>

<script>
const BtnToolbar = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
  },
  computed: {
    className() {
      return [
        'btn-toolbar'
      ];
    }
  }
};

export default BtnToolbar;
export { BtnToolbar as mdbBtnToolbar };

</script>

<style scoped>

</style>
