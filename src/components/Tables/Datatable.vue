<template>
  <div class="dataTables_wrapper" :style="wrapperStyle">
    <!-- Entries input and search -->
    <mdb-row>
      <mdb-col sm="6" md="8">
        <mdb-row>
          <mdb-col sm="12" md="4">
            <datatable-select v-if="pagination" @getValue="updateEntries" :options="options"/>
          </mdb-col>
          <mdb-col>
            <mdb-btn @click="updateData" v-if="refresh" size="sm" class="mt-0" outline="primary" >
              <mdb-icon  icon="sync" />
            </mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col sm="6" md="4" v-if="searching">
        <datatable-search @getValue="updateSearch" />
      </mdb-col>
    </mdb-row>
    <!-- Entries input and search -->

    <!-- Main table -->
    <tbl v-if="!scrollY" v-bind="tableProps" sm datatable>
      <tbl-head :color="headerColor" :textWhite="headerWhite">
        <tr>
          <th
            v-for="column in columns"
            :key="column.field"
            class="th-sm sorting"
            v-on:click="sort(column.field, column.sort)"
          >
            {{column.label}} <i v-if="sorting" class="fas fa-sort float-right"></i>
          </th>
        </tr>
      </tbl-head>
      <tbl-body>
        <tr v-for="row in pages[activePage]" :key="row.id">
          <td v-for="(value, key) in row" :key="key">
            <div v-html="value"></div>
          </td>
        </tr>
        <tr v-if="!pages.length">
          <td :colspan="columns.length">No matching records found</td>
        </tr>
      </tbl-body>
      <tbl-head v-if="tfoot" tag="tfoot">
        <tr>
          <th
            v-for="column in columns"
            :key="column.field+'_foot'"
            class="th-sm sorting"
          >
            {{column.label}}
          </th>
        </tr>
      </tbl-head>
    </tbl>
    <!-- Main table -->

    <!-- ScrollY table -->
    <div v-if="scrollY" class="dataTables_scroll">
      <div v-if="scrollY" class="dataTables_scrollHead" style="padding-right: 15px">
        <div class="dataTables_scrollHeadInner">
          <tbl v-bind="tableProps" sm datatable>
            <tbl-head :color="headerColor" :textWhite="headerWhite">
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.field"
                  class="th-sm sorting"
                  v-on:click="sort(column.field, column.sort)"
                >
                  {{column.label}} <i class="fas fa-sort float-right"></i>
                </th>
              </tr>
            </tbl-head>
          </tbl>
        </div>
      </div>
      <tbl v-bind="tableProps" sm datatable>
        <tbl-body>
          <tr v-for="row in pages[activePage]" :key="row.id">
            <td v-for="(value, key) in row" :key="key">
              <div v-html="value"></div>
            </td>
          </tr>
          <tr v-if="!pages.length">
            <td :colspan="columns.length">No matching records found</td>
          </tr>
        </tbl-body>
      </tbl>
      <div class="dataTables_scrollFoot" style="padding-right: 15px">
        <div class="dataTables_scrollFootInner">
          <tbl v-bind="tableProps" sm datatable>
            <tbl-head v-if="tfoot" tag="tfoot">
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.field+'_foot'"
                  class="th-sm sorting"
                >
                  {{column.label}}
                </th>
              </tr>
            </tbl-head>
          </tbl>
        </div>
      </div>
    </div>
    <!-- ScrollY table -->

    <!-- Labels and pagination -->
    <div v-if="pagination" class="row">
      <div class="col-sm-12 col-md-5">
        <div class="dataTables_info" role="status" aria-live="polite">
          Showing {{activePage > 0 ? activePage*entries : activePage+1}} to {{pages.length-1 > activePage ? pages[activePage].length*(activePage+1) : filteredRows.length}} of {{filteredRows.length}} entries
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div class="dataTables_paginate float-right">
          <pagination id="pagination">
            <page-item
              v-if="pages.length > display"
              v-on:click.native="changePage(0)"
              :disabled="activePage === 0 ? true : false"
            >
              <mdb-icon v-if="arrows"  icon="angle-double-left" />
              <p v-else class="pagination">{{start}}</p>
            </page-item>
            <page-item
              v-on:click.native="changePage(activePage-1)"
              :disabled="activePage === 0 ? true : false"
            >
              <mdb-icon v-if="arrows"  icon="angle-left" />
              <p v-else class="pagination">{{previous}}</p>
            </page-item>
            <page-item
              v-for="(page, index) in visiblePages"
              :key="index"
              v-on:click.native="changePage(pages.indexOf(visiblePages[index]))"
              :active="activePage === pages.indexOf(visiblePages[index]) ? true : false"
            >
              {{pages.indexOf(visiblePages[index])+1}}
            </page-item>
            <page-item
              v-on:click.native="changePage(activePage+1)"
              :disabled="activePage === pages.length-1 ? true : false"
            >
              <mdb-icon v-if="arrows"  icon="angle-right" />
              <p v-else class="pagination">{{next}}</p>
            </page-item>
            <page-item
              v-if="pages.length > display"
              v-on:click.native="changePage(pages.length-1)"
              :disabled="activePage === pages.length-1 ? true : false"
            >
              <mdb-icon v-if="arrows"  icon="angle-double-right" />
              <p v-else class="pagination">{{end}}</p>
            </page-item>
          </pagination>
        </div>
      </div>
    </div>
    <!-- Labels and pagination -->

  </div>
