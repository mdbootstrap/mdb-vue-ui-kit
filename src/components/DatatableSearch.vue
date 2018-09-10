<template>
  <div class="dataTables_filter">
    <label>
      Search <input v-model="search" type="search" class="form-control form-control-sm" placeholder="Search" />
    </label>
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
  watch: {
    search() {
      this.$emit('getValue', this.search);
    }
  }
};

export default DatatableSearch;
</script>