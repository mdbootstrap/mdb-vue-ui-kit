<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const EdgeHeader = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'edge-header',
        this.color ? this.color : ''
      ];
    }
  }
};

export default EdgeHeader;
export { EdgeHeader as mdbEdgeHeader };
</script>

<style scoped>
</style>
