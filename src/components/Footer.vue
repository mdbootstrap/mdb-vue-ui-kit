<template>
  <footer :is="tag" :class="className">
    <slot></slot>
  </footer>
</template>

<script>
import classNames from 'classnames';

const Footer = {
  props: {
    tag: {
      type: String,
      default: "footer"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'page-footer mt-4',
        this.color ? this.color : ''
      );
    }
  }
};

export default Footer;
export { Footer as mdbFooter };
</script>

<style scoped>

</style>
