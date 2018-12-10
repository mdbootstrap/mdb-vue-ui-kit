<template>
  <container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Pagination</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/pagination/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <pagination>
      <page-nav prev></page-nav>
      <page-item active>1</page-item>
      <page-item>2</page-item>
      <page-item>3</page-item>
      <page-item>4</page-item>
      <page-item>5</page-item>
      <page-nav next></page-nav>
    </pagination>
  </container>
</template>

<script>
import { Pagination, PageNav, PageItem, Container, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'PaginationPage',
  components: {
    Pagination,
    PageNav,
    PageItem,
    Container,
    mdbIcon,
    mdbRow
  }
};
</script>

<style>
</style>
