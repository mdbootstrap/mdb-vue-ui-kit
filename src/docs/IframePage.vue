<template>
    <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>iFrame </strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/iframe/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
      <hr class="mb-4" />
    <row>
      <h2 class="mb-3">YouTube IFrame</h2>
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/v64KOxKVLVg" allowfullscreen></iframe>
          </div>
    </row>
      <hr class="my-4" />
    <row>
      <h2 class="mb-3">Vimeo IFrame</h2>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/137857207" allowfullscreen></iframe>
      </div>
    </row>
      <hr class="my-4" />
    <row>
      <h2 class="mb-3">Google map</h2>
      <column md="12">
      <google-map
        name="example"
        class="col-md-12"
        style="height: 500px; position: relative; overflow: hidden"
        :markerCoordinates="coordinates"
        :zoom="14">
        ></google-map>
      </column>
    </row>
      <hr class="my-4" />
      <h2 class="mb-3">IFrame in a modal</h2>

      <row center>
        <btn color="primary" @click.native="ytmodal=true">YouTube Modal</btn>
        <btn color="default" @click.native="vmmodal=true">Vimeo Modal</btn>
        <btn color="secondary" @click.native="gmmodal=true">Google Maps Modal</btn>
      </row>
      <modal v-if="ytmodal" @close="ytmodal=false">
        <modal-body class="p-0">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U" allowfullscreen></iframe>
          </div>
        </modal-body>
        <modal-footer center>
          <span class="mr-4">Spread the word!</span>
          <btn tag="a" floating size="sm" class="btn-fb">
            <fa icon="facebook"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-tw">
            <fa icon="twitter"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-gplus">
            <fa icon="google-plus"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-ins">
            <fa icon="linkedin"/>
          </btn>
          <btn outline="primary" rounded size="md" @click.native="ytmodal=false" class="ml-4">close</btn>
        </modal-footer>
      </modal>

      <modal v-if="vmmodal" @close="vmmodal=false">
        <modal-body class="p-0">
          <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/115098447" allowfullscreen></iframe>
          </div>
        </modal-body>
        <modal-footer center>
          <span class="mr-4">Spread the word!</span>
          <btn tag="a" floating size="sm" class="btn-fb">
            <fa icon="facebook"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-tw">
            <fa icon="twitter"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-gplus">
            <fa icon="google-plus"/>
          </btn>
          <btn tag="a" floating size="sm" class="btn-ins">
            <fa icon="linkedin"/>
          </btn>
          <btn outline="primary" rounded size="md" @click.native="vmmodal=false" class="ml-4">close</btn>
        </modal-footer>
      </modal>

      <modal v-if="gmmodal" @close="gmmodal=false" size="lg">
        <modal-body class="p-0">
          <google-map
            name="modal"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            :modal="gmmodal"
            wrapperClass="z-depth-1-half">
            ></google-map>
        </modal-body>
        <modal-footer center>
          <btn color="primary" size="md">Save location<fa icon="map-marker" class="ml-1"/></btn>
          <btn outline="primary" size="md" @click.native="gmmodal=false">close<fa icon="times" class="ml-1"/></btn>
        </modal-footer>
      </modal>

      <hr class="my-4" />

      <h2 class="mb-3">IFrame with shadow</h2>
      <row>
                <!--Grid column-->
                <column lg="4" md="12">

                    <p class="h5 mb-4"><code>.z-depth-1</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-1">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

                <!--Grid column-->
                <column lg="4" md="6">

                    <p class="h5 mb-4"><code>.z-depth-1-half</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

                <!--Grid column-->
                <column lg="4" md="6">

                    <p class="h5 mb-4"><code>.z-depth-2</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-2">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

            </row>
            <!--Grid row-->

            <!--Grid row-->
            <row class="my-5">

                <!--Grid column-->
                <column lg="4" md="12">

                    <p class="h5 mb-4"><code>.z-depth-3</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-3">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

                <!--Grid column-->
                <column lg="4" md="6">

                    <p class="h5 mb-4"><code>.z-depth-4</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-4">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

                <!--Grid column-->
                <column lg="4" md="6">

                    <p class="h5 mb-4"><code>.z-depth-5</code></p>

                    <div class="embed-responsive embed-responsive-16by9 z-depth-5">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

            </row>
            <!--Grid row-->

            <!--Grid row-->
            <row center class="mb-4">

                <!--Grid column-->
                <column md="6">

                    <p class="h5 mb-4"><code>.hoverable</code></p>

                    <div class="embed-responsive embed-responsive-16by9 hoverable">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fa3Iczgh8Ok" style="height: 101%" allowfullscreen></iframe>
                    </div>

                </column>
                <!--Grid column-->

            </row>
            <!--Grid row-->

    </container>
</template>

<script>
import { Container, Row, Fa, Modal, Btn, ModalBody, ModalFooter, Column, GoogleMap } from 'mdbvue';
export default {
  name: 'iFrame',
  components: {
    Container,
    Row,
    Fa,
    Modal,
    Btn,
    ModalBody,
    ModalFooter,
    Column,
    GoogleMap
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
