<template>
    <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Slider</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/slider/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
       <hr />
       <mdb-row>
      <h2 class="mb-3">Default Slider</h2>
       </mdb-row>

      <label for="customRange1">Example range</label>
      <input type="range" class="custom-range" id="customRange1">
    </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon } from 'mdbvue';

export default {
  name: 'SliderPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon
  }
};
</script>

<style>

</style>
