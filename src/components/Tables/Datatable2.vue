<template>
  <div class="mdb-datatable" :style="wrapperStyle">
    <!-- Main table -->
    <mdb-tbl
      v-bind="tableProps"
      datatable
      :key="componentKey"
      class="scrollbar-grey thin"
      :class="{ 'mdb-scroll-y': scrollY }"
      :style="`max-height: ${scrollY ? maxHeight ? maxHeight : '280px' : null};`"
    >
      <mdb-tbl-head
        :color="headerColor"
        :textWhite="headerWhite"
        class="table-header"
      >
        <tr>
          <th 
            v-if="multiselectable" 
            class="text-center"
            style="padding-bottom: 0.4rem"
            :style="[fixedHeader && {position: 'sticky', top: 0, boxShadow: '0 1px #dee2e6'}, fixedHeader && headerBg && {background: headerBg}]"
          >
            <div class="custom-control custom-checkbox mdb-select-all">
              <input type="checkbox" class="custom-control-input" :id="`mdb-datatable-select-all-${randomKey}`" @keydown.enter="toggleSelectAll" @click="toggleSelectAll" tabindex="0" :checked="selected === 'all' ? true : false">
              <label class="custom-control-label" :for="`mdb-datatable-select-all-${randomKey}`"></label>
            </div>
          </th>
          <th v-if="selectable" :style="[fixedHeader && {position: 'sticky', top: 0, boxShadow: '0 1px #dee2e6'}, fixedHeader && headerBg && {background: headerBg}]"></th>
          <template
            v-for="(column, key) in columns"
          >
            <th
              v-if="column.field !== 'mdbID'"
              :key="column.field"
              v-on:click="column.sort && sorting && sort(column.field, column.sort)"
              v-on:mouseleave="lastFieldSorted = null"
              :class="column.sort && sorting ? 'sorting' : ''"
              :style="[(sorting && column.sort) && {cursor: 'pointer'}, fixedHeader && {position: 'sticky', top: 0, boxShadow: '0 1px #dee2e6'}, fixedHeader && headerBg && {background: headerBg}, fixedCols && fixedCols >= key && {position: 'sticky', left: fixedColsPosition[key - 1] - 3 + 'px', zIndex: 1}, fixedCols && fixedCols >= key && {background: fixedColsBg}]"
            >
              <i
                v-if="sorting && column.sort && recentSort && recentSort.field === column.field && recentSort.sort === 'asc'"
                class="mdb-datatable-header-icon fas fa-arrow-up"
              ></i>
              <i
                v-if="sorting && column.sort && recentSort && recentSort.field === column.field && recentSort.sort === 'desc'"
                class="mdb-datatable-header-icon fas fa-arrow-down"
              ></i>
              <i
                v-if="sorting && !recentSort || sorting && recentSort && recentSort.field !== column.field && lastFieldSorted !== column.field"
                class="mdb-datatable-header-hover-icon fas fa-arrow-up"
              ></i>
              {{ column.label }}
            </th>
          </template>
        </tr>
      </mdb-tbl-head>

      <mdb-tbl-body>
        <tr
          v-for="(row, i) in pages[activePage]"
          :key="i"
          @mouseenter="hovered = rowsDisplay.indexOf(row)"
          @mouseleave="hovered = -1"
          @click="selectRow(row)"
          :class="
            `${(selectable || multiselectable) && 'selectable-row'} ${
              (selectable || multiselectable) && (rowsDisplay.indexOf(row) === selected || selected === 'all' || Array.isArray(selected) && selected.includes(rowsDisplay.indexOf(row))) ? selectColor : ''
            }`
          "
          :style="(selectable || multiselectable) && rowsDisplay.indexOf(row) === hovered && {backgroundColor: hoverColor}"
        >
          <td v-if="selectable || multiselectable" class="text-center" style="padding-top: 1rem; padding-bottom: 0;">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" :id="`mdb-datatable-checkbox-${randomKey}-${i}`" @keydown.enter="selectRow(row)" @click="selectRow(row)" tabindex="0" :checked="(rowsDisplay.indexOf(row) === selected || selected === 'all' || Array.isArray(selected) && selected.includes(rowsDisplay.indexOf(row))) ? true : false">
              <label class="custom-control-label" :for="`mdb-datatable-checkbox-${randomKey}-${i}`"></label>
            </div>
          </td>
          <template v-for="(value, key) in row">
            <template v-if="key !== 0">
              <td v-html="value" :contenteditable="editable" :key="key" @blur="handleContentChange($event, i, key)" :class="fixedCols && fixedCols >= key && 'fixed-td'" :style="[fixedCols && fixedCols >= key && {position: 'sticky', left: fixedColsPosition[key - 1] - 3 + 'px'}, fixedCols && fixedCols >= key && {background: fixedColsBg}, columns[key].width && {width: columns[key].width + 'px', maxWidth: columns[key].width + 'px'}]"></td>
            </template>
          </template>
        </tr>
        <tr v-if="!pages.length">
          <td :colspan="columns.length">{{ noFoundMessage }}</td>
        </tr>
      </mdb-tbl-body>

      <mdb-tbl-head tag="tfoot" v-if="footer" class="table-footer">
        <tr v-html="footer"></tr>
      </mdb-tbl-head>
    </mdb-tbl>

    <!-- Labels, filter and pagination -->
    <div class="mdb-datatable-footer">

      <div class="d-flex">
        <datatable-select
          :title="entriesTitle"
          v-if="pagination"
          @getValue="updateEntries"
          :options="options"
          class="d-inline-block"
        />

        <div class="dataTables_info pt-2 mx-sm-4 d-inline-block" role="status" aria-live="polite">
          {{ activePage > 0 ? activePage * entries : activePage + 1 }}-{{
            pages.length - 1 > activePage
              ? pages[activePage].length * (activePage + 1)
              : filteredRows.length
          }}
          {{ showingText }}
          {{ filteredRows.length }}
        </div>

        <div v-if="pagination" class="dataTables_paginate d-inline-block">
          <mdb-pagination id="pagination" :color="paginationColor">
            <mdb-page-item
              v-if="pages.length > display && fullPagination"
              v-on:click.native="changePage(0)"
              :disabled="activePage === 0 ? true : false"
            >
              <mdb-icon v-if="arrows" icon="angle-double-left" />
              <p v-else class="pagination">{{ start }}</p>
            </mdb-page-item>
            <mdb-page-item
              v-on:click.native="changePage(activePage - 1)"
              :disabled="activePage === 0 ? true : false"
            >
              <mdb-icon v-if="arrows" icon="chevron-left" />
              <p v-else class="pagination">{{ previous }}</p>
            </mdb-page-item>
            <mdb-page-item
              v-on:click.native="changePage(activePage + 1)"
              :disabled="activePage === pages.length - 1 ? true : false"
            >
              <mdb-icon v-if="arrows" icon="chevron-right" />
              <p v-else class="pagination">{{ next }}</p>
            </mdb-page-item>
            <mdb-page-item
              v-if="pages.length > display && fullPagination"
              v-on:click.native="changePage(pages.length - 1)"
              :disabled="activePage === pages.length - 1 ? true : false"
            >
              <mdb-icon v-if="arrows" icon="angle-double-right" />
              <p v-else class="pagination">{{ end }}</p>
            </mdb-page-item>
          </mdb-pagination>
        </div>
      </div>

    </div>
    <!--/ Labels, filter and pagination -->
  </div>
  <!--/ Main table -->
