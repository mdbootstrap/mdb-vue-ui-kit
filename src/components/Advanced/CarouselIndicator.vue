<template>
  <component :is="tag" :class="className" @click="click" :style="indicatorStyle">
    <img v-if="src" :src="src" :alt="alt" class="d-block w-100 img-fluid"/>
  </component>
</template>

<script>
import classNames from 'classnames';

const CarouselIndicator = {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
    },
    index: {
      type: Number,
      required: true
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    indicatorClass: {
      type: String
    },
    indicatorStyle: {
      type: [String, Object]
    }
  },
  computed: {
    className() {
      return classNames(
        this.active ? 'active' : '',
        this.indicatorClass
      );
    }
  },
  methods: {
    click() {
      this.$emit('changeSlide', {'slideIndex': this.index});
    }
  }
};

export default CarouselIndicator;
export { CarouselIndicator as mdbCarouselIndicator };
</script>

<style scoped>
</style>
