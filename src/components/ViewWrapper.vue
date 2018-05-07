<template>
  <div :is="tag" :class="className">
    <img v-if="src" :src="src" :alt="alt" :class="imgClass">
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    hover: {
      type: Boolean,
      default: false
    },
    zoom: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: Boolean,
      default: false
    },
    imageClass: {
      type: String
    },
    wrapperClass: {
      type: String
    },
    gradient: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'view',
        this.hover ? 'overlay' : '',
        this.zoom ? 'zoom' : '',
        this.shadow ? 'pb-3':'',
        this.wrapperClass ? this.wrapperClass : '',
        this.gradient ? 'gradient-card-header ' + this.gradient + '-gradient' : ''
      ),
      imgClass: classNames(
        this.rounded ? 'rounded-circle' : '',
        this.shadow ? 'hoverable mx-auto' : '',
        this.zoom ? 'w-100' : '',
        'img-fluid',
        this.imageClass ? this.imageClass :''
      )
    };
  }
};
</script>

<style scoped>
</style>
