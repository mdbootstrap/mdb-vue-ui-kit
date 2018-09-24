<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

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
      return classNames(
        'edge-header',
        this.color ? this.color : ''
      );
    }
  }
};

export default EdgeHeader;
export { EdgeHeader as mdbEdgeHeader };
</script>

<style scoped>
</style>
