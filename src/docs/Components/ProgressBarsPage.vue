<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Progress Bar</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/progress-bar/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-container class="mt-5">
      <h4 class="pb-2">Basic examples</h4>
      <mdb-progress :height="20" :value="0" />
      <mdb-progress :height="20" :value="25" color="blue" />
      <mdb-progress :height="20" :value="50" color="blue" />
      <mdb-progress :height="20" :value="75" color="blue" />
      <mdb-progress :height="20" :value="100" color="blue" />
    </mdb-container>
  </mdb-container>
</template>

<script>
import { mdbProgress, mdbContainer, mdbRow, mdbIcon  } from 'mdbvue';

export default {
  name: 'ProgressBarsPage',
  components: {
    mdbProgress,
    mdbContainer,
    mdbRow,
    mdbIcon
  }
};
</script>

<style scoped>
</style>
