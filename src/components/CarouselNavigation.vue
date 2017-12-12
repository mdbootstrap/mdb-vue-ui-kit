<template>
  <div>
    <a class="carousel-control-prev" @click.prevent="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Prev</span>
    </a>
    <a class="carousel-control-next" @click.prevent="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    prev() {
      this.$parent.$parent.$emit('changeSlide', {'slideIndex': 'prev'});
    },
    next() {
      this.$parent.$parent.$emit('changeSlide', {'slideIndex': 'next'});
    }
  }
};
</script>

<style scoped>
</style>
