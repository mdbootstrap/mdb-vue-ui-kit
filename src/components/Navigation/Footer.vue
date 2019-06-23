<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
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
        'page-footer',
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
