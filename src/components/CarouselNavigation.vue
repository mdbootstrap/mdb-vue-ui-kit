<template>
  <div>
    <div v-if="top" :class="className">
      <a class="btn-floating" @click.prevent="prev"><i class="fa fa-chevron-left"></i></a>
      <a class="btn-floating" @click.prevent="next"><i class="fa fa-chevron-right"></i></a>
    </div>
    <div v-else-if="testimonial">
      <a class="carousel-control carousel-item-prev left" @click.prevent="prev">
        <span class="icon-prev" aria-hidden="true"></span>
        <span class="sr-only">Prev</span>
      </a>
      <a class="carousel-control carousel-item-next right" @click.prevent="next">
        <span class="icon-next" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div v-else>
      <a class="carousel-control-prev" @click.prevent="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Prev</span>
      </a>
      <a class="carousel-control-next" @click.prevent="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
import classNames from 'classnames';

const CarouselNavigation = {
  props: {
    top: {
      type: Boolean,
      default: false
    },
    testimonial: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'controls-top'
      );
    }
  },
  methods: {
    prev() {
      this.$emit('changeSlide', {'slideIndex': 'prev'});
    },
    next() {
      this.$emit('changeSlide', {'slideIndex': 'next'});
    }
  }
};

export default CarouselNavigation;
export { CarouselNavigation as mdbCarouselControl };
</script>

<style scoped>
</style>
