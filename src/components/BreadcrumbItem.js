import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "li"
  },
  active: {
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
        'breadcrumb-item',
        props.active ? 'active' : '',
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};
