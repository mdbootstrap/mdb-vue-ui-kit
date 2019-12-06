<template>
  <component :is="tag" :class="className" @click="wave">
    <p v-if="text" class="white-text">{{text}}</p>
    <slot></slot>
  </component>
</template>

<script>
import waves from '../../mixins/waves';

const MdMask = {
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
  computed: {
    className() {
      return [
        'mask',
        this.pattern ? 'pattern-' + this.pattern : '',
        this.flexCenter ? 'flex-center' : '',
        this.overlay ? 'rgba-' + this.overlay : '',
        this.waves ? 'ripple-parent' : ''
      ];
    }
  },
  mixins: [waves]
};

export default MdMask;
export { MdMask as mdbMask };
</script>

<style scoped>
</style>
