<template>
  <container class="text-center mt-5">
    <row class="mt-5">
      <h4 class="grey-text"><strong>Badges </strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/badges/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr class="mb-5" />
    <row>
      <badge color="default-color">Default</badge>
      <badge color="primary-color">Primary</badge>
      <badge color="success-color">Success</badge>
      <badge color="info-color">Info</badge>
      <badge color="warning-color">Warning</badge>
      <badge color="danger-color">Danger</badge>
    </row>
    <row class="mt-5">
      <badge tag="a" href="#" color="primary-color">Primary</badge>
      <badge tag="a" href="#" color="secondary-color">Secondary</badge>
      <badge tag="a" href="#" color="success-color">Success</badge>
      <badge tag="a" href="#" color="danger-color">Danger</badge>
      <badge tag="a" href="#" color="warning-color">Warning</badge>
      <badge tag="a" href="#" color="info-color">Info</badge>
    </row>
    <row class="mt-5">
      <badge pill color="pink">Pink</badge>
      <badge pill color="light-blue">Light blue</badge>
      <badge pill color="indigo">Indigo</badge>
      <badge pill color="purple">Purple</badge>
      <badge pill color="orange">Orange</badge>
      <badge pill color="green">Green</badge>
    </row>
    <row class="mt-5">
      <badge color="default-color"><fa icon="facebook"/></badge>
      <badge color="primary-color"><fa icon="instagram"/></badge>
      <badge color="success-color"><fa icon="snapchat-ghost"/></badge>
      <badge color="info-color"><fa icon="anchor"/></badge>
      <badge color="warning-color"><fa icon="sun-o"/></badge>
      <badge color="danger-color"><fa icon="battery-3"/></badge>
    </row>
    <row class="mt-5">
      <badge pill color="pink"><fa icon="wheelchair"/></badge>
      <badge pill color="light-blue"><fa icon="heart-o"/></badge>
      <badge pill color="indigo"><fa icon="bullhorn"/></badge>
      <badge pill color="purple"><fa icon="comments-o"/></badge>
      <badge pill color="orange"><fa icon="coffee"/></badge>
      <badge pill color="green"><fa icon="user"/></badge>
    </row>
    <row class="mt-5">
      <badge color="indigo"><fa icon="android" size="2x"/></badge>
      <badge color="cyan"><fa icon="cog" size="2x"/></badge>
      <badge color="orange"><fa icon="btc" size="2x"/></badge>
      <badge pill color="teal"><fa icon="heart" size="2x"/></badge>
      <badge pill color="green"><fa icon="apple" size="2x"/></badge>
      <badge pill color="purple"><fa icon="users" size="2x"/></badge>
    </row>
  </container>
</template>

<script>
import { Badge, Row, Container, Fa } from 'mdbvue';

export default {
  name: 'BadgePage',
  components: {
    Badge,
    Container,
    Row,
    Fa
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h4 {
    margin: 0;
  }

</style>
