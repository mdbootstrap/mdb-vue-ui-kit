<template>
  <transition name="fade">
    <div :is="tag" :class="wrapperClass">
      <div :class="dialogClass" role="document" v-on-clickaway="away">
        <div :class="contentClass">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import classNames from 'classnames';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    size: {
      type: String
    },
    side: {
      type: Boolean,
      default: false
    },
    position: {
      type: String
    },
    fullHeight: {
      type: Boolean,
      default: false
    },
    frame: {
      type: Boolean,
      default: false
    },
    removeBackdrop: {
      type: Boolean,
      default: false
    },
    centered: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    wrapperClass() {
      return classNames(
        'modal',
        this.removeBackdrop && 'modal-without-backdrop'
      );
    },
    dialogClass() {
      return classNames(
        'modal-dialog',
        this.size ? 'modal-' + this.size : '',
        this.side && 'modal-side',
        this.fullHeight && 'modal-full-height',
        this.frame && 'modal-frame',
        this.position ? 'modal-' + this.position : '',
        this.centered && 'modal-dialog-centered'
      );
    },
    contentClass() {
      return classNames(
        'modal-content'
      );
    }
  },
  methods: {
    away() {
      if (this.removeBackdrop) {
        return;
      }
      this.$emit('close');
    }
  },
  mixins: [clickaway]
};
</script>

<style scoped>
.modal {
  display: block;
  background-color: rgba(0,0,0,0.5);
  transition: .3s;
  overflow-y: auto;
}

.modal-dialog {
  transition: .3s;
}

.modal-without-backdrop {
  background: none;
  pointer-events: none;
}

.fade-enter {
  transform: translate(0,0);
  opacity: 1;
}

.fade-leave-active {
  transform: translate(0,0);
  opacity: 1;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}

.fade-enter .modal-dialog,
.fade-leave-active .modal-dialog {
  -webkit-transform: translate(0,-25%);
  transform: translate(0,-25%);
}
</style>
