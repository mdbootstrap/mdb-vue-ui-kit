import classNames from 'classnames';

export const props = {
  tag: {
    type: String,
    default: "li"
  },
  active: {
    type: Boolean,
  },
  index: {
    type: Number,
    required: true
  },
  className: {
    type: String
  }
};

export const dataObj ='';

export default {
  functional: true,
  props,
  render(h, { props, data, parent, children }) {
    const dataObj = {
      class: classNames(
        props.active ? 'active': '',
        props.className ? props.className : ''
      ),
      on: {
        click() {
          parent.$emit('changeSlide', {'slideIndex': props.index});
        }
      }
    };
    return h(props.tag, dataObj, children);
  }
};
