<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Popovers</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/popovers/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-row class="mt-5">
      <mdb-col col="4"></mdb-col>
      <mdb-col col="4" class="mt-5 pt-5">
        <mdb-popover trigger="click" :options="{placement: 'top'}" class="mt-5">
          <div class="popover">
            <div class="popover-header">
              Yup.
            </div>
            <div class="popover-body">
              It's over.
            </div>
          </div>
          <mdb-btn slot="reference" color="default">
            Pop pop
          </mdb-btn>
        </mdb-popover>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>


<script>
import { mdbPopover, mdbRow, mdbCol, mdbBtn, mdbContainer, mdbIcon } from 'mdbvue';

export default {
  name: 'PopoverPage',
  data() {
    return {zzz: false};
  },
  components: {
    mdbPopover,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbContainer,
    mdbIcon
  },
};
</script>

<style>

</style>
