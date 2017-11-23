import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "table"
  },
  dark: {
    type: Boolean,
    default: false
  },
  striped: {
    type: Boolean,
    default: false
  },
  bordered: {
    type: Boolean,
    default: false
  },
  hover: {
    type: Boolean,
    default: false
  },
  sm: {
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
  className: {
    type: String
  }
};

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const dataObj = {
      class: classNames(
        'table',
        props.dark ? 'table-dark' : '',
        props.striped ? 'table-striped' : '',
        props.bordered ? 'table-bordered' : '',
        props.hover ? 'table-hover' : '',
        props.sm ? 'table-sm' : '',
        props.responsive ? 'table-responsive' : '',
        props.responsiveSm ? 'table-responsive-sm' : '',
        props.responsiveMd ? 'table-responsive-md' : '',
        props.responsiveLg ? 'table-responsive-lg' : '',
        props.responsiveXl ? 'table-responsive-xl' : '',
        props.className ? props.className : ''
      )
    };
    return h(props.tag, dataObj, children);
  }
};

