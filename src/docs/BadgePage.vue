<template>
  <mdb-container class="text-center mt-5">
    <mdb-row class="mt-5">
      <h4 class="grey-text"><strong>Badges </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/badges/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <mdb-row>
      <mdb-badge color="default-color">Default</mdb-badge>
      <mdb-badge color="primary-color">Primary</mdb-badge>
      <mdb-badge color="success-color">Success</mdb-badge>
      <mdb-badge color="info-color">Info</mdb-badge>
      <mdb-badge color="warning-color">Warning</mdb-badge>
      <mdb-badge color="danger-color">Danger</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge tag="a" href="#" color="primary-color">Primary</mdb-badge>
      <mdb-badge tag="a" href="#" color="secondary-color">Secondary</mdb-badge>
      <mdb-badge tag="a" href="#" color="success-color">Success</mdb-badge>
      <mdb-badge tag="a" href="#" color="danger-color">Danger</mdb-badge>
      <mdb-badge tag="a" href="#" color="warning-color">Warning</mdb-badge>
      <mdb-badge tag="a" href="#" color="info-color">Info</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge pill color="pink">Pink</mdb-badge>
      <mdb-badge pill color="light-blue">Light blue</mdb-badge>
      <mdb-badge pill color="indigo">Indigo</mdb-badge>
      <mdb-badge pill color="purple">Purple</mdb-badge>
      <mdb-badge pill color="orange">Orange</mdb-badge>
      <mdb-badge pill color="green">Green</mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge color="default-color"><mdb-icon icon="facebook"/></mdb-badge>
      <mdb-badge color="primary-color"><mdb-icon icon="instagram"/></mdb-badge>
      <mdb-badge color="success-color"><mdb-icon icon="snapchat-ghost"/></mdb-badge>
      <mdb-badge color="info-color"><mdb-icon icon="anchor"/></mdb-badge>
      <mdb-badge color="warning-color"><mdb-icon icon="sun-o"/></mdb-badge>
      <mdb-badge color="danger-color"><mdb-icon icon="battery-3"/></mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge pill color="pink"><mdb-icon icon="wheelchair"/></mdb-badge>
      <mdb-badge pill color="light-blue"><mdb-icon icon="heart-o"/></mdb-badge>
      <mdb-badge pill color="indigo"><mdb-icon icon="bullhorn"/></mdb-badge>
      <mdb-badge pill color="purple"><mdb-icon icon="comments-o"/></mdb-badge>
      <mdb-badge pill color="orange"><mdb-icon icon="coffee"/></mdb-badge>
      <mdb-badge pill color="green"><mdb-icon icon="user"/></mdb-badge>
    </mdb-row>
    <mdb-row class="mt-5">
      <mdb-badge color="indigo"><mdb-icon icon="android" size="2x"/></mdb-badge>
      <mdb-badge color="cyan"><mdb-icon icon="cog" size="2x"/></mdb-badge>
      <mdb-badge color="orange"><mdb-icon icon="btc" size="2x"/></mdb-badge>
      <mdb-badge pill color="teal"><mdb-icon icon="heart" size="2x"/></mdb-badge>
      <mdb-badge pill color="green"><mdb-icon icon="apple" size="2x"/></mdb-badge>
      <mdb-badge pill color="purple"><mdb-icon icon="users" size="2x"/></mdb-badge>
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
