<template>
  <component :is="tag" :class="className" role="tabpanel">
    <p>
      <slot></slot>
    </p>
  </component>
</template>

<script>
const TabPane = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    classes: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'tab-pane active collapse-item',
        this.classes
      ];
    }
  }
};

export default TabPane;
export { TabPane as mdbTabPane };
</script>

<style scoped>
.collapse-item {
  overflow: hidden;
}
</style>
