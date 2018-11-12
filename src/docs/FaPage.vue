<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Icons</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/content/icons-usage/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="text-center">
      <fa icon="hand-spock-o" size="5x" class="mt-5"/>
    </div>
  </container>
</template>

<script>
import { Fa, Container, Row } from 'mdbvue';

export default {
  name: 'FaPage',
  components: {
    Fa,
    Container,
    Row
  }
};
</script>

<style scoped>

</style>
