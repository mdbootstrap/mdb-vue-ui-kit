<template>
  <container>
    <row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Breadcrumb</strong></h4>
      <a href="https://mdbootstrap.com/vue/components/breadcrumb/" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><fa icon="graduation-cap" class="mr-2"/>Docs</a>
    </row>
    <hr />
    <breadcrumb class="mt-5 mx-3">
      <breadcrumb-item><a href="#">Home</a></breadcrumb-item>
      <breadcrumb-item><a href="#">Library</a></breadcrumb-item>
      <breadcrumb-item active>Data</breadcrumb-item>
    </breadcrumb>
  </container>
</template>

<script>
import { Breadcrumb, BreadcrumbItem, Fa, Row, Container } from 'mdbvue';

export default {
  name: 'BreadcrumbPage',
  components: {
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Row,
    Fa
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
