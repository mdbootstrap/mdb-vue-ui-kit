<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Jumbotron</strong></h4>
    </mdb-row>
    <hr />
    <mdb-container class="mt-5">
      <mdb-jumbotron fluid class="px-3">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
      </mdb-jumbotron>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbJumbotron, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'JumbotronPage',
  components: {
    mdbContainer,
    mdbJumbotron,
    mdbIcon,
    mdbRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
