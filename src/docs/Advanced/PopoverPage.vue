<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Popovers</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/popovers/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <section class="demo-section">
      <h4>Basic example</h4>
      <section>
        <mdb-row center>
          <mdb-popover trigger="click" :options="{placement: 'top'}" class="mt-5">
            <span slot="header">Yup.</span>
            <span slot="body">It's over.</span>
            <mdb-btn slot="reference" color="default">
              Pop pop
            </mdb-btn>
          </mdb-popover>
        </mdb-row>
      </section>
    </section>

    <section class="demo-section">
      <h4>Image popover</h4>
      <section>
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
      </section>
    </section>

    <section class="demo-section">
      <h4>Custom HTML content </h4>
      <section>
        <mdb-row center>
          <mdb-popover trigger="click" :options="{placement: 'bottom'}">
            <div slot="body">
              <mdb-jumbotron class="mb-0 p-3 pt-1 text-center">
                <mdb-view class="my-4" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="">
                  <a><mdb-mask waves overlay="white-slight"/></a>
                </mdb-view>
                <a class="fa-lg p-2 m-2 li-ic"><mdb-icon fab icon="linkedin-in" class="grey-text" /></a>
                <a class="fa-lg p-2 m-2 tw-ic"><mdb-icon fab icon="twitter" class="grey-text" /></a>
                <a class="fa-lg p-2 m-2 fb-ic"><mdb-icon fab icon="facebook-f" class="grey-text" /></a>
              </mdb-jumbotron>
            </div>
            <mdb-btn slot="reference" color="purple">
              Click me
            </mdb-btn>
          </mdb-popover>
          <mdb-popover trigger="hover" :options="{placement: 'right'}">
            <div slot="body">
              <mdb-jumbotron class="mb-0 text-center">
                <mdb-card-title class="pb-2 h4"><strong>My adventure</strong></mdb-card-title>
                <mdb-view class="my-4" src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg" alt="">
                  <a><mdb-mask waves overlay="white-slight"/></a>
                </mdb-view>
                <h5 class="indigo-text h5 mb-4">Photography</h5>
                <p class="card-text">Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <a class="fa-lg p-2 m-2 li-ic"><mdb-icon fab icon="linkedin-in" class="grey-text" /></a>
                <a class="fa-lg p-2 m-2 tw-ic"><mdb-icon fab icon="twitter" class="grey-text" /></a>
                <a class="fa-lg p-2 m-2 fb-ic"><mdb-icon fab icon="facebook-f" class="grey-text" /></a>
              </mdb-jumbotron>
            </div>
            <mdb-btn slot="reference" color="indigo">
              Hover over me
            </mdb-btn>
          </mdb-popover>
        </mdb-row>
      </section>
    </section>
  </mdb-container>
</template>


<script>
import { mdbPopover, mdbRow, mdbCol, mdbBtn, mdbContainer, mdbIcon, mdbJumbotron, mdbView, mdbMask, mdbCardTitle } from 'mdbvue';

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
    mdbIcon,
    mdbJumbotron,
    mdbView,
    mdbMask,
    mdbCardTitle
  },
};
</script>

<style>

</style>
