<template>
  <div @click="wave" :class="{'ripple-parent': waves}">
    <img :src="src" :alt="alt" :class="className"/>
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
    },
    top: {
      type: Boolean
    }
  },
  computed: {
    className() {
      return classNames(
        'img-fluid',
        this.top && 'card-img-top'
      );
    }
  },
  mixins: [waves]
};
</script>

<style scoped>
div {
  overflow: hidden;
}
</style>
