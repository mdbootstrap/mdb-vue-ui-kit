import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  interval: {
    type: Number,
    default: 10000
  },
  className: {
    type: String
  }
};

export var render = 0;

export default {
  functional: true,
  props,
  render(h, { props, data, parent, children }) {
    const dataObj = {
      class: classNames(
        'carousel',
        props.className ? props.className : ''
      ),
    };
    if (render == 0) {
      parent.$emit('defineInterval', {'newInterval': props.interval});
      render++;
    }
    return h(props.tag, dataObj, children);
  }
};
