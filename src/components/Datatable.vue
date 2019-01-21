<template>
  <div class="dataTables_wrapper" :style="wrapperStyle">
    <!-- Entries input and search -->
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div v-if="pagination">
          <datatable-select @getValue="updateEntries" :options="options" />
        </div>
      </div>

      <div v-if="searching" class="col-sm-12 col-md-6">
        <datatable-search @getValue="updateSearch" />
      </div>
    </div>
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
            {{column.label}} <i class="fas fa-sort float-right"></i>
          </th>
        </tr>
      </tbl-head>
      <tbl-body>
        <tr v-for="row in pages[activePage]" :key="row.id">
          <td v-for="(value, key) in row" :key="key">
            {{value}}
          </td>
        </tr>
        <tr v-if="!pages.length">
          <td :colspan="columns.length">No matching records found</td>
        </tr>
      </tbl-body>
      <tbl-head tag="tfoot">
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
              {{value}}
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
            <tbl-head tag="tfoot">
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
              v-on:click.native="changePage(activePage-1)"
              :disabled="activePage === 0 ? true : false"
            >
              Previous
            </page-item>
            <page-item
              v-for="(page, index) in pages"
              :key="index"
              v-on:click.native="changePage(index)"
              :active="activePage === index ? true : false"
            >
              {{index+1}}
            </page-item>
            <page-item
              v-on:click.native="changePage(activePage+1)"
              :disabled="activePage === pages.length-1 ? true : false"
            >
              Next
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
import Pagination from './Pagination';
import PageItem from './PageItem';
import mdbInput from './Input';
import DatatableSelect from './DatatableSelect';
import DatatableSearch from './DatatableSearch';

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
    }
  },
  data() {
    return {
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
        responsiveSm: this.repsonsiveSm,
        responsiveMd: this.repsonsiveMd,
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
    mdbInput
  },
  computed: {
    // filter objects by parameters match
    filteredRows() {
      return this.rows.filter(row => {
        for (let key in row) {
          if (Object.prototype.hasOwnProperty.call(row, key)) {
            const stringValue = row[key].toString();
            if (stringValue.toLowerCase().match(this.search.toLowerCase())) return true;
          }
        }
        return false;
      });
    }
  },
  methods: {
    changePage(index) {
      this.activePage = index;
    },
    sort(field, sort) {
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
      this.search = value;
    }
  },
  mounted() {
    // bind data or download form API
    if (typeof this.data === 'string') {
      fetch(this.data)
        .then(res => res.json())
        .then(json => {
          this.columns = json.columns;
          this.rows = json.rows;
          this.$emit('fields', this.columns);
        })
        .catch(err => console.log(err));
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
      this.activePage = 0;

      this.$emit('pages', this.pages);
    }
  }
};

export default Datatable;
export { Datatable as mdbDatatable };
</script>

<style scoped>
.dataTables-scrollBody {
  display: block;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.dataTables-scrollBody td,
.dataTables-scrollBody th {
  white-space: nowrap;
}
</style>

<style>
.dataTables_wrapper select {
  display: inline-flex !important;
  width: auto;
}
.dataTables_wrapper input {
  display: inline-flex !important;
  width: auto;
}
</style>
