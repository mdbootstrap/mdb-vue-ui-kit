<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 class="grey-text"><strong>List Group</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <div class="row">
      <div class="col-md-3 mt-5 mx-3">
        <list-group>
          <list-group-item :action="true" :active="true">Main Menu</list-group-item>
          <list-group-item :action="true">Messages <badge :pill="true" color="default-color">12</badge></list-group-item>
          <list-group-item :action="true">Sell Products</list-group-item>
          <list-group-item :action="true">Settings</list-group-item>
          <list-group-item :disabled="true">Can't Touch This</list-group-item>
        </list-group>
      </div>
    </div>
  </container>
</template>

<script>
import { ListGroup, ListGroupItem, Badge, Container, Fa, Row } from 'mdbvue';

export default {
  name: 'ListGroupPage',
  components: {
    ListGroup,
    ListGroupItem,
    Badge,
    Container,
    Fa,
    Row
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
