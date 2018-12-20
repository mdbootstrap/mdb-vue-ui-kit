<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 style="margin: 0" class="grey-text"><strong>Pagination</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/components/pagination/?utm_source=DemoApp&utm_medium=MDBVueFree" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr />

    <mdb-pagination>
      <mdb-page-nav prev></mdb-page-nav>
      <mdb-page-item active>1</mdb-page-item>
      <mdb-page-item>2</mdb-page-item>
      <mdb-page-item>3</mdb-page-item>
      <mdb-page-item>4</mdb-page-item>
      <mdb-page-item>5</mdb-page-item>
      <mdb-page-nav next></mdb-page-nav>
    </mdb-pagination>
  </mdb-container>
</template>

<script>
import { mdbPagination, mdbPageNav, mdbPageItem, mdbContainer, mdbIcon, mdbRow } from 'mdbvue';

export default {
  name: 'PaginationPage',
  components: {
    mdbPagination,
    mdbPageNav,
    mdbPageItem,
    mdbContainer,
    mdbIcon,
    mdbRow
  }
};
</script>

<style>
</style>
