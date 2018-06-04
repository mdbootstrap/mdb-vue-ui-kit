<template>
  <div :is="tag" :class="className">
    <div class="view">
      <img v-if="img" :src="src" :alt="alt" class="d-block w-100">
      <div v-if="mask" :class="maskClass"></div>
    </div>
    <video v-if="video" class="video-fluid d-block" :autoPlay="auto" :loop="loop">
      <source :src="src" type="video/mp4" />
    </video>
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
    loop: {
      type: Boolean
    },
    auto: {
      type: Boolean
    },
    full: {
      type: Boolean
    },
    img: {
      type: Boolean
    },
    video: {
      type: Boolean
    },
    mask: {
      type: String
    }
  },
  computed: {
    className() {
      return classNames(
        'carousel-item',
        this.full && 'full'
      );
    },
    maskClass() {
      return classNames(
        'mask',
        this.mask ? 'rgba-' + this.mask : ''
      );
    },
    isVideo() {
      let videoFormats = ['webm', 'ogg', 'mp4'];
      const check = (formats, string) =>  {
        return formats.some(function(format){
          return string.endsWith(format);
        });
      };
      return check(videoFormats, this.src);
    }
  }
};
</script>

<style scoped>

</style>
