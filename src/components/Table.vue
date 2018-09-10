<template>
  <div :class="wrapperClasses" :style="{maxHeight: maxHeight}">
    <table :class="tableClasses" :is="tag" >
      <slot></slot>
    </table>
  </div>
</template>

<script>
import classNames from 'classnames';

const Tbl = {
  props: {
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
    btn: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    datatable: {
      type: Boolean,
      default: false
    },
    dtScrollY: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    hover: {
      type: Boolean,
      default: false
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
    sm: {
      type: Boolean,
      default: false
    },
    striped: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: "table"
    },
    maxHeight: {
      type: String
    }
  },
  computed: {
    wrapperClasses() {
      return classNames(
        this.dark && 'table-dark',
        this.dtScrollY && 'dataTables-scrollBody',
        this.responsive && 'table-responsive',
        this.responsiveSm && 'table-responsive-sm',
        this.responsiveMd && 'table-responsive-md',
        this.responsiveLg && 'table-responsive-lg',
        this.responsiveXl && 'table-responsive-xl',
        this.scrollY && 'table-wrapper-scroll-y'
      );
    },
    tableClasses() {
      return classNames(
        'table',
        this.autoWidth && 'w-auto',
        this.bordered && 'table-bordered',
        this.borderless && 'table-borderless',
        this.btn && 'btn-table',
        this.datatable && 'dataTable',
        this.fixed && 'table-fixed',
        this.hover && 'table-hover',
        this.sm && 'table-sm',
        this.striped &&'table-striped'
      );
    }
  }
};

export default Tbl;
export { Tbl as mdbTable };
</script>

<style scoped>
.table-wrapper-scroll-y {
  display: block;
  overflow-y: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
</style>
