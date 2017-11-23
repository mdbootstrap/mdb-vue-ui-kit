import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "a"
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
        'dropdown-item',
        props.className ? props.className : ''
      ),
      attrs: {
        href: '#'
      },
      on: {
        click(e){
          e.preventDefault();
          const toggleMenu = e.path[1];
          parent.$emit('drop', toggleMenu);
        }
      }
    };
    return h(props.tag, dataObj, children);
  }
};

