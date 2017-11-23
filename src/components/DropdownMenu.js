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
  render(h, { props, data, parent, children }) {
    const dataObj = {
      class: classNames(
        'dropdown-menu',
        'd-none',
        props.className ? props.className : ''
      )
    };
    return h(props.tag, dataObj, children);
  }
};

