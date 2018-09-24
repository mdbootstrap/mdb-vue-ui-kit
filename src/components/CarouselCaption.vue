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
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-caption'
      );
    }
  }
};

export default CarouselCaption;
export { CarouselCaption as mdbCarouselCaption };
</script>

<style scoped>
</style>
