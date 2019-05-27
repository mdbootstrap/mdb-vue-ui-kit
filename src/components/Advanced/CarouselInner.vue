<template>
  <component :is="tag" :class="className" role="listbox"><slot></slot></component>
</template>

<script>
import classNames from 'classnames';

const CarouselInner = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    active: {
      type: Number,
      default: 0
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-inner'
      );
    }
  },
  methods: {
    setActive (){
      const children = Array.from(this.$children);
      children.forEach((child, index) => {
        if (index === this.active) {
          child._data.isActive = true;
        }
        else {
          child._data.isActive = false;
        }
      });
    }
  },
  mounted(){
    this.setActive();
  },
  updated(){
    this.setActive();
  }
};

export default CarouselInner;
export { CarouselInner as mdbCarouselInner };
</script>

<style scoped>
</style>
