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

export const mdbDatatable2 = {
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
    value: {
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
    fixedHeader: {
      type: Boolean,
      default: false
    },
    fixedCols: {
      type: [Boolean, Number],
      default: false
    },
    fixedColsPosition: {
      type: Array,
      default: () => [0, 120]
    },
    fixedColsBg: {
      type: String,
      default: "white"
    },
    headerColor: {
      type: String
    },
    headerWhite: {
      type: Boolean,
      default: false
    },
    headerBg: {
      type: String,
      default: "white"
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
      default: true
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
      type: [String, Object],
      default: ""
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
      default: true
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
    footer: {
      type: [Boolean, String],
      default: false
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
      default: "of"
    },
    selectable: {
      type: Boolean,
      default: false
    },
    multiselectable: {
      type: Boolean,
      default: false
    },
    btnColor: {
      type: String,
      default: "primary"
    },
    selectColor: {
      type: String,
      default: "grey lighten-4"
    },
    hoverColor: {
      type: String,
      default: "#fafafa"
    },
    paginationColor: {
      type: String,
      default: "blue"
    },
    fullPagination: {
      type: Boolean,
      default: false
    },
    editable: {
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
      rows: this.value.rows || [],
      columns: this.value.columns || [],
      entries: 10,
      pages: [],
      activePage: 0,
      search:
        typeof this.searching === "object"
          ? this.escapeRegExp(this.searching.value)
          : this.escapeRegExp(this.searching),
      searchField: "all",
      sortIndex: 0,
      lastFieldSorted: null,
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
      let selected = "";
      if (Array.isArray(this.selected)) {
        selected = [];
        this.selected.forEach(row => {
          selected.push(this.rows[row]);
        });
      } else if (this.selected === "all") {
        selected = "all";
      } else {
        selected = this.rows[this.selected];
      }

      if ((sort, field)) {
        if (this.recentSort && this.recentSort.field === field) {
          this.sortIndex++;
        } else {
          this.sortIndex = 0;
          sort = "asc";
        }

        if (this.sortIndex === 2) {
          this.lastFieldSorted = field;
          (field = "mdbID"), (sort = "asc");
        }

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

      if (Array.isArray(selected)) {
        this.selected = [];
        selected.forEach(row => {
          this.selected.push(this.rows.indexOf(row));
        });
      } else if (this.selected === "all") {
        this.selected = "all";
      } else {
        this.selected = this.rows.indexOf(selected);
      }
    },
    escapeRegExp(string) {
      return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    },
    updateEntries(value) {
      this.entries = value;
    },
    fetchData() {
      fetch(this.value)
        .then(res => res.json())
        .then(json => {
          this.columns = json.columns;
          this.rows = json.rows;

          this.setupIDColumn();

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

      this.forceUpdate();
    },
    selectRow(row) {
      if (this.multiselectable) {
        let index = this.rowsDisplay.indexOf(row);

        if (this.selected === "all") {
          this.selected = [];
          this.value.rows.forEach((row, key) => {
            this.selected.push(key);
          });
        } else if (!Array.isArray(this.selected)) {
          this.selected = [];
        }

        if (this.selected.includes(index)) {
          this.selected.splice(this.selected.indexOf(index), 1);
        } else {
          this.selected.push(index);
        }

        let selectedRows = [];
        this.selected.forEach(row => {
          selectedRows.push(this.value.rows[row]);
        });

        this.$emit("selected", selectedRows);
      } else {
        let index = this.rowsDisplay.indexOf(row);
        if (this.selected === index) {
          index = -1;
        }
        this.selected = index;
        this.$emit("selected", this.value.rows[index]);
      }
    },
    toggleSelectAll() {
      if (this.selected === "all") {
        this.$emit("selected", []);
        this.selected = -1;
      } else {
        this.$emit("selected", this.value.rows);
        this.selected = "all";
      }
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
          this.columns[i + 1] = {
            label: this.defaultCol,
            field: this.defaultCol.concat(i),
            sort: "asc"
          };
        }
      });

      if (this.searching.field) {
        this.columns.forEach((col, key) => {
          if (this.searching.field === col.field) this.searchField = key;
        });
      }
    },
    setupIDColumn() {
      if (this.columns[0] && this.columns[0].field !== "mdbID") {
        let key = 0;

        // add id field
        this.columns.unshift({
          label: "mdbID",
          field: "mdbID",
          sort: "asc"
        });

        this.rows.forEach((row, index) => {
          key++;
          this.rows[index].mdbID = key;
        });
      }
    },
    setup() {
      // bind data or download form API
      if (typeof this.value === "string") {
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
    forceUpdate() {
      this.updatedKey = Math.floor(Math.random() * 100000000);
    }
  },
  beforeMount() {
    this.setupIDColumn();
  },
  mounted() {
    this.setup();
  },
  beforeDestroy() {
    if (this.reactive) {
      window.clearInterval(this.interval);
    }
  },
  watch: {
    value(value) {
      this.rows = value.rows || [];
      this.columns = value.columns || [];

      this.setup();

      this.setupIDColumn();
    },
    data(newVal) {
      this.columns = newVal.columns;
    },
    searching(newVal, oldVal) {
      if (typeof newVal === "object") {
        if (newVal.value === oldVal.value) {
          return;
        }

        this.search = this.escapeRegExp(newVal.value);
      } else {
        if (newVal === oldVal) {
          return;
        }

        this.search = this.escapeRegExp(newVal);
      }
      this.activePage = 0;
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
