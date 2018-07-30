<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const CardAvatar = {
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
        'avatar',
        this.color ? this.color : ''
      );
    }
  }
};

export default CardAvatar;
export { CardAvatar as mdbCardAvatar };
</script>

<style scoped>
</style>
