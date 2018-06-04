<template>
  <a :is="tag" :href="href" :class="className">
    <img :src="src" :alt="alt">
  </a>
</template>

<script>
import classNames from 'classnames';

export default {
  props: {
    tag: {
      type: String,
      default: "a"
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String
    },
    align: {
      type: String,
      default: "top"
    },
    side: {
      type: String,
      default: 'left'
    },
    href: {
      type: String,
      default: "#"
    }
  },
  computed: {
    className() {
      return classNames(
        'd-flex',
        this.side === 'right'? 'ml-3' : 'mr-3',
        this.align === 'center' ? 'align-self-center' : this.align === 'bottom' ? 'align-self-end' : 'align-self-start'
      );
    }
  }
};
</script>

<style scoped>

</style>
