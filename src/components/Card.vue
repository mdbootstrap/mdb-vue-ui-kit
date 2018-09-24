<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

const Card = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    cascade: {
      type: Boolean,
      default: false
    },
    wide: {
      type: Boolean,
      default: false
    },
    narrow: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    testimonial: {
      type: Boolean,
      default: false
    },
    personal: {
      type: Boolean,
      default: false
    },
    news: {
      type: Boolean,
      default: false
    },
    ecommerce: {
      type: Boolean,
      default: false
    },
    collection: {
      type: Boolean,
      default: false
    },
    pricing: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    },
    border: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'card',
        this.cascade ? 'card-cascade' : '',
        this.wide ? 'card-cascade wider' : '',
        this.narrow ? 'card-cascade narrower' : '',
        this.reverse ? 'card-cascade wider reverse' : '',
        this.dark ? 'card-dark' : '',
        this.testimonial ? 'testimonial-card' : '',
        this.personal ? 'card-personal' : '',
        this.news ? 'news-card' : '',
        this.ecommerce && 'card-ecommerce',
        this.collection && 'collection-card',
        this.pricing && 'pricing-card',
        (this.color && !this.textColor) ? this.color + ' white-text':
          this.textColor ? this.color + ' ' + this.textColor+'-text' : false,
        this.border && 'border-'+this.border
      );
    }
  }
};

export default Card;
export { Card as mdbCard };
</script>

<style scoped>
</style>
