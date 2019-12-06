<template>
  <component :is="tag" :href="href" :class="className" :style="style">
    <img :class="this.circle ? 'rounded-circle' : ''" class="media-image" :src="src" :alt="alt">
  </component>
</template>

<script>
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
    },
    width: Number
  },
  computed: {
    className() {
      return [
        'd-flex',
        this.side === 'right'? 'ml-3' : 'mr-3',
        this.align === 'center' ? 'align-self-center' : this.align === 'bottom' ? 'align-self-end' : 'align-self-start'
      ];
    },
    style() {
      return this.width ? `width: ${this.width}px` : '';
    }
  }
};

export default MediaImage;
export { MediaImage as mdbMediaImage };
</script>

<style scoped>
  .media-image {
    max-width: 100%;
  }
</style>
