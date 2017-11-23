import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  show: {
    type: Boolean
  },
  btnGroup: {
    type: Boolean
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
        props.btnGroup ? 'btn-group' : 'dropdown',
        props.show ? 'show' : '',
        props.className ? props.className : ''
      )
    };
    return h(props.tag, dataObj, children);
  }
};

