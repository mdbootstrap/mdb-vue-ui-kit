<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="grey-text"><strong>Buttons </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/buttons/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="text-center mt-5">
      <h4 class="pb-2">Basic example</h4>
      <mdb-btn color="primary" size="lg">Primary button</mdb-btn>
      <mdb-btn color="info" size="lg">Info button</mdb-btn>
      <mdb-btn color="success" size="lg">Success button</mdb-btn>
      <mdb-btn color="danger" size="lg">Danger button</mdb-btn>
      <mdb-btn color="warning" size="lg">Warning button</mdb-btn>
      <mdb-btn size="lg">Default button</mdb-btn>
      <h4 class="pt-5 pb-2">Outline buttons</h4>
      <mdb-btn outline="primary" darkWaves size="lg">Primary button</mdb-btn>
      <mdb-btn outline="info" darkWaves size="lg">Info button</mdb-btn>
      <mdb-btn outline="success" darkWaves size="lg">Success button</mdb-btn>
      <mdb-btn outline="danger" darkWaves size="lg">Danger button</mdb-btn>
      <mdb-btn outline="warning" darkWaves size="lg">Warning button</mdb-btn>
      <mdb-btn outline="default" darkWaves size="lg">Default button</mdb-btn>
      <h4 class="pt-5 pb-2">Buttons with icons</h4>
      <mdb-btn icon="user" icon-left>Left</mdb-btn>
      <mdb-btn icon="user" icon-right>Right</mdb-btn>
    </div>
  </mdb-container>
</template>

<script>
import { mdbBtn, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ButtonPage',
  components: {
    mdbBtn,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<style scoped>
  h4 {
    margin: 0;
  }

</style>
