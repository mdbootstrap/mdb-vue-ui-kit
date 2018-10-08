<template>
  <transition name="fade"
  @after-enter="afterEnter"
  @after-leave="afterLeave"
>
    <component :is="tag" :class="wrapperClass">
      <div :class="dialogClass" role="document" v-on-clickaway="away">
        <div :class="contentClass" :style="computedContentStyle">
          <slot></slot>
        </div>
      </div>
    </component>
  </transition>
</template>

<script>
import classNames from 'classnames';
import { mixin as clickaway } from 'vue-clickaway';

const Modal = {
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
    },
    cascade: {
      type: Boolean,
      default: false
    },
    danger: {
      type: Boolean,
      default: false
    },
    info: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: Boolean,
      default: false
    },
    elegant: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    },
    bgSrc: {
      type: String,
      default:''
    }
  },
  beforeMount() {
    this.$emit('show', this);
  },
  beforeDestroy() {
    this.$emit('hide', this);
  },
  methods: {
    away() {
      if (this.removeBackdrop) {
        return;
      }
      this.$emit('close', this);
    },
    afterEnter() {
      this.$emit('shown', this);
    },
    afterLeave() {
      this.$emit('hidden', this);
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
        this.size && 'modal-' + this.size,
        this.side && 'modal-side',
        this.fullHeight && 'modal-full-height',
        this.frame && 'modal-frame',
        this.position ? 'modal-' + this.position : '',
        this.centered && 'modal-dialog-centered',
        (this.cascade || this.tabs) && 'cascading-modal',
        this.danger && 'modal-notify modal-danger',
        this.info && 'modal-notify modal-info',
        this.success && 'modal-notify modal-success',
        this.warning && 'modal-notify modal-warning',
        this.avatar && 'modal-avatar cascading-modal',
        this.dark && 'form-dark'
      );
    },
    contentClass() {
      return classNames(
        'modal-content',
        this.tabs && 'modal-c-tabs',
        this.elegant && 'form-elegant',
        this.dark && 'card card-image'
      );
    },
    computedContentStyle() {
      return this.bgSrc ? {'background-image': `url("${this.bgSrc}")`} : false;
    }
  },
  mixins: [clickaway]
};

export default Modal;
export { Modal as mdbModal };
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
