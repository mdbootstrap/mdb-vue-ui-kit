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
  className: {
    type: String
  },
  label: {
    type: String
  },
  id: {
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
        'dropdown',
        props.active ? 'active' : '',
        props.className ? props.className : ''
      ),
      on: {
        click(e) {
          e.stopImmediatePropagation();
          const toggleMenu = e.path[0].nextElementSibling;
          toggleMenu.classList.toggle('show');
        }
      }
    };
    const a = [
      h('a', {
        class: ['nav-link', 'dropdown-toggle'],
        attrs: {
          id: props.id,
          'data-toggle': 'dropdown',
          'aria-haspopup': true,
          'aria-expanded': false
        },
      }, props.label)
    ];
    const div = [
      h('div',{
        class: ['dropdown-menu', 'dropdown-primary'],
        attr: {
          'aria-labelledby': 'navbarDropdownMenuLink'
        },
        methods: {

        }
      }, children)
    ];

    return h(props.tag, dataObj, [a, div]);
  }
};

