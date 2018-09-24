<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

const CardFooter = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String,
    },
    textColor: {
      type: String,
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
        'card-footer',
        (this.color && !this.textColor) ? this.color + ' white-text':
          this.textColor ? this.color + ' ' + this.textColor+'-text' : false,
        this.border && 'border-' +this.border,
        this.transparent && 'transparent'
      );
    }
  }
};

export default CardFooter;
export { CardFooter as mdbCardFooter };
</script>

<style scoped>
</style>
