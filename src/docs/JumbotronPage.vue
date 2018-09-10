<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Jumbotron</strong></h4>
      <a href="https://mdbootstrap.com/components/bootstrap-jumbotron/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <container class="mt-5">
      <jumbotron fluid class="px-3">
        <h1 class="display-3">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-2" />
        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
      </jumbotron>
    </container>
  </container>
</template>

<script>
import { Container, Jumbotron, Fa, Row } from 'mdbvue';

export default {
  name: 'JumbotronPage',
  components: {
    Container,
    Jumbotron,
    Fa,
    Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
