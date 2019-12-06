<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import mdbClassMixin from '../../mixins/mdbClassMixin';

const Column = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    col: {
      type: String
    },
    sm: {
      type: String
    },
    md: {
      type: String
    },
    lg: {
      type: String
    },
    xl: {
      type: String
    },
    offset: {
      type: String
    },
    offsetSm: {
      type: String
    },
    offsetMd: {
      type: String
    },
    offsetLg: {
      type: String
    },
    offsetXl: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        this.col ? 'col-' + this.col : '',
        this.sm ? 'col-sm-' + this.sm : '',
        this.md ? 'col-md-' + this.md : '',
        this.lg ? 'col-lg-' + this.lg : '',
        this.xl ? 'col-xl-' + this.xl : '',
        !this.col && !this.sm && !this.md && !this.lg && !this.xl ? 'col' : '',
        this.offset ? 'offset-' + this.offset : '',
        this.offsetSm ? 'offset-sm-' + this.offsetSm : '',
        this.offsetMd ? 'offset-md-' + this.offsetMd : '',
        this.offsetLg ? 'offset-lg-' + this.offsetLg : '',
        this.offsetXl ? 'offset-xl-' + this.offsetXl : '',
        this.mdbClass
      ];
    }
  },
  mixins: [mdbClassMixin]
};

export default Column;
export { Column as mdbCol };
</script>

<style scoped>
</style>
