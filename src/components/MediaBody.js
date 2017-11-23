import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  heading: {
    type: String,
    default: ''
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
        'media-body',
        props.className ? props.className : ''
      )
    };
    return h(props.tag, dataObj, children);
  }
};

