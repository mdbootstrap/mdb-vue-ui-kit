import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';

export const props = {
  icon: {
    type: String,
  },
  size: {
    type: [Boolean, String],
    default: false
  },
  fixed: {
    type: Boolean,
    default: false
  },
  pull: {
    type: [Boolean, String],
    default: false
  },
  border: {
    type: Boolean,
    default: false
  },
  spin: {
    type: Boolean,
    default: false
  },
  pulse: {
    type: Boolean,
    default: false
  },
  rotate: {
    type: [Boolean, String],
    default: false
  },
  flip: {
    type: [Boolean, String],
    default: false
  },
  inverse: {
    type: [Boolean, String],
    default: false
  },
  stack: {
    type: [Boolean, String],
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
        'fa',
        props.icon ? 'fa-' + props.icon : '',
        props.size ? 'fa-' + props.size : false,
        props.fixed ? 'fa-fw' : false,
        props.pull ? 'fa-pull-' + props.pull : false,
        props.border ? 'fa-border' : false,
        props.spin ? 'fa-spin' : false,
        props.pulse ? 'fa-pulse' : false,
        props.rotate ? 'fa-rotate-' + props.rotate : false,
        props.flip ? 'fa-flip-' + props.flip : false,
        props.inverse ? 'fa-inverse' : false,
        props.stack ? 'fa-' + props.stack : false,
        props.className ? props.className : ''
      )
    };
    return h('i', dataObj, children);
  }
};
