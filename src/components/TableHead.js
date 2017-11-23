import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "thead"
  },
  color: {
    type: String,
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
        props.color ? 'thead-' + props.color : '',
        props.className ? props.className : ''
      )
    };
    return h(props.tag, dataObj, children);
  }
};

