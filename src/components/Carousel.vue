<template>
  <div :is="tag" :class="className"><slot></slot></div>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    interval: {
      type: [Number, Boolean],
      default: 10000
    },
    full: {
      type: Boolean,
      default: false
    },
    half: {
      type: Boolean,
      default: false
    },
    fade: {
      type: Boolean,
      default: false
    },
    multi: {
      type: Boolean,
      default: false
    },
    thumbnails: {
      type: Boolean,
      default: false
    },
    testimonial: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      render: 0
    };
  },
  computed: {
    className() {
      return classNames(
        'carousel',
        this.half && 'half',
        this.full && 'full',
        this.fade && 'carousel-fade',
        this.multi && 'carousel-multi-item',
        this.thumbnails && 'carousel-thumbnails',
        this.testimonial && 'testimonial-carousel'
      );
    }
  },
  created() {
    if (this.interval !== false) {
      if (this.render == 0) {
        this.$emit('defineInterval', {'newInterval': this.interval});
        this.render++;
      }
    }
  }
};
</script>

<style scoped>
.full, .full .carousel-item{
  height: 100% !important;
}

.half {
  height: 50%;
}
</style>
