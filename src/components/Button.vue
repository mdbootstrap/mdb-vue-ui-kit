<template>
  <button :is="tag" :class="[className, {'active': active, 'ripple-parent': waves}]" :type="type" :role="role" @click="wave">
    <fa v-if="iconLeft" :icon="icon"/>
    <slot></slot>
    <fa v-if="iconRight" :icon="icon"/>
  </button>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';
import Fa from './Fa';

export default {
  components: {
    Fa
  },
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
    icon: {
      type: String
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    iconRight: {
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
    },
    gradient: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      className: classNames(
        this.floating ? 'btn-floating' : 'btn',
        this.outline ? 'btn-outline-' + this.outline : this.flat ? 'btn-flat' : this.transparent ? '' : 'btn-' + this.color,
        this.size ? 'btn-' + this.size : '',
        this.block ? 'btn-block' : '',
        this.disabled ? 'disabled' : '',
        this.gradient ? this.gradient + '-gradient' : '',
        this.rounded ? 'btn-rounded' : '',
        this.action ? 'btn-action' : '',
        this.save ? 'btn-save' : ''
      )
    };
  },
  mixins: [waves]
};
</script>

<style scoped>

</style>
