<template>
  <div :class="className" :is="tag">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

const MediaBody = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    className() {
      return classNames(
        'media-body'
      );
    }
  }
};

export default MediaBody;
export { MediaBody as mdbMediaBody };
</script>

<style scoped>

</style>
