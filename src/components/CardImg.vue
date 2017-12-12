<template>
  <div @click="wave" :class="{'ripple-parent': waves}">
    <img :src="src" :alt="alt" :class="className">
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    waves: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      className: classNames(
        'img-fluid'
      )
    };
  },
  mixins: [waves]
};
</script>

<style scoped>
div {
  overflow: hidden;
}
</style>
