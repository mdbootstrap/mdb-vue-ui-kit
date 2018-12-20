<template>
  <mdb-container fluid class="mt-5">
    <mdb-row>
      <mdb-col sm="2" offset-md="2">Col-sm-2 offset-md-2</mdb-col>
      <mdb-col sm="4">Col-sm-4</mdb-col>
      <mdb-col sm="4">Col-sm-4</mdb-col>
    </mdb-row>
  </mdb-container>
</template>

<script>
import {mdbContainer, mdbRow, mdbCol } from 'mdbvue';

export default {
  name: 'GridPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
