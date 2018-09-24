<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 class="grey-text"><strong>Buttons </strong></h4>
      <a href="https://mdbootstrap.com/vue/components/buttons/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="text-center mt-5">
      <h4 class="pb-2">Basic example</h4>
      <btn color="primary" size="lg">Primary button</btn>
      <btn color="info" size="lg">Info button</btn>
      <btn color="success" size="lg">Success button</btn>
      <btn color="danger" size="lg">Danger button</btn>
      <btn color="warning" size="lg">Warning button</btn>
      <btn size="lg">Default button</btn>
      <h4 class="pt-5 pb-2">Outline buttons</h4>
      <btn outline="primary" darkWaves size="lg">Primary button</btn>
      <btn outline="info" darkWaves size="lg">Info button</btn>
      <btn outline="success" darkWaves size="lg">Success button</btn>
      <btn outline="danger" darkWaves size="lg">Danger button</btn>
      <btn outline="warning" darkWaves size="lg">Warning button</btn>
      <btn outline="default" darkWaves size="lg">Default button</btn>
      <h4 class="pt-5 pb-2">Buttons with icons</h4>
      <btn icon="user" icon-left>Left</btn>
      <btn icon="user" icon-right>Right</btn>
    </div>
  </container>
</template>

<script>
import { Btn, Container, Fa, Row } from 'mdbvue';

export default {
  name: 'ButtonPage',
  components: {
    Btn,
    Container,
    Fa,
    Row
  }
};
</script>

<style scoped>
  h4 {
    margin: 0;
  }

</style>
