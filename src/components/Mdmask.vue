<template>
  <div :is="tag" :class="[className, {'ripple-parent': waves}]" @click="wave">
    <p v-if="text" class="white-text">{{text}}</p>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    pattern: {
      type: String
    },
    flexCenter: {
      type: Boolean,
      default: false
    },
    text: {
      type: String
    },
    waves: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        'mask',
        this.pattern ? 'pattern-' + this.pattern : '',
        this.flexCenter ? 'flex-center' : '',
        this.overlay ? 'rgba-' + this.overlay : ''
      ),
    };
  },
  mixins: [waves]
};
</script>

<style scoped>
</style>
