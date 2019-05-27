<template>
  <component :is="tag" :class="className">
    <h3 class="h3-responsive">{{ title }}</h3>
    <p>{{ text }}</p>
  </component>
</template>

<script>
import classNames from 'classnames';

const CarouselCaption = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    alignV: {
      type: String,
      default: 'bottom'
    },
    animation: String,
  },
  computed: {
    className() {
      return classNames(
        'carousel-caption',
        `caption-${this.alignV}`,
        this.animation ? `animated ${this.animation}` : ''
      );
    }
  }
  
};

export default CarouselCaption;
export { CarouselCaption as mdbCarouselCaption };
</script>

<style scoped>
  .carousel-caption.caption-bottom {
    bottom: 5% !important;
  }
  .carousel-caption.caption-center {
    bottom: 35% !important;
  }
  .carousel-caption.caption-top {
    bottom: 70% !important;
  }

  .carousel-item .carousel-caption {
    display: none !important;
  }
  .carousel-item.active .carousel-caption {
    display: block !important;
  }
</style>
