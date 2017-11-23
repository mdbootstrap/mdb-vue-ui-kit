import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
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
        'carousel-inner',
        props.className ? props.className : ''
      ),
      attrs: {
        'role': 'listbox'
      }
    };
    return h(props.tag, dataObj, children);
  }
};
