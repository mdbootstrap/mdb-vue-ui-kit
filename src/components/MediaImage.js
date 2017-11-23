import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "a"
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  align: {
    type: String,
    default: "top"
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
        'd-flex',
        'mr-3',
        props.align === 'center' ? 'align-self-center' : props.align === 'bottom' ? 'align-self-end' : 'align-self-start',
        props.className ? props.className : ''
      ),
      attrs: {
        href: '#'
      }
    };
    const img = [
      h('img', {
        class: [],
        attrs: {
          src: props.src,
          alt: props.alt
        }
      })
    ];
    return h(props.tag, dataObj, img);
  }
};

