<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Select</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/forms/multiselect/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <section class="demo-section">
      <h4>Default select</h4>
      <section>
        <select class="browser-default custom-select" v-model="selected">
          <option selected value="default">Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
        <p class="mt-4 mb-0">Selected: {{selected}}</p>
      </section>
    </section>
    <section class="demo-section">
      <h4>Default multiselect</h4>
      <section>
        <select class="browser-default custom-select" multiple v-model="multiSelected">
          <option value="1" selected>One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </select>
        <p class="mt-4 mb-0">Selected: {{multiSelected}}</p>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'MultiSelectPageFree',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  },
  data() {
    return {
      selected: 'default',
      multiSelected: ['1']
    };
  }
};
</script>

<style scoped>
</style>