</template>

<script>
import DatatableSelect from "./Datatable2Select";
import mdbIcon from "../Content/Fa";
import { mdbDatatable2 } from "../../mixins/mdbDatatable2";

const Datatable = {
  name: "Datatable2Pro",
  props: {
    filter: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      options: [
        { value: 10, text: 10, selected: true },
        { value: 25, text: 25 },
        { value: 50, text: 50 },
        { value: 100, text: 100 }
      ],
      select: "",
      randomKey: Math.round(Math.random() * 10000)
    };
  },
  components: {
    DatatableSelect,
    mdbIcon
  },
  computed: {
    // filter objects by parameters match
    filteredRows() {
      let rows = this.rowsDisplay;
      if (this.filter) {
        rows = this.selectedRows;
      }

      if (this.searchField === 'all') {
        return rows.filter(row => {
          return (
            row.filter(value => {
              return value
                .toString()
                .toLowerCase()
                .match(this.search.toLowerCase())
            }).length > 0
          );
        });

      } else {
        return rows.filter(row => {
          return row[this.searchField]
            .toString()
            .toLowerCase()
            .match(this.search.toLowerCase())
        })
      }
    },
    selectedRows() {
      return this.rowsDisplay.filter(row => {
        return (
          row.filter(value => {
            if (this.select)
              return (
                value.toString().toLowerCase() === this.select.toLowerCase()
              );
            return value;
          }).length > 0
        );
      });
    }
  },
  filters: {
    toCapitalize(val) {
      return val.replace(/^\w/, c => c.toUpperCase());
    }
  },
  methods: {
    updateSelect(value) {
      this.select = value;
    },
    handleContentChange(e, i, key) {
      this.rows[i][Object.keys(this.rows[i])[key - 1]] = e.target.innerText;
      this.$emit('update', this.value);
    }
  },
  mixins: [mdbDatatable2]
};

