<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Breadcrumb</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/navigation/breadcrumb/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />
    <mdb-breadcrumb class="mt-5 mx-3">
      <mdb-breadcrumb-item><a href="#">Home</a></mdb-breadcrumb-item>
      <mdb-breadcrumb-item><a href="#">Library</a></mdb-breadcrumb-item>
      <mdb-breadcrumb-item active>Data</mdb-breadcrumb-item>
    </mdb-breadcrumb>
  </mdb-container>
</template>

<script>
import { mdbBreadcrumb, mdbBreadcrumbItem, mdbIcon, mdbRow, mdbContainer } from 'mdbvue';

export default {
  name: 'BreadcrumbPage',
  components: {
    mdbBreadcrumb,
    mdbBreadcrumbItem,
    mdbContainer,
    mdbRow,
    mdbIcon
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
