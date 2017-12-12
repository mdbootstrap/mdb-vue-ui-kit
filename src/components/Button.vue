<template>
  <button :is="tag" :class="[className, {'ripple-parent': waves}]" :type="type" :role="role" @click="wave">
    <slot></slot>
  </button>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: "default"
    },
    outline: {
      type: String,
    },
    size: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    role: {
      type: String
    },
    type: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    waves: {
      type: Boolean,
      default: true
    },
    darkWaves: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      className: classNames(
        'btn',
        this.outline ? 'btn-outline-' + this.outline : 'btn-' + this.color,
        this.size ? 'btn-' + this.size : '',
        this.block ? 'btn-block' : '',
        this.active ? 'active' : '',
        this.disabled ? 'disabled' : ''
      )
    };
  },
  mixins: [waves]
};
</script>

<style scoped>

</style>