export default Datatable;
export { Datatable as mdbDatatable };
</script>

<style scoped lang="scss">
.mdb-datatable {
  thead {
    th {
      position: relative;
      border-bottom: 1px solid #dee2e6;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 250px;
      padding-left: 1rem;
      font-weight: 500;
      .mdb-datatable-header-icon, .mdb-datatable-header-hover-icon {
        position: absolute;
        left: 0.1rem;
        top: 1.25rem;
      }
      .mdb-datatable-header-hover-icon {
        color: #7e7e7e;
        opacity: 0;
        transition: opacity 0.3s;
      }
      &.sorting {
        cursor: pointer;
      }
      &.sorting:hover .mdb-datatable-header-hover-icon {
        opacity: 1;
      }
      .mdb-select-all {
        padding-bottom: 0.75rem;
      }
    }
  }

  tbody {
    tr:focus, td:focus {
      outline: none;
    }
    td {
      padding-left: 1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 250px;
    }
    th {
      font-weight: 500;
    }
  }

  .form-check {
    padding-left: 0;
    &:focus {
      outline: none;
      &:before {
        content: '';
        position: absolute;
        width: 36px;
        height: 36px;
        left: 9%;
        top: -22%;
        border-radius: 50%;
        background: #e0e0e0;
      }
    }
  }

  .scrollbar-grey {
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #f5f5f5;
      border-radius: 10px;
    }
    &::-webkit-scrollbar {
      width: 12px;
      background-color: #f5f5f5;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #9e9e9e;
    }
    &.thin::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
  }
}

.mdb-scroll-y {
  overflow-y: scroll;
  border-top: 1px solid rgba(222, 226, 230, 1);
  border-bottom: 1px solid rgba(222, 226, 230, 1);
  margin-bottom: 1rem;
}

.mdb-scroll-y .table-bordered {
  border: none;
}
.mdb-scroll-y table {
  text-align: left;
  position: relative;
  border: none;
}
.mdb-scroll-y .table-header {
  border: none;
}

.mdb-scroll-y .table-header th {
  position: sticky;
  background-color: white;
  top: -2px;
  border-bottom: none;
  -webkit-box-shadow: 0px 1px 0px 0px rgba(222, 226, 230, 1);
  -moz-box-shadow: 0px 1px 0px 0px rgba(222, 226, 230, 1);
  box-shadow: 0px 1px 0px 0px rgba(222, 226, 230, 1);
}

.mdb-scroll-y .table-footer th {
  position: sticky;
  background-color: white;
  bottom: 0;
  border-top: none;
  -webkit-box-shadow: 0px -1px 0px 0px rgba(222, 226, 230, 1);
  -moz-box-shadow: 0px -1px 0px 0px rgba(222, 226, 230, 1);
  box-shadow: 0px -1px 0px 0px rgba(222, 226, 230, 1);
}

.refresh-button {
  width: 4rem;
  height: 2rem;
}

.pagination {
  margin-bottom: 0px;
}

.selectable-row {
  cursor: pointer;
  transition: all 0.4s ease-out;
}
</style>

<style lang="scss">
.mdb-datatable {
  table {
    margin-bottom: 0;
  }
  
  tfoot th, 
  tfoot td {
    padding-left: 1rem;
  }

  tfoot th {
    font-weight: 500;
  }

  .mdb-datatable-footer {
    font-size: 0.9rem;
    padding: 0.8rem 0 0.5rem 0;
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid #dee2e6;
  }
  .form-check-input {
    margin-top: 0;
  }
}
</style>