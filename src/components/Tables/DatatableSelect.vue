<template>
  <div class="dataTables_length bs-select pb-2">
    <label>
      {{title}}
    </label>
    <select v-model="entries" class="custom-select custom-select-sm form-control form-control-sm">
      <option v-for="option in options" :key="option">{{option}}</option>
    </select> 
  </div>
</template>

<script>
const DatatableSelect = {
  name: "DatatableSelect",
  props: {
    options: {
      type: Array
    },
    title: {
      type: String,
      default: 'Show entries'
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