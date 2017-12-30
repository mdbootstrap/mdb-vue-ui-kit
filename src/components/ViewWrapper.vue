<template>
  <div :is="tag" :class="className">
    <img v-if="src && !video" :src="src" :alt="alt" class="img-fluid">
    <video v-if="src && video"
           class="video-fluid"
           :autoplay="autoplay ? 'true' : null"
           :loop="loop ? 'true' : null">
      <source :src="src" :type="videoType" />
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
      overlay: {
        type: String,
      },
      src: {
        type: String
      },
      alt: {
        type: String
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
    data() {
      return {
        className: classNames(
          'view',
          this.overlay ? 'hm-' + this.overlay : ''
        ),
      };
    }
  };
</script>

<style scoped>
</style>
