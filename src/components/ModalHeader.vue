<template>
  <div :is="tag" :class="className">
    <slot></slot>
    <a v-if="close" flat class="close" @click.prevent="away">&times;</a>
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
    close: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      className: classNames(
        'modal-header'
      )
    };
  },
  methods: {
    away() {
      this.$parent.$emit('close');
    }
  }
};
</script>

<style scoped>

</style>
