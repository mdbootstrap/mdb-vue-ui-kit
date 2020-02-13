import mdbIcon from "../components/Content/Fa";
import mdbRow from "../components/Layout/Row";
import mdbCol from "../components/Layout/Col";
import mdbBtn from "../components/Components/Button";
import mdbTbl from "../components/Tables/Table";
import mdbTblHead from "../components/Tables/TableHead";
import mdbTblBody from "../components/Tables/TableBody";
import mdbPagination from "../components/Components/Pagination";
import mdbPageItem from "../components/Components/PageItem";
import mdbInput from "../components/Forms/Input";

export const mdbDatatable = {
  components: {
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbPagination,
    mdbPageItem,
    mdbInput,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
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
      default: "Start"
    },
    end: {
      type: String,
      default: "End"
    },
    next: {
      type: String,
      default: "Next"
    },
    previous: {
      type: String,
      default: "Previous"
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
      default: "-"
    },
    defaultCol: {
      type: String,
      default: "undefined"
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
    },
    searchPlaceholder: {
      type: String
    },
    entriesTitle: {
      type: String
    },
    noFoundMessage: {
      type: String,
      default: "No matching records found"
    },
    showingText: {
      type: String,
      default: "Showing"
    },
    focus: {
      type: Boolean,
      default: false
    },
    btnColor: {
      type: String,
      default: "primary"
    },
    selectColor: {
      type: String,
      default: "blue lighten-4"
    },
    hoverColor: {
      type: String,
      default: "blue lighten-5"
    },
    paginationColor: {
      type: String,
      default: "blue"
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      updatedKey: null,
      reactiveFlag: false,
      recentSort: null,
      interval: null,
      selected: -1,
      hovered: -1,
      rows: this.data.rows || [],
      columns: this.data.columns || [],
      entries: 10,
      pages: [],
      activePage: 0,
      search: "",
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
        maxWidth: this.maxWidth ? this.maxWidth : "100%",
        margin: "0 auto"
      }
    };
  },
  computed: {
    rowsDisplay() {
      return this.formatRows();
    },
    visiblePages() {
      let start =
        this.activePage - Math.floor(this.display / 2) > 0
          ? this.activePage - Math.floor(this.display / 2)
          : 0;
      let end =
        start + this.display < this.pages.length
          ? start + this.display
          : this.pages.length;
      if (end - start < this.display && end - this.display >= 0) {
        start = end - this.display;
      }
      return this.pages.slice(start, end);
    },
    componentKey() {
      return this.updatedKey;
    }
  },
  methods: {
    changePage(index) {
      this.activePage = index;
    },
    sort(field, sort) {
      const selected = this.rows[this.selected];

      if ((sort, field)) {
        this.recentSort = { field, sort };
        if (this.sorting) {
          sort === "asc"
            ? this.rows.sort((a, b) => (a[field] > b[field] ? 1 : -1))
            : this.rows.sort((a, b) => (a[field] > b[field] ? -1 : 1));
          this.columns[
            this.columns.findIndex(column => column.field === field)
          ].sort = sort === "asc" ? "desc" : sort === "desc" ? "asc" : null;
        }
      }

      this.selected = this.rows.indexOf(selected);
    },
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    updateEntries(value) {
      this.entries = value;
    },
    updateSearch(value) {
      this.search = this.escapeRegExp(value);
      this.activePage = 0;
    },
    fetchData() {
      fetch(this.data)
        .then(res => res.json())
        .then(json => {
          this.columns = json.columns;
          this.rows = json.rows;
          this.$emit("fields", this.columns);
        })
        .then(() => {
          if (this.recentSort) {
            this.sort(this.recentSort.field, this.recentSort.sort);
          }
        })
        .catch(err => console.log(err));
    },
    updateData() {
      this.fetchData();
      this.reactiveFlag = true;
      this.updatedKey = Math.floor(Math.random() * 100000000);
    },
    selectRow(row) {
      let index = this.rowsDisplay.indexOf(row);
      if (this.selected === index) {
        index = -1;
      }
      this.selected = index;
      this.$emit("selectRow", index);
    },
    formatRows() {
      this.setDefaultColumns();
      let arrRows = [];
      this.rows.map(row => {
        let newRow = [];
        this.columns.forEach(column => {
          let content = row[column.field] || this.defaultRow;
          content = column.format ? column.format(content) : content;

          newRow.push(content);
        });
        arrRows.push(newRow);
      });
      return arrRows;
    },
    setDefaultColumns() {
      this.columns.forEach((col, i) => {
        if (!col) {
          this.columns[i] = {
            label: this.defaultCol,
            field: this.defaultCol.concat(i),
            sort: "asc"
          };
        }
      });
    },
  },

  mounted() {
    // bind data or download form API
    if (typeof this.data === "string") {
      this.fetchData();
    }
    //reactivness in data table
    if (this.reactive) {
      this.interval = setInterval(this.updateData, this.time);
    }

    // findout rows amount, and slice it into array (split into pages)
    const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
    this.pages = [];
    if (this.pagination) {
      for (let i = 1; i <= pagesAmount; i++) {
        const pageEndIndex = i * this.entries;
        this.pages.push(
          this.filteredRows.slice(pageEndIndex - this.entries, pageEndIndex)
        );
      }
    } else {
      this.pages.push(this.filteredRows);
    }
    this.activePage = 0;

    // initial sorting
    if (this.order) {
      this.sort(this.columns[this.order[0]].field, this.order[1]);
    }

    this.$emit("pages", this.pages);
    this.$emit("fields", this.columns);
  },
  beforeDestroy() {
    if (this.reactive) {
      window.clearInterval(this.interval);
    }
  },
  watch: {
    data(newVal) {
      this.columns = newVal.columns;
    },
    entries() {
      // do the split every entry change (changing entries amount)
      const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
      this.pages = [];
      for (let i = 1; i <= pagesAmount; i++) {
        const pageEndIndex = i * this.entries;
        this.pages.push(
          this.filteredRows.slice(pageEndIndex - this.entries, pageEndIndex)
        );
      }
      this.activePage =
        this.activePage < this.pages.length
          ? this.activePage
          : this.pages.length - 1;

      this.$emit("pages", this.pages);
    },
    filteredRows() {
      const active = this.activePage;
      // do the split on every change in rows (searching)
      const pagesAmount = Math.ceil(this.filteredRows.length / this.entries);
      this.pages = [];
      if (this.pagination) {
        for (let i = 1; i <= pagesAmount; i++) {
          const pageEndIndex = i * this.entries;
          this.pages.push(
            this.filteredRows.slice(pageEndIndex - this.entries, pageEndIndex)
          );
        }
      } else {
        this.pages.push(this.filteredRows);
      }
      if (this.reactiveFlag === false) {
        this.activePage = 0;
      }
      this.activePage = active;
      this.$emit("pages", this.pages);
    }
  }
};
