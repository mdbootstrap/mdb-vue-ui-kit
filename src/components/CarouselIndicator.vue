<template>
  <li :is="tag" :class="className" @click="click">
    <img v-if="src" :src="src" :alt="alt" class="d-block w-100 img-fluid" />
  </li>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "li"
    },
    active: {
      type: Boolean,
    },
    index: {
      type: Number,
      required: true
    },
    src: {
      type: String
    },
    alt: {
      type: String
    }
  },
  data() {
    return {
      className: classNames(
        this.active ? 'active' : ''
      ),
    };
  },
  methods: {
    click() {
      this.$emit('changeSlide', {'slideIndex': this.index});
    }
  }
};
</script>

<style scoped>
</style>
