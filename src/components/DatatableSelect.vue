<template>
  <div class="dataTables_length bs-select">
    <label>
      Show <select v-model="entries" class="custom-select custom-select-sm form-control form-control-sm"><option v-for="option in options" :key="option">{{option}}</option></select> entries
    </label>
  </div>
</template>

<script>
const DatatableSelect = {
  name: "DatatableSelect",
  props: {
    options: {
      type: Array
    }
  },
  data() {
    return {
      entries: this.options[0]
    };
  },
  watch: {
    entries() {
      this.$emit('getValue', this.entries);
    }
  }
};

export default DatatableSelect;
</script>