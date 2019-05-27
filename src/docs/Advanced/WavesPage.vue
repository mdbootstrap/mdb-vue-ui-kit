<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Waves effect</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/waves-effect/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr class="mt-4 mb-5">

    <h2 class="ripple-parent">Example</h2>
    <section class="preview">
      <mdb-row>
        <mdb-col md="3">
            <mdb-btn color="primary">
              click me
            </mdb-btn>
        </mdb-col>
        <mdb-col md="5">
          <mdb-view src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/6-col/img%20(54).jpg" hover>
            <mdb-mask overlay="white-slight" waves/>
          </mdb-view>
        </mdb-col>
      </mdb-row>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbBtn, mdbView, mdbMask, waves } from 'mdbvue';

export default {
  name: 'WavesPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbBtn,
    mdbView,
    mdbMask,
  },
  mixins: [waves]
};
</script>

<style>
.preview {
  border: 1px solid #e0e0e0;
  padding: 15px
}
</style>
