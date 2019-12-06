<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
const Footer = {
  props: {
    tag: {
      type: String,
      default: "footer"
    },
    color: {
      type: String
    },
    marginTop: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    className() {
      return [
        'page-footer',
        this.marginTop && 'mt-4',
        this.color ? this.color : ''
      ];
    }
  }
};

export default Footer;
export { Footer as mdbFooter };
</script>

<style scoped>

</style>
