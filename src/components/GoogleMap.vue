<template>
  <div class="google-map" :style="wrapperStyle" :class="wrapperClass" :id="mapName"></div>
</template>
<script>
const GoogleMap = {
  name: 'google-map',
  props: {
    name: {
      type: String
    },
    markerCoordinates: {
      type: Array
    },
    zoom: {
      type: Number
    },
    modal: {
      type: Boolean
    },
    styles: {
      type: Array
    },
    satellite: {
      type: Boolean,
      defaul: false
    },
    type: {
      type: String,
      default: 'roadmap'
    },
    wrapperStyle: {
      type: [Array, String, Object],
    },
    wrapperClass: {
      type: [Array, String, Object],
    }

  },
  data() {
    return {
      mapName: this.name + "-map",
      map: null,
      bounds: null,
      markers: []
    };
  },
  mounted() {
    this.bounds = new google.maps.LatLngBounds();
    const mapCentre = this.markerCoordinates[0];

    const element = document.getElementById(this.mapName);
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude),
      zoom: this.zoom ? this.zoom: 15,
      styles: this.styles,
      mapTypeId: this.type
    };
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach(coord => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        title: coord.title
      });
      this.markers.push(marker);
      if (this.zoom) {return;}
      this.map.fitBounds(this.bounds.extend(position));

    });
  },
  methods: {
    retrigger() {
      google.maps.event.trigger(this.map, 'resize');
    }
  },
  watch: {
    modal() {
      this.retrigger();
    }
  }
};

export default GoogleMap;
export { GoogleMap as mdbGoogleMap };
</script>
<style scoped>
.google-map {
  width: 800px;
  height: 600px;
  /* margin: 0 auto;
  background: gray; */
}
</style>
