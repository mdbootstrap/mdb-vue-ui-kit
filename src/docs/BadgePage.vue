<template>
  <div class="text-center mt-5">
    <badge color="primary-color">Badge</badge>
  </div>
</template>

<script>
import badge from '../components/Badge.vue';

export default {
  name: 'BadgePage',
  components: {
    'Badge': badge
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
