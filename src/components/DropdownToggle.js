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
  id: {
    type: String
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
        'btn',
        props.outline ? 'btn-outline-' + props.outline : 'btn-' + props.color,
        props.size ? 'btn-' + props.size : '',
        props.block ? 'btn-block' : '',
        props.active ? 'active' : '',
        props.disabled ? 'disabled' : '',
        'dropdown-toggle',
        props.className ? props.className : ''
      ),
      attrs: {
        id: props.id,
        'data-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      },
      on: {
        click(e) {
          const toggleMenu = e.path[0].nextElementSibling;
          parent.$emit('drop', toggleMenu);
        }
      }
    };
    return h(props.tag, dataObj, children);
  }
};

