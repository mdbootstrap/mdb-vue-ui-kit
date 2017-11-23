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
import container from '@/components/Container';
import row from '@/components/Row';
import column from '@/components/Col';

export default {
  name: 'ContainerPage',
  components: {
    'Container': container,
    'Row': row,
    'Column': column
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
