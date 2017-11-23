export const props = {
  className: {
    type: String
  }
};

export default {
  functional: true,
  render(h, {parent}) {
    const controls = [
      h('a', {
        class: ['carousel-control-prev',
          props.className ? props.className : ''],
        attrs: { href : '#', role: 'button', 'aria-controls': true},
        on: {
          click(e) {
            e.preventDefault();
            e.stopPropagation();
            parent.$emit('changeSlide', {'slideIndex': 'prev'});
          }
        }
      },[
        h('span', { class: ['carousel-control-prev-icon'], attrs: { 'aria-hidden': 'true'}}),
        h('span', { class: ['sr-only']}, ['Prev'])
      ]
      ),
      h('a', {
        class: ['carousel-control-next',
          props.className ? props.className : ''],
        attrs: { href : '#', role: 'button', 'aria-controls': true},
        on: {
          click(e) {
            e.preventDefault();
            e.stopPropagation();
            parent.$emit('changeSlide', {'slideIndex': 'next'});
          }
        }
      },[
        h('span', { class: ['carousel-control-next-icon'], attrs: { 'aria-hidden': 'true'}}),
        h('span', { class: ['sr-only']}, ['Next'])
      ]
      )
    ];
    return h('div', controls);
  },
};
