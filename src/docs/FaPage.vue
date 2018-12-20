<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Icons</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/content/icons-usage/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="text-center">
      <mdb-icon icon="hand-spock-o" size="5x" class="mt-5"/>
    </div>
  </mdb-container>
</template>

<script>
import { mdbIcon, mdbContainer, mdbRow } from 'mdbvue';

export default {
  name: 'FaPage',
  components: {
    mdbIcon,
    mdbContainer,
    mdbRow
  }
};
</script>

<style scoped>

</style>
