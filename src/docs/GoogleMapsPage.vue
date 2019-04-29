<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Google maps </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/advanced/google-map/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
      <h2 class="mb-3">Regular Map</h2>
      <mdb-col md="12">
        <mdb-google-map
          ref="map"
          manualInit
          name="reg"
          class="col-md-12"
          :markerCoordinates="coordinates"
          style=" height: 500px"
          :zoom="14">
        ></mdb-google-map>
      </mdb-col>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3">Custom Map</h2>
      <mdb-col md="12">

      <mdb-google-map
        ref="map2"
        manualInit
        name="custom"
        class="col-md-12"
        :markerCoordinates="coordinates"
        style=" height: 500px"
        :zoom="14"
        :styles="styles">
      </mdb-google-map>
      </mdb-col>

    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3">Satellite Map</h2>
      <mdb-col md="12">
      <mdb-google-map
        ref="map3"
        manualInit
        name="satellite-example"
        class="col-md-12"
        :markerCoordinates="coordinatesSat"
        style=" height: 500px"
        :zoom="16"
        type="satellite">
      </mdb-google-map>
      </mdb-col>
    </mdb-row>
        <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3">Full Page Map</h2>
      <mdb-col md="12" >
      <mdb-google-map
        ref="map4"
        manualInit
        name="full"
        class="col-md-12"
        :markerCoordinates="coordinatesSat"
        :zoom="16"
        :wrapperStyle="{width: '100vw', height: '100vh', overflow: 'visible'}"
        type="satellite">
      </mdb-google-map>
      </mdb-col>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3 w-100">Map within a card</h2>
      <mdb-col md="6" mb="4">
        <mdb-card narrow>
          <view-wrapper cascade gradient="blue">
            Regular map
          </view-wrapper>
          <mdb-card-body cascade>
            <mdb-google-map
              ref="map5"
              manualInit
              name="card"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              :wrapperStyle="{ height: '300px'}">
            </mdb-google-map>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
      <mdb-col md="6" mb="4">
        <mdb-card narrow>
          <view-wrapper cascade gradient="peach">
            Custom map
          </view-wrapper>
          <mdb-card-body cascade>
            <mdb-google-map
              ref="map6"
              manualInit
                  name="card2"
                  class="col-md-12"
                  :markerCoordinates="coordinates"
                  :zoom="14"
                  :styles="styles"
                  :wrapperStyle="{ height: '300px'}">
            </mdb-google-map>
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
    <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3 w-100">Map within a card</h2>
    <section class="section pb-5">
      <!--Section heading-->
      <h2 class="section-heading h1 pt-4">Contact us</h2>
      <!--Section description-->
      <p class="section-description pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur accusamus veniam.</p>

      <mdb-row>
        <mdb-col lg="5" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <div class="form-header blue accent-1">
                <h3>
                  <mdb-icon icon="envelope"/> Write to us:</h3>
              </div>
              <p>We'll write rarely, but only with the best content.</p><br>
              <mdb-input icon="user" label="Your name" iconClass="grey-text"/>
              <mdb-input icon="envelope" label="Your email" iconClass="grey-text"/>
              <mdb-input icon="tag" label="Subject" iconClass="grey-text"/>
              <mdb-textarea icon="pencil" label="Your message" iconClass="grey-text" :rows="3"/>
              <div class="text-center mt-4">
                <mdb-btn color="light-blue">Submit</mdb-btn>
              </div>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>

        <mdb-col lg="7">
          <mdb-google-map
            ref="map7"
            manualInit
              name="form"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              wrapperClass="z-depth-1-half"
              :wrapperStyle="{ height: '400px'}">
          </mdb-google-map>
          <mdb-row class="text-center mt-4">
            <mdb-col md="4">
              <mdb-btn tag="a" floating icon="map-marker" class="blue accent-1" iconRight/>
              <p>San Francisco, CA 94126</p>
              <p>United States</p>
            </mdb-col>
            <mdb-col md="4">
              <mdb-btn tag="a" floating icon="phone" class="blue accent-1"/>
          <p>+ 01 234 567 89</p>
          <p>Mon - Fri, 8:00-22:00</p>
            </mdb-col>
            <mdb-col md="4">
              <mdb-btn tag="a" floating icon="envelope" class="blue accent-1"/>
          <p>info@gmail.com</p>
          <p>sale@gmail.com</p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>

    </section>

    </mdb-row>
      <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3 w-100">Full width map within contact form</h2>
    <section class="section">
      <h2 class="section-heading h1 pt-4 mb-5">Contact us</h2>
        <mdb-card>
          <mdb-card-body>
            <mdb-google-map
              ref="map8"
              manualInit
              name="form2"
              class="col-md-12"
              :markerCoordinates="coordinates"
              :zoom="14"
              :wrapperStyle="{ height: '200px'}"
              wrapperClass="z-depth-1-half mb-4"
              >
          </mdb-google-map>
          <mdb-row>
            <mdb-col md="6" class="mb-4">
              <mdb-input label="Your name" />
              <mdb-input label="Your email" />
              <mdb-input label="Subject" />
            </mdb-col>
            <mdb-col md="6" class="mb-4">
            <mdb-textarea label="Your messge" :rows="5"/>
            </mdb-col>
            <mdb-col md="12">
              <div class="text-center">
                <mdb-btn color="mdb-color" block>Send Message</mdb-btn>
              </div>
            </mdb-col>
          </mdb-row>
          </mdb-card-body>
        </mdb-card>
    </section>
    </mdb-row>
      <hr class="mb-4" />
    <mdb-row>
    <h2 class="mb-3 w-100">Map within modal</h2>
    <mdb-row class="w-100 mb-4" center>
      <mdb-btn color="primary" @click.native="regular=true">Regular Map Modal</mdb-btn>
      <mdb-btn color="default" @click.native="satellite=true">Satellite Map Modal</mdb-btn>
      <mdb-btn color="secondary" @click.native="custom=true">Regular Map Modal</mdb-btn>
    </mdb-row>
      <!-- Regular Map mdbModal -->
      <mdb-modal :show="regular" @close="regular=false" size="lg" @shown="$refs.map9.initMap()">
        <mdb-modal-body class="p-0">
          <mdb-google-map
            ref="map9"
            manualInit
            name="modal-reg"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            wrapperClass="z-depth-1-half"
            :modal="regular">
          </mdb-google-map>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="info" size="md">Save location<mdb-icon icon="map-marker" class="ml-1"/></mdb-btn>
          <mdb-btn outline="info" size="md" @click.native="regular=false">close<mdb-icon icon="times" class="ml-1"/></mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <!-- Satellite Map mdbModal -->
      <mdb-modal :show="satellite" @close="satellite=false" size="lg" @shown="$refs.map10.initMap()">
        <mdb-modal-body class="p-0">
          <mdb-google-map
            ref="map10"
            manualInit
            name="modal-sat"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinatesSat"
            :zoom="16"
            wrapperClass="z-depth-1-half"
            :modal="satellite"
            type="satellite">
          </mdb-google-map>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="default" size="md">Save location<mdb-icon icon="map-marker" class="ml-1"/></mdb-btn>
          <mdb-btn outline="default" size="md" @click.native="satellite=false">close<mdb-icon icon="times" class="ml-1"/></mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>

      <!-- Custom Map mdbModal -->
      <mdb-modal :show="custom" @close="custom=false" size="lg" @shown="$refs.map11.initMap()">
        <mdb-modal-body class="p-0">
          <mdb-google-map
            ref="map11"
            manualInit
            name="modal-custom"
            class="col-md-12"
            style="height: 400px; position: relative; overflow: hidden"
            :markerCoordinates="coordinates"
            :zoom="14"
            :styles="styles"
            wrapperClass="z-depth-1-half"
            :modal="regular">
          </mdb-google-map>
        </mdb-modal-body>
        <mdb-modal-footer center>
          <mdb-btn color="secondary" size="md">Save location<mdb-icon icon="map-marker" class="ml-1"/></mdb-btn>
          <mdb-btn outline="secondary" size="md" @click.native="custom=false">close<mdb-icon icon="times" class="ml-1"/></mdb-btn>
        </mdb-modal-footer>
      </mdb-modal>
    </mdb-row>
  </mdb-container>

</template>

<script>
import { mdbContainer, mdbRow, mdbGoogleMap, mdbCol, mdbIcon, mdbCard, ViewWrapper, mdbCardBody, mdbInput, mdbTextarea, mdbBtn, mdbModal, mdbModalBody, mdbModalFooter  } from 'mdbvue';
export default {
  name:'GoogleMapsPage',
  components: {
    mdbContainer,
    mdbRow,
    mdbGoogleMap,
    mdbCol,
    mdbIcon,
    mdbCard,
    ViewWrapper,
    mdbCardBody,
    mdbInput,
    mdbTextarea,
    mdbBtn,
    mdbModal,
    mdbModalBody,
    mdbModalFooter
  },
  beforeMount() {
    this.$loadScript(`https://maps.googleapis.com/maps/api/js`).then(() => {
      this.$refs.map.initMap();
      this.$refs.map2.initMap();
      this.$refs.map3.initMap();
      this.$refs.map4.initMap();
      this.$refs.map5.initMap();
      this.$refs.map6.initMap();
      this.$refs.map7.initMap();
      this.$refs.map8.initMap();
    });
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
