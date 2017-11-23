import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  className: {
    type: String
  },
  id: {
    type: String,
    default: 'navbarSupportedContent'
  }
};

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const dataObj = {
      class: classNames(
        'collapse navbar-collapse',
        props.className ? props.className : ''
      ),
      attr: {
        id: props.id
      }
    };
    return h(props.tag, dataObj, children);
  }
};

