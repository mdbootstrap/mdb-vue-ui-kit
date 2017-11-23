import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "button"
  },
  color: {
    type: String,
    default: "primary"
  },
  outline: {
    type: String,
  },
  size: {
    type: String
  },
  block: {
    type: Boolean,
    default: false
  },
  active: {
    type: Boolean,
    default: false
  },
  disabled: {
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
  render (h, { props, parent, children, }) {
    const wave = [
      h('div', {
        class: ['ripple'],
      })
    ];
    const dataObj = {
      class: classNames(
        'btn',
        props.outline ? 'btn-outline-' + props.outline : 'btn-' + props.color,
        props.size ? 'btn-' + props.size : '',
        props.block ? 'btn-block' : '',
        props.active ? 'active' : '',
        props.disabled ? 'disabled' : '',
        'ripple-parent',
        props.className ? props.className : ''
      ),
      on: {
        click(e) {
          const waveData = { 'top' : e.pageY - e.path[0].offsetTop, 'left': e.pageX - e.path[0].offsetLeft, 'height': e.path[0].offsetHeight, 'width': e.path[0].offsetWidth };
          const rippleEl = children[0].elm.nextSibling;
          parent.$emit('click', waveData, rippleEl);
        }
      },
    };
    return h(props.tag, dataObj, [children, wave]);
  }
};
