<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Popovers</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/popovers/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-row center>
      <mdb-popover trigger="click" :options="{placement: 'top'}" class="mt-5">
        <span slot="header">Yup.</span>
        <span slot="body">It's over.</span>
        <mdb-btn slot="reference" color="default">
          Pop pop
        </mdb-btn>
      </mdb-popover>
    </mdb-row>

    <hr class="mt-5" />
    <h4 class="my-4 text-left">Image popover</h4>
    
    <mdb-row center>
      <mdb-popover trigger="hover" :options="{placement: 'bottom'}">
        <img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg" slot="body"/>
        <mdb-btn slot="reference" color="primary">
          Hover over me
        </mdb-btn>
      </mdb-popover>
      <mdb-popover trigger="click" :options="{placement: 'bottom'}">
        <img src="https://mdbootstrap.com/img/Others/documentation/img%20(30)-mini.jpg" slot="body"/>
        <mdb-btn slot="reference" color="indigo">
          Click me
        </mdb-btn>
      </mdb-popover>
      <mdb-popover trigger="hover" :options="{placement: 'bottom'}">
        <img src="//placehold.it/100x50" slot="body"/>
        <mdb-btn slot="reference" color="dark-green">
          Hover over me
        </mdb-btn>
      </mdb-popover>
      <mdb-popover trigger="click" :options="{placement: 'bottom'}">
        <img src="//placehold.it/100x50g" slot="body"/>
        <mdb-btn slot="reference" color="purple">
          Click me
        </mdb-btn>
      </mdb-popover>
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
