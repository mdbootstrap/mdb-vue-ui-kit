<template>
  <container fluid>
    <row>
      <column sm="2" offset-md="2">Col-sm-2 offset-md-2</column>
      <column sm="4">Col-sm-4</column>
      <column sm="4">Col-sm-4</column>
    </row>
  </container>
</template>

<script>
import Container from '@/components/Container.vue';
import Row from '@/components/Row.vue';
import Column from '@/components/Col.vue';

export default {
  name: 'GridPage',
  components: {
    Container,
    Row,
    Column
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
