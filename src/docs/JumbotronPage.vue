<template>
	<container>
    <jumbotron fluid>
      <h1 class="display-3">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-2" />
      <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
    </jumbotron>
  </container>
</template>

<script>
import container from '@/components/Container.vue';

export default {
  name: 'JumbotronPage',
  components: {
    'Container': container
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
