<template>
  <div :is="tag" :class="className" role="listbox"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

const CarouselInner = {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-inner'
      );
    }
  }
};

export default CarouselInner;
export { CarouselInner as mdbCarouselInner };
</script>

<style scoped>
</style>
