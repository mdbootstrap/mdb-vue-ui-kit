<template>
  <mdb-container class="mt-5">
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>Datatables</strong></h4>
      <a href="https://mdbootstrap.com/docs/vue/tables/datatables/?utm_source=DemoApp&utm_medium=MDBVueFree" class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <section class="demo-section">
      <h4>Datatable with other JSON data structure</h4>
      <section>
        <mdb-datatable
          :data="data"
          striped
          bordered
          arrows
          :display="3"
        />
      </section>
    </section>
  </mdb-container>
</template>

<script>
  import { mdbDatatable, mdbContainer, mdbRow, mdbIcon } from 'mdbvue';
  export default {
    components: {
      mdbDatatable,
      mdbContainer, 
      mdbRow,
      mdbIcon
    },
    data() {
      return {
        columns: [],
        rows: []
      };
    },
    computed: {
      data() {
        return {
          columns: this.columns,
          rows: this.rows
        };
      },
    },
    methods: {
      filterData(dataArr, keys) {
        let data = dataArr.map(entry => {
          let filteredEntry = {};
          keys.forEach(key => {
            if (key in entry) {
              filteredEntry[key] = entry[key];
            }
          });
          return filteredEntry;
        });
        return data;
      }
    },
    mounted(){
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(json => {
          let keys = ["id", "title", "completed"];
          let entries = this.filterData(json, keys);
          //columns
          this.columns = keys.map(key => {
            return {
              label: key.toUpperCase(),
              field: key,
              sort: 'asc'
            };
          });
          //rows
          entries.map(entry => this.rows.push(entry));
        })
        .catch(err => console.log(err));
    }
  };
</script>

<style>
</style>
