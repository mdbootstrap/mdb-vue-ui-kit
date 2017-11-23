import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  fluid: {
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
        props.fluid ? 'container-fluid' : 'container',
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};

