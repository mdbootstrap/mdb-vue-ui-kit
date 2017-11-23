import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "ol"
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
        'breadcrumb',
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};
