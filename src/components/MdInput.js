import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';

export const props = {
  tag: {
    type: String,
    default: "input"
  },
  type: {
    type: String,
    default: "text"
  },
  className: {
    type: String
  },
  label: {
    type: String
  },
  icon: {
    type: String,
  },
  placeholder: {
    type: String
  },
  size: {
    type: String
  },
  disabled: {
    type: [String, Boolean]
  }
};

export default {
  functional: true,
  props,
  render(h, { parent, props, data, children }) {

    const wrapper = 'div';

    const dataObj = {
      class: classNames(
        'md-form',
        props.size ? 'form-' + props.size : '',
        props.className ? props.className : ''
      )
    };

    const input = [
      h(props.tag, {
        class: classNames(
          'form-control'
        ),
        attrs: {
          type: props.type,
          placeholder: props.placeholder,
          disabled: props.disabled
        },
        on: {
          focus(e) {
            const label = e.path[0].nextElementSibling;
            parent.$emit('focus', label);
          },
          blur(e) {
            const label = e.path[0].nextElementSibling;
            parent.$emit('blur', label);
          }
        }
      })
    ];

    let icon;

    if (props.icon) {
      icon = [
        h('i', {
          class: ['fa', 'fa-' + props.icon, 'prefix'],
        })
      ];
    }

    let label;

    if (props.label) {
      label = [
        h('label', {
          class: classNames(
            props.placeholder ? 'active' : '',
            props.disabled ? 'disabled' : ''
          ),
        }, props.label)
      ];
    }

    return h(wrapper, dataObj, [icon, input, label, children]);
  }
};
