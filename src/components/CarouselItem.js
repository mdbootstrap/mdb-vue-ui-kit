import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "div"
  },
  active: {
    type: Boolean,
  },
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String
  },
  className: {
    type: String
  }
};

export const dataObj = '';

export default {
  functional: true,
  props,
  render(h, { props, data, parent }) {
    const dataObj = {
      class: classNames(
        'carousel-item',
        props.active ? 'active': '',
        props.className ? props.className : ''
      )
    };
    const img = [
      h('img', {
        class: ['d-block w-100'],
        attrs: {
          src: props.src,
          alt: props.alt
        }
      })
    ];
    return h(props.tag, dataObj, img);
  }
};
