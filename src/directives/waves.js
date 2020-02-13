import './waves.css';

const getOffsets = target => {
  let offsetLeft = target.offsetLeft;
  let offsetTop = target.offsetTop;
  let parentOffset = target.offsetParent;
  while (parentOffset) {
    offsetLeft += parentOffset.offsetLeft;
    offsetTop += parentOffset.offsetTop;
    parentOffset = parentOffset.offsetParent;
  }
  return [offsetLeft, offsetTop];
}

const wave = (el, waveData, options) => {
  let rippleElement = document.createElement('div');
  rippleElement.classList.add('ripple');

  if (options.center) {
    rippleElement.style.top = -(waveData.height / 2) + 'px';
    rippleElement.style.left = 0;
  } else {
    rippleElement.style.top = waveData.top - (waveData.width / 2) + 'px';
    rippleElement.style.left = waveData.left - (waveData.width / 2) + 'px';
  }

  rippleElement.style.height = waveData.width + 'px';
  rippleElement.style.width = waveData.width + 'px';
  rippleElement.style.background = options.background;
  
  if (options.dark) rippleElement.style.background = "rgba(0, 0, 0, 0.2)";
  el.appendChild(rippleElement);

  if (options.duration === 'short') rippleElement.classList.add('is-reppling-short-duration');
  else if (options.duration === 'long') rippleElement.classList.add('is-reppling-long-duration');
  else rippleElement.classList.add('is-reppling');

  setTimeout(() => {
    el.removeChild(rippleElement);
  }, 1000);
}

export default {
  inserted(el, binding) {
    let options = {
      dark: false,
      background: 'rgba(255, 255, 255, 0.3)',
      duration: 'basic',
      center: false,
      fixed: false
    }

    if (binding.value) {
      options.dark = binding.value.dark || options.dark;
      options.background = binding.value.background || options.background;
      options.duration = binding.value.duration || options.duration;
      options.center = binding.value.center || options.center;
      options.fixed = binding.value.fixed || options.fixed;
    }

    const offsets = getOffsets(el);

    el.classList.add('ripple-parent');
    el.waves = e => {
      let waveData = { 'top' : e.pageY - offsets[1], 'left': e.pageX - offsets[0], 'height': el.offsetHeight, 'width': el.offsetWidth };
      if (options.fixed) waveData.top = e.clientY - offsets[1];
      wave(el, waveData, options);
    }

    el.addEventListener('click', el.waves);
  },

  unbind(el) {
    el.removeEventListener('click', el.waves);
  }
};