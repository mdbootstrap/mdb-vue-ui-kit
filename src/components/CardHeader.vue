<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const CardHeader = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    border: {
      type: String
    },
    transparent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return classNames(
        'card-header',
        (this.color && !this.textColor) ? this.color + ' white-text':
          this.textColor ? this.color + ' ' + this.textColor+'-text' : false,
        this.border && 'border-'+this.border,
        this.transparent && 'transparent'
      );
    }
  }
};

export default CardHeader;
export { CardHeader as mdbCardHeader };
</script>

<style scoped>
</style>
