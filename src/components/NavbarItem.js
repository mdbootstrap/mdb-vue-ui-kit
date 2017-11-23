import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "li"
  },
  active: {
    type: Boolean,
    default: false
  },
  href: {
    type: String,
    default: '#'
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
        'nav-item',
        props.active ? 'active' : '',
        props.className ? props.className : ''
      ),

    };
    const a = [
      h('a', {
        class: ['nav-link', 'waves-effect', 'waves-light'],
        attrs: {
          href: props.href,
        },
      }, [children])
    ];

    return h(props.tag, dataObj, a);
  }
};

