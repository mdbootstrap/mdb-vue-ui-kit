<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Buttons </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/buttons/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-btn color="primary" size="lg">Primary button</mdb-btn>
        <mdb-btn color="info" size="lg">Info button</mdb-btn>
        <mdb-btn color="success" size="lg">Success button</mdb-btn>
        <mdb-btn color="danger" size="lg">Danger button</mdb-btn>
        <mdb-btn color="warning" size="lg">Warning button</mdb-btn>
        <mdb-btn size="lg">Default button</mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>Outline buttons</h4>
      <section>
        <mdb-btn outline="primary" darkWaves size="lg">Primary button</mdb-btn>
        <mdb-btn outline="info" darkWaves size="lg">Info button</mdb-btn>
        <mdb-btn outline="success" darkWaves size="lg">Success button</mdb-btn>
        <mdb-btn outline="danger" darkWaves size="lg">Danger button</mdb-btn>
        <mdb-btn outline="warning" darkWaves size="lg">Warning button</mdb-btn>
        <mdb-btn outline="default" darkWaves size="lg">Default button</mdb-btn>
      </section>
    </section>
    <section class="demo-section">
      <h4>Buttons with icons</h4>
      <section>
        <mdb-btn icon="user" icon-left>Left</mdb-btn>
        <mdb-btn icon="user" icon-right>Right</mdb-btn>
      </section>
    </section>
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
</style>
