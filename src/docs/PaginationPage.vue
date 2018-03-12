<template>
  <div class="container">
    <pagination>
      <page-nav prev></page-nav>
      <page-item active>1</page-item>
      <page-item>2</page-item>
      <page-item>3</page-item>
      <page-item>4</page-item>
      <page-item>5</page-item>
      <page-nav next></page-nav>
    </pagination>
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import PageNav from '../components/PageNav.vue';
import PageItem from '../components/PageItem.vue';

export default {
  name: 'PaginationPage',
  components: {
    Pagination,
    PageNav,
    PageItem
  }
};
</script>

<style>
</style>