</template>

<script>
import Tbl from './Table';
import TblHead from './TableHead';
import TblBody from './TableBody';
import Pagination from '../Components/Pagination';
import PageItem from '../Components/PageItem';
import mdbInput from '../Forms/Input';
import DatatableSelect from './DatatableSelect';
import DatatableSearch from './DatatableSearch';
import mdbIcon from '../Content/Fa';
import mdbRow from '../Layout/Row';
import mdbCol from '../Layout/Col';
import mdbBtn from '../Components/Button';

const Datatable = {
  name: 'Datatable',
  props: {
    data: {
      type: [Object, String],
      default: () => ({
        columns: [],
        rows: []
      })
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    bordered: {
      type: Boolean,
      default: false
    },
    borderless: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    headerColor: {
      type: String
    },
    headerWhite: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
    },
    materialInputs: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String
    },
    maxHeight: {
      type: String
    },
    order: {
      type: Array
    },
    pagination: {
      type: Boolean,
      default: true
    },
    responsive: {
      type: Boolean,
      default: false
    },
    responsiveSm: {
      type: Boolean,
      default: false
    },
    responsiveMd: {
      type: Boolean,
      default: false
    },
    responsiveLg: {
      type: Boolean,
      default: false
    },
    responsiveXl: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      defautl: false
    },
    searching: {
      type: Boolean,
      default: true
    },
    sorting: {
      type: Boolean,
      default: true
    },
    striped: {
      type: Boolean,
      default: false
    },
    start: {
      type: String,
      default: 'Start'
    },
    end: {
      type: String,
      default: 'End'
    },
    next: {
      type: String,
      default: 'Next'
    },
    previous: {
      type: String,
      default: 'Previos'
    },
    arrows: {
      type: Boolean,
      default: false
    },
    display: {
      type: Number,
      default: 5
    }, 
    defaultRow: {
      type: String,
      default: '-'
    },
    defaultCol: {
      type: String,
      default: 'undefined'
    },
    tfoot: {
      type: Boolean,
      default: true
    },
    reactive: {
      type: Boolean,
      default: false
    },
    refresh: {
      type: Boolean,
      default: false
    },
    time: {
      type: Number,
      default: 5000
    }
  },
  data() {
    return {
      updatedKey: null,
      reactiveFlag: false,
      recentSort: null,
      interval: null,
      rows: this.data.rows || [],
      columns: this.data.columns || [],
      options: [10, 25, 50, 100],
      entries: 10,
      pages: [],
      activePage: 0,
      search: '',
      tableProps: {
        autoWidth: this.autoWidth,
        bordered: this.bordered,
        borderless: this.borderless,
        dark: this.dark,
        fixed: this.fixed,
        hover: this.hover,
        responsive: this.responsive,
        responsiveSm: this.responsiveSm,
        responsiveMd: this.responsiveMd,
        responsiveLg: this.responsiveLg,
        responsiveXl: this.responsiveXl,
        striped: this.striped,
        dtScrollY: this.scrollY,
        maxHeight: this.maxHeight
      },
      wrapperStyle: {
        maxWidth: this.maxWidth ? this.maxWidth : '100%',
        margin: '0 auto'
      }
    };
  },
  components: {
    DatatableSearch,
    DatatableSelect,
    Tbl,
    TblHead,
    TblBody,
    Pagination,
    PageItem,
    mdbInput,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  computed: {
    rowsDisplay(){
      return this.formatRows();
    },
    // filter objects by parameters match
    filteredRows() {
      return this.rowsDisplay.filter(row => {
        return row.filter(value => value
          .toString()
          .toLowerCase()
          .match(this.search.toLowerCase()))
          .length > 0;
      });
    },
    visiblePages() {
      let start = this.activePage - Math.floor(this.display/2) > 0 ? this.activePage - Math.floor(this.display/2) : 0;
      let end = start + this.display < this.pages.length ? start + this.display : this.pages.length;
      if (end - start < this.display && end - this.display >= 0) {
        start = end - this.display;
      };
      return this.pages.slice(start, end);
    },
    componentKey(){
      return this.updatedKey;
    }
  },
  methods: {
    changePage(index) {
      this.activePage = index;
    },
    sort(field, sort) {
      this.recentSort = {field, sort};
      if (this.sorting) {
        sort === 'asc' ?
          this.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1)) :
          this.rows.sort((a, b) => (a[field] > b[field] ? -1 : 1));
        this.columns[this.columns.findIndex(column => column.field === field)].sort = sort === 'asc' ? 'desc' : 'asc';
      }
    },
    updateEntries(value) {
      this.entries = value;
    },
    updateSearch(value) {
      this.search = this.escapeRegExp(value);
      this.activePage = 0;
    },
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    },
    setDefaultColumns(){
      this.columns.forEach((col, i) => {
        if (!col){
          this.columns[i] = {
            label: this.defaultCol,
            field: this.defaultCol.concat(i),
            sort: 'asc'
          };
        }
      });
    },
    formatRows(){
      this.setDefaultColumns();
      let arrRows = [];
      let headers = this.columns.map(col => col.field);
      this.rows.map(row => {
        let newRow = [];
        headers.forEach(header => {
          let content = row[header] || this.defaultRow;
          newRow.push(content);
        });
        arrRows.push(newRow);
      });
      return arrRows;
    },
    fetchData(){
      fetch(this.data)
        .then(res => res.json())
        .then(json => {
          this.columns = json.columns;
          this.rows = json.rows;
          this.$emit('fields', this.columns);
        })
        .then(data => {
          if (this.recentSort){
            this.sort(this.recentSort.field, this.recentSort.sort);
          }
        })
        .catch(err => console.log(err));
    },
    updateData(){
      this.fetchData();
      this.reactiveFlag = true;
      this.updatedKey = Math.floor(Math.random()*100000000);
    }
  },
  mounted() {
    // bind data or download form API
    if (typeof this.data === 'string') {
      this.fetchData();
    }
    //reactivness in data table
    if (this.reactive){
      this.interval = setInterval(this.updateData, this.time);
    }
    // findout rows amount, and slice it into array (split into pages)
    const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
    this.pages = [];
    if (this.pagination) {
      for (let i=1; i<=pagesAmount; i++) {
        const pageEndIndex = i*this.entries;
        this.pages.push(this.filteredRows.slice(pageEndIndex-this.entries, pageEndIndex));
      }
    }
    else {
      this.pages.push(this.filteredRows);
    }
    this.activePage = 0;

    // initial sorting
    if (this.order) {
      this.sort(this.columns[this.order[0]].field, this.order[1]);
    }

    this.$emit('pages', this.pages);
    this.$emit('fields', this.columns);
  },
  watch: {
    data(newVal) {
      this.columns = newVal.columns;
    },
    rows(){
      this.filterArray();
    },
    entries() {
      // do the split every entry change (changing entries amount)
      const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
      this.pages = [];
      for (let i=1; i<=pagesAmount; i++) {
        const pageEndIndex = i*this.entries;
        this.pages.push(this.filteredRows.slice(pageEndIndex-this.entries, pageEndIndex));
      }
      this.activePage = this.activePage < this.pages.length ? this.activePage : this.pages.length-1;

      this.$emit('pages', this.pages);
    },
    filteredRows() {
      // do the split on every change in rows (searching)
      const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
      this.pages = [];
      if (this.pagination) {
        for (let i=1; i<=pagesAmount; i++) {
          const pageEndIndex = i*this.entries;
          this.pages.push(this.filteredRows.slice(pageEndIndex-this.entries, pageEndIndex));
        }
      }
      else {
        this.pages.push(this.filteredRows);
      }
      if (this.reactiveFlag === false){
        this.activePage = 0;
      }

      this.$emit('pages', this.pages);
    }
  }
};

export default Datatable;
export { Datatable as mdbDatatable };
</script>

<style scoped>

</style>

<style>
.pagination {
  margin-bottom: 0px;
}
</style>
