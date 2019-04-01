<template>
    <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>iFrame </strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/iframe/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>

    <hr class="mb-4" />

    <mdb-row>
      <h2 class="mb-3">YouTube IFrame</h2>
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
          </div>
    </mdb-row>
      <hr class="my-4" />
    <mdb-row>
      <h2 class="mb-3">Vimeo IFrame</h2>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
      </div>
    </mdb-row>

    <hr class="my-4" />

    <mdb-row>
      <h2 class="mb-3">Google map</h2>
      <mdb-col md="12">
      <mdb-google-map
        name="example"
        class="col-md-12"
        style="height: 500px; position: relative; overflow: hidden"
        :markerCoordinates="coordinates"
        :zoom="14">
        ></mdb-google-map>
      </mdb-col>
    </mdb-row>
    <hr class="my-4" />
    <h2 class="mb-3">IFrame in a modal</h2>

      <mdb-row center>
        <mdb-btn color="primary" @click.native="ytmodal=true">YouTube Modal</mdb-btn>
        <mdb-btn color="default" @click.native="vmmodal=true">Vimeo Modal</mdb-btn>
        <mdb-btn color="secondary" @click.native="gmmodal=true">Google Maps Modal</mdb-btn>
      </mdb-row>
      <mdb-modal :show="ytmodal" @close="ytmodal=false">
        <mdb-modal-body class="p-0">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowfullscreen></iframe>
          </div>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <span class="mr-4">Spread the word!</span>
          <mdb-btn tag="a" floating size="sm" class="btn-fb">
            <mdb-icon fab icon="facebook"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-tw">
            <mdb-icon fab icon="twitter"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-gplus">
            <mdb-icon fab icon="google-plus"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-ins">
            <mdb-icon fab icon="linkedin"/>
          </mdb-btn>
          <mdb-btn outline="primary" rounded size="md" @click.native="ytmodal=false" class="ml-4">close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <mdb-modal :show="vmmodal" @close="vmmodal=false">
        <mdb-modal-body class="p-0">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/115098447" allowfullscreen></iframe>
          </div>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <span class="mr-4">Spread the word!</span>
          <mdb-btn tag="a" floating size="sm" class="btn-fb">
            <mdb-icon fab icon="facebook"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-tw">
            <mdb-icon fab icon="twitter"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-gplus">
            <mdb-icon fab icon="google-plus"/>
          </mdb-btn>
          <mdb-btn tag="a" floating size="sm" class="btn-ins">
            <mdb-icon fab icon="linkedin"/>
          </mdb-btn>
          <mdb-btn outline="primary" rounded size="md" @click.native="vmmodal=false" class="ml-4">close</mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <mdb-modal :show="gmmodal" @close="gmmodal=false" size="lg">
        <mdb-modal-body class="p-0">
          <mdb-google-map
            name="modal"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            :modal="gmmodal"
            wrapperClass="z-depth-1-half"/>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="primary" size="md">Save location<mdb-icon icon="map-marker" class="ml-1"/></mdb-btn>
          <mdb-btn outline="primary" size="md" @click.native="gmmodal=false">close<mdb-icon icon="times" class="ml-1"/></mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <hr class="my-4" />

      <h2 class="mb-3">IFrame with shadow</h2>
      <mdb-row>
          <mdb-col lg="4" md="12">
              <p class="h5 mb-4"><code>.z-depth-1</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-1">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
              </div>
          </mdb-col>

          <mdb-col lg="4" md="6">
              <p class="h5 mb-4"><code>.z-depth-1-half</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
              </div>
          </mdb-col>

          <mdb-col lg="4" md="6">
              <p class="h5 mb-4"><code>.z-depth-2</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-2">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
              </div>
          </mdb-col>

      </mdb-row>

      <mdb-row class="my-5">

          <mdb-col lg="4" md="12">
              <p class="h5 mb-4"><code>.z-depth-3</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-3">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
              </div>
          </mdb-col>

          <mdb-col lg="4" md="6">
              <p class="h5 mb-4"><code>.z-depth-4</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-4">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
              </div>
          </mdb-col>

          <mdb-col lg="4" md="6">
              <p class="h5 mb-4"><code>.z-depth-5</code></p>
              <div class="embed-responsive embed-responsive-16by9 z-depth-5">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
              </div>
          </mdb-col>
      </mdb-row>

      <mdb-row center class="mb-4">

          <mdb-col md="6">
              <p class="h5 mb-4"><code>.hoverable</code></p>
              <div class="embed-responsive embed-responsive-16by9 hoverable">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
              </div>
          </mdb-col>

      </mdb-row>
    </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbIcon, mdbModal, mdbBtn, mdbModalBody, mdbModalFooter, mdbCol, mdbGoogleMap } from 'mdbvue';
export default {
  name: 'iFrame',
  components: {
    mdbContainer,
    mdbRow,
    mdbIcon,
    mdbModal,
    mdbBtn,
    mdbModalBody,
    mdbModalFooter,
    mdbCol,
    mdbGoogleMap
  },
  data() {
    return {
      ytmodal: false,
      vmmodal: false,
      gmmodal: false,
      coordinates: [{
        latitude: 40.725118,
        longitude: -73.997699,
        title: 'New York'
      }]
    };
  }
};
</script>

<style>

</style>
