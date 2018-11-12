<template>
    <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Slider</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/slider/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
       <hr />
       <row>
      <h2 class="mb-3">Default Slider</h2>
       </row>

      <label for="customRange1">Example range</label>
      <input type="range" class="custom-range" id="customRange1">
    </container>
</template>

<script>
import { Container, Row, Fa } from 'mdbvue';

export default {
  name: 'SliderPage',
  components: {
    Container,
    Row,
    Fa
  }
};
</script>

<style>

</style>
