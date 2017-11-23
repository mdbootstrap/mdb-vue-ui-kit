import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "span"
  },
  color: {
    type: String,
    default: "primary"
  },
  pill: {
    type: Boolean,
    default: false
  },
  className: {
    type: String
  }
};

export const classes = classNames(
  'badge',
  'badge-' + props.color,
  props.pill ? 'badge-pill' : false
);

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const dataObj = {
      class: classNames(
        'badge',
        'badge-' + props.color,
        props.pill ? 'badge-pill' : false,
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};
