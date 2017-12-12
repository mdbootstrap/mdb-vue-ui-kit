<template>
  <div :is="tag" class="carousel-caption">
    <h3 class="h3-responsive">{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
};
</script>

<style scoped>
</style>
