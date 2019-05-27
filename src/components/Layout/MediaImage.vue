<template>
  <component :is="tag" :href="href" :class="className">
    <img :class="this.circle ? 'rounded-circle' : ''" :src="src" :alt="alt">
  </component>
</template>

<script>
import classNames from 'classnames';

const MediaImage = {
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
    },
    circle: {
      type: Boolean,
      default: false
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

export default MediaImage;
export { MediaImage as mdbMediaImage };
</script>

<style scoped>

</style>
