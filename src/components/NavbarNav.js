import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "ul"
  },
  className: {
    type: String
  },
};

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const dataObj = {
      class: classNames(
        'navbar-nav',
        'mr-auto',
        props.className ? props.className : ''
      ),
      attr: {
        id: props.id
      }
    };

    return h(props.tag, dataObj, children);
  }
};

