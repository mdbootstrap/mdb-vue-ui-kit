<template>
  <div :is="tag" :class="className">
    <img v-if="src && !video" :src="src" :alt="alt" class="img-fluid">
    <video v-if="src && video" class="video-fluid" autoplay loop>
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
