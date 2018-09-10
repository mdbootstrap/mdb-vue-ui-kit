import '../components/Waves.css';

export default {
  methods: {
    wave(e) {
      if (this.waves) {
        this.target = e.target.classList.contains('ripple-parent') ? e.currentTarget : e.target.parentElement;
        this.getOffsets(e);
        this.waveData = { 'top' : e.pageY - this.offsetTop, 'left': e.pageX - this.offsetLeft, 'height': this.$el.offsetHeight, 'width': this.$el.offsetWidth };
        // for fixed elements
        if (this.wavesFixed) {
          this.waveData.top = e.clientY - this.offsetTop;
        }
        this.createRipple();
        this.rippleAnimate();
        this.rippleRemove(this.target, this.rippleElement);
      }
    },
    getOffsets(e) {
      if (this.target.offsetParent) {
        this.offsetLeft = this.target.offsetLeft;
        this.offsetTop = this.target.offsetTop;
        this.parentOffset = this.target.offsetParent;
        while (this.parentOffset) {
          this.offsetLeft += this.parentOffset.offsetLeft;
          this.offsetTop += this.parentOffset.offsetTop;
          this.parentOffset = this.parentOffset.offsetParent;
        }
      }
    },
    createRipple() {
      this.rippleElement = document.createElement('div');
      this.rippleElement.classList.add('ripple');
      this.rippleElement.style.top = this.waveData.top - (this.waveData.width / 2) + 'px';
      this.rippleElement.style.left = this.waveData.left - (this.waveData.width / 2) + 'px';
      this.rippleElement.style.height = this.waveData.width + 'px';
      this.rippleElement.style.width = this.waveData.width + 'px';
      if (this.darkWaves) {
        this.rippleElement.style.background = "rgba(0, 0, 0, 0.2)";
      }
      this.target.appendChild(this.rippleElement);
    },
    rippleAnimate() {
      this.rippleElement.classList.add('is-reppling');
    },
    rippleRemove(target, rippleElement) {
      this.remove = setTimeout(() => {
        target.removeChild(rippleElement);
      }, 600);
    }
  }
};
