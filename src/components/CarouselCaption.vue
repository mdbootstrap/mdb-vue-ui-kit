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
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-caption',
        `caption-${this.alignV}`
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
</style>
