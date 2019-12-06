<template>
  <div class="dataTables_filter float-right pb-2">
    <input v-model="search" type="search" class="form-control form-control-sm" :placeholder="placeholder" />
  </div>
</template>

<script>
const DatatableSearch = {
  name: 'DatatableSearch',
  data() {
    return {
      search: ''
    };
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search'
    }
  },
  watch: {
    search() {
      this.$emit('getValue', this.search);
    }
  }
};

export default DatatableSearch;
</script>