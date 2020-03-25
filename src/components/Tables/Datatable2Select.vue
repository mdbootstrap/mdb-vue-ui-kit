<template>
  <div class="dataTables_length bs-select pb-2">
    <label>
      {{title}}:
    </label>
    <select class="custom-select custom-select-sm form-control form-control-sm" @change="emitValue">
      <option v-for="option in entries" :key="option" :selected="option === 10">{{option}}</option>
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
      default: 'Rows per page'
    }
  },
  data() {
    return {
      entries: this.options.map(option => {
        return option.value
      })
    };
  },
  methods: {
    emitValue(e) {
      this.$emit('getValue', e.target.value);
    }
  }
};

export default DatatableSelect;
</script>

<style lang="scss" scoped>
select {
  width: 4rem;
  margin-left: 0.3rem;
  margin-right: 0.2rem;
}
label {
  margin-top: 0.4rem;
}
</style>