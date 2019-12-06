<template>
  <component :is="tag" :class="className"><slot></slot></component>
</template>

<script>
const CardAvatar = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'avatar',
        this.color ? this.color : ''
      ];
    }
  }
};

export default CardAvatar;
export { CardAvatar as mdbCardAvatar };
</script>

<style scoped>
</style>
