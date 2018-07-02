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
    },
    circle: {
      type: Boolean
    },
    cascade: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'view',
        this.hover ? 'overlay' : '',
        this.zoom ? 'zoom' : '',
        this.wrapperClass ? this.wrapperClass : '',
        this.rounded ? 'rounded' : '',
        this.circle ? 'rounded-circle' : '',
        this.gradient ? 'gradient-card-header ' + this.gradient + '-gradient' : '',
        this.cascade && 'view-cascade'
      );
    },
    imgClass() {
      return classNames(
        this.zoom ? 'w-100' : '',
        'img-fluid',
        this.imageClass ? this.imageClass :'',
        this.shadow ? 'hoverable' : ''
      );
    }
  }
};
</script>

<style scoped>
</style>
