import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "li"
  },
  action: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  active: {
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
        'list-group-item',
        'justify-content-between',
        'd-flex',
        'align-items-center',
        props.action ? 'list-group-item-action' : '',
        props.disabled ? 'disabled' : '',
        props.active ? 'active' : '',
        props.className ? props.className : ''
      ),
    };
    return h(props.tag, dataObj, children);
  }
};
