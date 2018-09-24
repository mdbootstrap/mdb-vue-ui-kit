<template>
  <component :class="className" :is="tag">
    <slot></slot>
  </component>
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
