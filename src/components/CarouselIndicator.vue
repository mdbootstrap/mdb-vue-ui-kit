<template>
  <li :is="tag" :class="className" @click="click"></li>
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
      this.$parent.$parent.$parent.$emit('changeSlide', {'slideIndex': this.index});
    }
  }
};
</script>

<style scoped>
</style>
