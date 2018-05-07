<template>
  <container class="mt-5">
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
import { Pagination, PageNav, PageItem, Container } from 'mdbvue';

export default {
  name: 'PaginationPage',
  components: {
    Pagination,
    PageNav,
    PageItem,
    Container
  }
};
</script>

<style>
</style>
