<template>
  <div :class="className" :is="tag"><slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const Media = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    className() {
      return classNames(
        'media'
      );
    }
  }
};

export default Media;
export { Media as mdbMedia };
</script>


<style scoped>
</style>
