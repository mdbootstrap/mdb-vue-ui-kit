<template>
  <div>
    <btn>Primary</btn>
    <btn color="default">Default</btn>
    <btn color="secondary">Secondary</btn>
    <btn color="success">Success</btn>
    <btn color="info">Info</btn>
    <btn color="warning">Warning</btn>
    <btn color="danger">Danger</btn>
  </div>
</template>

<script>
import Btn from '@/components/Button';

export default {
  name: 'WavesPage',
  components: {
    Btn
  },
  data() {
    return {
    };
  },
  methods: {
    rippleAnimate(waveData) {
      this.rippleEl.style.top = waveData.top - (waveData.width / 2) + 'px';
      this.rippleEl.style.left = waveData.left - (waveData.width / 2) + 'px';
      this.rippleEl.style.height = waveData.width + 'px';
      this.rippleEl.style.width = waveData.width + 'px';
      this.rippleEl.className += ' is-reppling';
      this.rippleClassUpdate();
    },
    rippleClassUpdate() {
      this.update = setTimeout(() => {
        this.rippleEl.className = 'ripple';
      }, 600);
    }
  },
  created() {
    this.$on('click', function(waveData, ripple) {
      this.rippleEl = ripple;
      this.rippleAnimate(waveData);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ripple {
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  opacity: 1;
  transform: scale(0);
}

.ripple-outline {
  background: rgba(0, 0, 0, 0.2);
}

.ripple.is-reppling {
  animation: rippleAnimate .6s linear;
}

.ripple-parent {
  position: relative;
  overflow: hidden;
}

@keyframes rippleAnimate {
  100% {
      opacity: 0;
      transform: scale(3);
  }
}
</style>
