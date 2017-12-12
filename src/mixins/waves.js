export default {
  methods: {
    wave(e) {
      if (this.waves) {
        this.getOffsets();
        this.waveData = { 'top' : e.pageY - this.offsetTop, 'left': e.pageX - this.offsetLeft, 'height': this.$el.offsetHeight, 'width': this.$el.offsetWidth };
        // for fixed elements
        if (this.wavesFixed) {
          this.waveData.top = e.clientY;
        }
        this.createRipple();
        this.rippleAnimate();
        this.rippleRemove(this.rippleElement);
      }
    },
    getOffsets() {
      if (this.$el.offsetParent) {
        this.offsetLeft = this.$el.offsetLeft;
        this.offsetTop = this.$el.offsetTop;
        this.parentOffset = this.$el.offsetParent;
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
      this.$el.appendChild(this.rippleElement);
    },
    rippleAnimate() {
      this.rippleElement.classList.add('is-reppling');
    },
    rippleRemove(rippleElement) {
      this.remove = setTimeout(() => {
        this.$el.removeChild(rippleElement);
      }, 600);
    }
  }
};
