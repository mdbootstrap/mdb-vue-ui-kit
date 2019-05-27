<template>
  <component :is="tag" :class="className">
    <img v-if="src && !video" :src="src" :alt="alt" :class="imgClass">
    <video v-if="src && video"
           class="video-fluid"
           :autoplay="autoplay ? 'true' : null"
           :loop="loop ? 'true' : null">
      <source :src="src" :type="videoType" />
    </video>
    <slot></slot>
  </component>
</template>

<script>
import classNames from 'classnames';

const ViewWrapper = {
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
    },
    video: {
      type: Boolean,
      default: false
    },
    videoType: {
      type: String,
      default: 'video/mp4'
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
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

export default ViewWrapper;
export { ViewWrapper as mdbView };
</script>
