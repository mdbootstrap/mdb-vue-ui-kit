<template>
  <container class="mt-5">
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Google maps </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/google-map/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-4" />
    <row>
      <h2 class="mb-3">Regular Map</h2>
      <column md="12">
        <google-map
          name="reg"
          class="col-md-12"
          :markerCoordinates="coordinates"
          style=" height: 500px"
          :zoom="14">
        ></google-map>
      </column>
    </row>
    <hr class="mb-4" />
    <row>
    <h2 class="mb-3">Custom Map</h2>
      <column md="12">

      <google-map
        name="custom"
        class="col-md-12"
        :markerCoordinates="coordinates"
        style=" height: 500px"
        :zoom="14"
        :styles="styles">
      </google-map>
      </column>

    </row>
    <hr class="mb-4" />
    <row>
    <h2 class="mb-3">Satellite Map</h2>
      <column md="12">
      <google-map
        name="satellite-example"
        class="col-md-12"
        :markerCoordinates="coordinatesSat"
        style=" height: 500px"
        :zoom="16"
        type="satellite">
      </google-map>
      </column>
    </row>
        <hr class="mb-4" />
    <row>
    <h2 class="mb-3">Full Page Map</h2>
      <column md="12" >
      <google-map
        name="full"
        class="col-md-12"
        :markerCoordinates="coordinatesSat"
        :zoom="16"
        :wrapperStyle="{width: '100vw', height: '100vh', overflow: 'visible'}"
        type="satellite">
      </google-map>
      </column>
    </row>
    <hr class="mb-4" />
    <row>
    <h2 class="mb-3 w-100">Map within a card</h2>
      <column md="6" mb="4">
        <card narrow>
          <view-wrapper cascade gradient="blue">
            Regular map
          </view-wrapper>
          <card-body cascade>
            <google-map
              name="card"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              :wrapperStyle="{ height: '300px'}">
            </google-map>
          </card-body>
        </card>
      </column>
      <column md="6" mb="4">
        <card narrow>
          <view-wrapper cascade gradient="peach">
            Custom map
          </view-wrapper>
          <card-body cascade>
            <google-map
                  name="card2"
                  class="col-md-12"
                  :markerCoordinates="coordinates"
                  :zoom="14"
                  :styles="styles"
                  :wrapperStyle="{ height: '300px'}">
            </google-map>
          </card-body>
        </card>
      </column>
    </row>
    <hr class="mb-4" />
    <row>
    <h2 class="mb-3 w-100">Map within a card</h2>
    <section class="section pb-5">
      <!--Section heading-->
      <h2 class="section-heading h1 pt-4">Contact us</h2>
      <!--Section description-->
      <p class="section-description pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

      <row>
        <column lg="5" class="mb-4">
          <card>
            <card-body>
              <div class="form-header blue accent-1">
                <h3>
                  <fa icon="envelope"/> Write to us:</h3>
              </div>
              <p>We'll write rarely, but only with the best content.</p><br>
              <mdb-input icon="user" label="Your name" iconClass="grey-text"/>
              <mdb-input icon="envelope" label="Your email" iconClass="grey-text"/>
              <mdb-input icon="tag" label="Subject" iconClass="grey-text"/>
              <md-textarea icon="pencil" label="Your message" iconClass="grey-text" :rows="3"/>
              <div class="text-center mt-4">
                <btn color="light-blue">Submit</btn>
              </div>
            </card-body>
          </card>
        </column>

        <column lg="7">
          <google-map
              name="form"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              wrapperClass="z-depth-1-half"
              :wrapperStyle="{ height: '400px'}">
          </google-map>
          <row class="text-center mt-4">
            <column md="4">
              <btn tag="a" floating icon="map-marker" class="blue accent-1" iconRight/>
              <p>San Francisco, CA 94126</p>
              <p>United States</p>
            </column>
            <column md="4">
              <btn tag="a" floating icon="phone" class="blue accent-1"/>
          <p>+ 01 234 567 89</p>
          <p>Mon - Fri, 8:00-22:00</p>
            </column>
            <column md="4">
              <btn tag="a" floating icon="envelope" class="blue accent-1"/>
          <p>info@gmail.com</p>
          <p>sale@gmail.com</p>
            </column>
          </row>
        </column>
      </row>

    </section>

    </row>
      <hr class="mb-4" />
    <row>
    <h2 class="mb-3 w-100">Full width map within contact form</h2>
    <section class="section">
      <h2 class="section-heading h1 pt-4 mb-5">Contact us</h2>
        <card>
          <card-body>
            <google-map
              name="form2"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              :wrapperStyle="{ height: '200px'}"
              wrapperClass="z-depth-1-half mb-4"
              >
          </google-map>
          <row>
            <column md="6" class="mb-4">
              <mdb-input label="Your name" />
              <mdb-input label="Your email" />
              <mdb-input label="Subject" />
            </column>
            <column md="6" class="mb-4">
            <md-textarea label="Your messge" :rows="5"/>
            </column>
            <column md="12">
              <div class="text-center">
                <btn color="mdb-color" block>Send Message</btn>
              </div>
            </column>
          </row>
          </card-body>
        </card>
    </section>
    </row>
      <hr class="mb-4" />
    <row>
    <h2 class="mb-3 w-100">Map within modal</h2>
    <row class="w-100 mb-4" center>
      <btn color="primary" @click.native="regular=true">Regular Map Modal</btn>
      <btn color="default" @click.native="satellite=true">Satellite Map Modal</btn>
      <btn color="secondary" @click.native="custom=true">Regular Map Modal</btn>
    </row>
      <!-- Regular Map Modal -->
      <modal v-if="regular" @close="regular=false" size="lg">
        <modal-body class="p-0">
          <google-map
            name="modal-reg"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            wrapperClass="z-depth-1-half"
            :modal="regular">
          </google-map>
        </modal-body>
        <modal-footer center>
          <btn color="info" size="md">Save location<fa icon="map-marker" class="ml-1"/></btn>
          <btn outline="info" size="md" @click.native="regular=false">close<fa icon="times" class="ml-1"/></btn>
        </modal-footer>
      </modal>

      <!-- Satellite Map Modal -->
      <modal v-if="satellite" @close="satellite=false" size="lg">
        <modal-body class="p-0">
          <google-map
            name="modal-sat"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinatesSat"
            :zoom="16"
            wrapperClass="z-depth-1-half"
            :modal="satellite"
            type="satellite">
          </google-map>
        </modal-body>
        <modal-footer center>
          <btn color="default" size="md">Save location<fa icon="map-marker" class="ml-1"/></btn>
          <btn outline="default" size="md" @click.native="satellite=false">close<fa icon="times" class="ml-1"/></btn>
        </modal-footer>
      </modal>

      <!-- Custom Map Modal -->
      <modal v-if="custom" @close="custom=false" size="lg">
        <modal-body class="p-0">
          <google-map
            name="modal-custom"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            :styles="styles"
            wrapperClass="z-depth-1-half"
            :modal="regular">
          </google-map>
        </modal-body>
        <modal-footer center>
          <btn color="secondary" size="md">Save location<fa icon="map-marker" class="ml-1"/></btn>
          <btn outline="secondary" size="md" @click.native="custom=false">close<fa icon="times" class="ml-1"/></btn>
        </modal-footer>
      </modal>
    </row>
  </container>

