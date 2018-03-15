<template>
  <div :is="tag" class="carousel-caption">
    <slot>
      <h3 class="h3-responsive">{{ title }}</h3>
      <p>{{ text }}</p>
    </slot>
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
