<template>
  <mdb-container class="text-center mt-5">
    <mdb-row class="mt-5">
      <h4 class="demo-title"><strong>Badges </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/badges/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-row>
      <mdb-badge m="r2">Default</mdb-badge>
      <mdb-badge color="primary" m="r2">Primary</mdb-badge>
      <mdb-badge color="success" m="r2">Success</mdb-badge>
      <mdb-badge color="info" m="r2">Info</mdb-badge>
      <mdb-badge color="warning" m="r2">Warning</mdb-badge>
      <mdb-badge color="danger" m="r2">Danger</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge tag="a" href="#" color="primary-color" m="r2">Primary</mdb-badge>
      <mdb-badge tag="a" href="#" color="secondary-color" m="r2">Secondary</mdb-badge>
      <mdb-badge tag="a" href="#" color="success-color" m="r2">Success</mdb-badge>
      <mdb-badge tag="a" href="#" color="danger-color" m="r2">Danger</mdb-badge>
      <mdb-badge tag="a" href="#" color="warning-color" m="r2">Warning</mdb-badge>
      <mdb-badge tag="a" href="#" color="info-color" m="r2">Info</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge pill color="pink" m="r2">Pink</mdb-badge>
      <mdb-badge pill color="light-blue" m="r2">Light blue</mdb-badge>
      <mdb-badge pill color="indigo" m="r2">Indigo</mdb-badge>
      <mdb-badge pill color="purple" m="r2">Purple</mdb-badge>
      <mdb-badge pill color="orange" m="r2">Orange</mdb-badge>
      <mdb-badge pill color="green" m="r2">Green</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge color="default" m="r2"><mdb-icon fab icon="facebook"/></mdb-badge>
      <mdb-badge color="primary" m="r2"><mdb-icon fab icon="instagram"/></mdb-badge>
      <mdb-badge color="success" m="r2"><mdb-icon fab icon="snapchat-ghost"/></mdb-badge>
      <mdb-badge color="info" m="r2"><mdb-icon icon="anchor"/></mdb-badge>
      <mdb-badge color="warning" m="r2"><mdb-icon icon="sun"/></mdb-badge>
      <mdb-badge color="danger" m="r2"><mdb-icon icon="battery-full"/></mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge pill color="pink" m="r2"><mdb-icon icon="wheelchair"/></mdb-badge>
      <mdb-badge pill color="light-blue" m="r2"><mdb-icon icon="heart"/></mdb-badge>
      <mdb-badge pill color="indigo" m="r2"><mdb-icon icon="bullhorn"/></mdb-badge>
      <mdb-badge pill color="purple" m="r2"><mdb-icon icon="comments"/></mdb-badge>
      <mdb-badge pill color="orange" m="r2"><mdb-icon icon="coffee"/></mdb-badge>
      <mdb-badge pill color="green" m="r2"><mdb-icon icon="user"/></mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge color="indigo" m="r2"><mdb-icon fab icon="android" size="2x"/></mdb-badge>
      <mdb-badge color="cyan" m="r2"><mdb-icon icon="cog" size="2x"/></mdb-badge>
      <mdb-badge color="orange" m="r2"><mdb-icon fab icon="btc" size="2x"/></mdb-badge>
      <mdb-badge pill color="teal" m="r2"><mdb-icon icon="heart" size="2x"/></mdb-badge>
      <mdb-badge pill color="green" m="r2"><mdb-icon fab icon="apple" size="2x"/></mdb-badge>
      <mdb-badge pill color="purple" m="r2"><mdb-icon icon="users" size="2x"/></mdb-badge>
    </mdb-row>
  </mdb-container>
</template>

<script>
import { mdbBadge, mdbRow, mdbContainer, mdbIcon } from 'mdbvue';

export default {
  name: 'BadgePage',
  components: {
    mdbBadge,
    mdbContainer,
    mdbRow,
    mdbIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
