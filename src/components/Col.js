import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  col: {
    type: String
  },
  sm: {
    type: String
  },
  md: {
    type: String
  },
  lg: {
    type: String
  },
  xl: {
    type: String
  },
  offset: {
    type: String
  },
  offsetSm: {
    type: String
  },
  offsetMd: {
    type: String
  },
  offsetLg: {
    type: String
  },
  offsetXl: {
    type: String
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
        'col',
        props.col ? 'col-' + props.col : '',
        props.sm ? 'col-sm-' + props.sm : '',
        props.md ? 'col-md-' + props.md : '',
        props.lg ? 'col-lg-' + props.lg : '',
        props.xl ? 'col-xl-' + props.xl : '',
        props.offset ? 'offset-' + props.offset : '',
        props.offsetSm ? 'offset-sm-' + props.offsetSm : '',
        props.offsetMd ? 'offset-md-' + props.offsetMd : '',
        props.offsetLg ? 'offset-lg-' + props.offsetLg : '',
        props.offsetXl ? 'offset-xl-' + props.offsetXl : '',
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};
