<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Switch</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/switch/"
        wavesFixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2"/>Docs
      </a>
    </mdb-row>
    <hr class="mb-5">

    <section class="demo-section">
      <h4>Default switch</h4>
      <section>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitches">
          <label class="custom-control-label" for="customSwitches">Toggle this switch element</label>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Checked</h4>
      <section>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch1" checked>
          <label class="custom-control-label" for="customSwitch1">Toggle this switch element</label>
        </div>
      </section>
    </section>
    <section class="demo-section">
      <h4>Disabled</h4>
      <section>
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" id="customSwitch2" disabled>
          <label class="custom-control-label" for="customSwitch2">Toggle this switch element</label>
        </div>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbIcon, mdbRow } from 'mdbvue';
export default {
  name: 'SwitchPage',
  components: {
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<style scoped>

</style>