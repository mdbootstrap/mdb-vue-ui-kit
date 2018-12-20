<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="grey-text"><strong>List Group</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/list-group/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <div class="row">
      <div class="col-md-3 mt-5 mx-3">
        <mdb-list-group>
          <mdb-list-group-item :action="true" :active="true">Main Menu</mdb-list-group-item>
          <mdb-list-group-item :action="true">Messages <mdb-badge :pill="true" color="default-color">12</mdb-badge></mdb-list-group-item>
          <mdb-list-group-item :action="true">Sell Products</mdb-list-group-item>
          <mdb-list-group-item :action="true">Settings</mdb-list-group-item>
          <mdb-list-group-item :disabled="true">Can't Touch This</mdb-list-group-item>
        </mdb-list-group>
      </div>
    </div>
  </mdb-container>
</template>

<script>
import { mdbListGroup, mdbListGroupItem, mdbBadge, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'ListGroupPage',
  components: {
    mdbListGroup,
    mdbListGroupItem,
    mdbBadge,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
