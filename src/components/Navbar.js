import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "nav"
  },
  className: {
    type: String
  },
  expand: {
    type: String,
    default: 'large'
  },
  position: {
    type: String,
    default: 'top'
  },
  href: {
    type: String,
  },
  src: {
    type: String,
  },
  alt: {
    type: String,
  },
  name: {
    type: String,
  }
};

export default {
  functional: true,
  props,
  render(h, { props, data, children }) {
    const dataObj = {
      class: classNames(
        'navbar',
        'navbar-dark',
        props.className ? props.className : '',
        props.expand === 'small' ? 'navbar-expand-sm' :
        props.expand === 'medium' ? 'navbar-expand-md' :
        props.expand === 'large' ? 'navbar-expand-lg' : 'navbar-expand-lx',
        props.position === 'top' ? 'fixed-top' :
        props.position === 'bottom' ? 'fixed-bottom' : ''
      ),
    };
    const brand = [
      h('a', {
        class: ['navbar-brand'],
        attrs: {
          href: props.href
        }
      }, [
        props.name,
        h('img', {
          class: [],
          attrs: {
            src: props.src,
            alt: props.alt
          }
        }),
      ])
    ];

    const toggle = [
      h('button', {
        class: ['navbar-toggler'],
        attrs: {
          type: 'button',
          dataToggle:'collapse',
          dataTarget: '#navbarSupportedContent',
          ariaControls: 'navbarSupportedContent',
          ariaExpanded: false,
          ariaLabel: 'Toggle navigation'
        },
        on: {
          click(e) {
            e.stopImmediatePropagation();
            const collapseMenu = e.path[2].querySelector('.collapse');
            collapseMenu.classList.toggle('show');
          }
        }
      }, [
        h('span', {
          'class': 'navbar-toggler-icon'
        })
      ])
    ];

    return h(props.tag, dataObj, [brand, toggle, children]);
  }
};
