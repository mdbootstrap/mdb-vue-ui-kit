<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Masks</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/css/masks/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-container>
        <mdb-row class="mt-5">
          <mdb-col col="12" sm="6" class="py-2">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <mdb-mask flex-center waves text="waves"></mdb-mask>
            </view-wrapper>
          </mdb-col>
          <mdb-col col="12" sm="6" class="py-2">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <mdb-mask flex-center pattern="3" text="pattern = &quot;3&quot;"></mdb-mask>
            </view-wrapper>
          </mdb-col>
          <mdb-col col="12" sm="6">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <mdb-mask flex-center waves overlay="blue-strong" text="overlay = &quot;blue-strong&quot; waves"></mdb-mask>
            </view-wrapper>
          </mdb-col>
          <mdb-col col="12" sm="6">
            <view-wrapper src="https://mdbootstrap.com/img/Photos/Others/nature-sm.jpg" alt="view">
              <mdb-mask flex-center waves pattern="5" text="pattern = &quot;5&quot; waves"></mdb-mask>
            </view-wrapper>
          </mdb-col>
        </mdb-row>
    </mdb-container>
  </mdb-container>
</template>

<script>
import { ViewWrapper, mdbMask, mdbContainer, mdbRow, mdbCol, mdbIcon } from 'mdbvue';

export default {
  name: 'MasksPage',
  components: {
    ViewWrapper,
    mdbMask,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon
  }
};
</script>

<style scoped>
</style>
