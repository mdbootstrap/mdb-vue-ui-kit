<template>
  <ol :is="tag" :class="className"><slot></slot></ol>
</template>

<script>
import classNames from 'classnames';

const CarouselIndicators = {
  props: {
    tag: {
      type: String,
      default: "ol"
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-indicators'
      );
    }
  }
};

export default CarouselIndicators;
export { CarouselIndicators as mdbCarouselIndicators };
</script>

<style scoped>
</style>