</template>

<script>
import { Container, Row, GoogleMap, Column, Fa, Card, ViewWrapper, CardBody, mdbInput, MdTextarea, Btn, Modal, ModalBody, ModalFooter  } from 'mdbvue';
export default {
  name:'GoogleMapsPage',
  components: {
    Container,
    Row,
    GoogleMap,
    Column,
    Fa,
    Card,
    ViewWrapper,
    CardBody,
    mdbInput,
    MdTextarea,
    Btn,
    Modal,
    ModalBody,
    ModalFooter
  },
  data() {
    return {
      coordinates: [{
        latitude: 40.725118,
        longitude: -73.997699,
        title: 'New York'
      }],
      coordinatesSat: [{
        latitude: 48.856847,
        longitude: 2.296832,
        title: "Paris, France"
      }],
      styles: [
        {
          "featureType": "administrative",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "visibility": "simplified"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "road.local",
          "elementType": "all",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "visibility": "on"
          }]
        }, {
          "featureType": "road.arterial",
          "elementType": "all",
          "stylers": [{
            "visibility": "off"
          }]
        }, {
          "featureType": "water",
          "elementType": "all",
          "stylers": [{
            "color": "#5f94ff"
          },
          {
            "lightness": 26
          },
          {
            "gamma": 5.86
          }
          ]
        }, {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [{
            "weight": 0.6
          },
          {
            "saturation": -85
          },
          {
            "lightness": 61
          }
          ]
        }, {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [{
            "hue": "#0066ff"
          },
          {
            "saturation": 74
          },
          {
            "lightness": 100
          }
          ]
        }
      ],
      regular: false,
      satellite: false,
      custom: false
    };
  }
};
</script>

<style>
</style>
