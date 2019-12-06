<template>
  <div class="dataTables_wrapper" :style="wrapperStyle">
    <!-- Entries input and search -->
    <mdb-row>
      <mdb-col sm="6" md="8">
        <mdb-row>
          <mdb-col sm="12" md="4">
            <datatable-select
              :title="entriesTitle"
              v-if="pagination"
              @getValue="updateEntries"
              :options="options"
            />
          </mdb-col>
          <mdb-col class="pt-2">
            <mdb-btn
              @click="updateData"
              v-if="refresh"
              size="sm"
              class="mt-4"
              :outline="btnColor"
            >
              <mdb-icon icon="sync" />
            </mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-col>
      <mdb-col sm="6" md="4" v-if="searching">
        <datatable-search
          class="mt-4 pt-2"
          :placeholder="searchPlaceholder"
          @getValue="updateSearch"
        />
      </mdb-col>
    </mdb-row>
    <!-- Entries input and search -->

    <!-- Main table -->
    <mdb-tbl v-if="!scrollY" v-bind="tableProps" sm datatable>
      <mdb-tbl-head :color="headerColor" :textWhite="headerWhite">
        <tr>
          <th
            v-for="column in columns"
            :key="column.field"
            class="th-sm sorting"
            v-on:click="sort(column.field, column.sort)"
          >
            {{ column.label }}
            <i v-if="sorting" class="fas fa-sort float-right"></i>
          </th>
        </tr>
      </mdb-tbl-head>

      <mdb-tbl-body>
        <tr
          v-for="(row, i) in pages[activePage]"
          :key="i"
          :tabindex="focus && '1'"
          @focus="selectRow(row)"
          :class="focus && 'selectable-row'"
        >
          <td v-for="(value, key) in row" :key="key">
            <div v-html="value"></div>
          </td>
        </tr>
        <tr v-if="!pages.length">
          <td :colspan="columns.length">{{ noFoundMessage }}</td>
        </tr>
      </mdb-tbl-body>

      <mdb-tbl-head v-if="tfoot" tag="tfoot">
        <tr>
          <th
            v-for="column in columns"
            :key="column.field + '_foot'"
            class="th-sm sorting"
          >
            {{ column.label }}
          </th>
        </tr>
      </mdb-tbl-head>
    </mdb-tbl>
    <!-- Main table -->

    <!-- ScrollY table -->
    <div v-if="scrollY" class="dataTables_scroll" :key="componentKey">
      <div
        class="dataTables_scrollHead"
        style="padding-right: 15px"
      >
        <div class="dataTables_scrollHeadInner">
          <mdb-tbl v-bind="tableProps" sm datatable>
            <mdb-tbl-head :color="headerColor" :textWhite="headerWhite">
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.field"
                  class="th-sm sorting"
                  v-on:click="sort(column.field, column.sort)"
                >
                  {{ column.label }} <i class="fas fa-sort float-right"></i>
                </th>
              </tr>
            </mdb-tbl-head>
          </mdb-tbl>
        </div>
      </div>
      <mdb-tbl v-bind="tableProps" sm datatable>
        <mdb-tbl-body>
          <tr
            v-for="(row, i) in pages[activePage]"
            :key="i"
            :tabindex="focus && '1'"
            @focus="selectRow(i)"
            :class="focus && 'selectable-row'"
          >
            <td v-for="(value, key) in row" :key="key">
              <div v-html="value"></div>
            </td>
          </tr>
          <tr v-if="!pages.length">
            <td :colspan="columns.length">{{ noFoundMessage }}</td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
      <div class="dataTables_scrollFoot" style="padding-right: 15px">
        <div class="dataTables_scrollFootInner">
          <mdb-tbl v-bind="tableProps" sm datatable>
            <mdb-tbl-head v-if="tfoot" tag="tfoot">
              <tr>
                <th
                  v-for="column in columns"
                  :key="column.field + '_foot'"
                  class="th-sm sorting"
                >
                  {{ column.label }}
                </th>
              </tr>
            </mdb-tbl-head>
          </mdb-tbl>
        </div>
      </div>
    </div>
    <!-- ScrollY table -->

    <!-- Labels and pagination -->
    <div v-if="pagination" class="row">
      <div class="col-sm-12 col-md-5">
        <div class="dataTables_info" role="status" aria-live="polite">
          {{ showingText }}:
          {{ activePage > 0 ? activePage * entries : activePage + 1 }} -
          {{
            pages.length - 1 > activePage
              ? pages[activePage].length * (activePage + 1)
              : filteredRows.length
          }}
          ({{ filteredRows.length }})
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div class="dataTables_paginate float-right">
          <mdb-pagination id="pagination" :color="paginationColor">
            <mdb-page-item
              v-if="pages.length > display"
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
              <mdb-icon v-if="arrows" icon="angle-left" />
              <p v-else class="pagination">{{ previous }}</p>
            </mdb-page-item>
            <mdb-page-item
              v-for="(page, index) in visiblePages"
              :key="index"
              v-on:click.native="changePage(pages.indexOf(visiblePages[index]))"
              :active="
                activePage === pages.indexOf(visiblePages[index]) ? true : false
              "
            >
              {{ pages.indexOf(visiblePages[index]) + 1 }}
            </mdb-page-item>
            <mdb-page-item
              v-on:click.native="changePage(activePage + 1)"
              :disabled="activePage === pages.length - 1 ? true : false"
            >
              <mdb-icon v-if="arrows" icon="angle-right" />
              <p v-else class="pagination">{{ next }}</p>
            </mdb-page-item>
            <mdb-page-item
              v-if="pages.length > display"
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
    <!-- Labels and pagination -->
  </div>
</template>

<script>
import DatatableSelect from "./DatatableSelect";
import DatatableSearch from "./DatatableSearch";
import { mdbDatatable } from "../../mixins/mdbDatatable";

const Datatable = {
  name: "Datatable",

  data() {
    return {
      options: [10, 25, 50, 100]
    };
  },
  components: {
    DatatableSearch,
    DatatableSelect
  },
  computed: {
    // filter objects by parameters match
    filteredRows() {
      return this.rowsDisplay.filter(row => {
        return (
          row.filter(value =>
            value
              .toString()
              .toLowerCase()
              .match(this.search.toLowerCase())
          ).length > 0
        );
      });
    }
  },
  mixins: [mdbDatatable]
};

export default Datatable;
export { Datatable as mdbDatatable };
</script>

<style scoped>
.refresh-button {
  width: 4rem;
  height: 2rem;
}
.dataTables-scrollBody {
  display: block;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

.dataTables-scrollBody td,
.dataTables-scrollBody th {
  white-space: nowrap;
}

.selectable-row {
  cursor: pointer;
  transition: all 0.4s ease-out;
}

.selectable-row:hover {
  background-color: rgba(66, 133, 244, 0.1);
}

.selectable-row:focus {
  outline: 1px solid #4285f4;
  background-color: rgba(66, 133, 244, 0.1);
}
</style>

<style>
.pagination {
  margin-bottom: 0px;
}
</style>
