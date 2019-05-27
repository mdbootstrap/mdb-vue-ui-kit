<template>
  <transition name="fade"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @after-leave="afterLeave" 
  >
    <component :is="tag" v-if="show" :class="wrapperClass" @click.self="away">
      <div :class="dialogClass" role="document" >
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
    },
    direction: {
      type: String,
      default:'top'
    },
    show: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: false
    }
  },
  beforeMount() {
    if (this.direction === 'right') {
      this.dialogTransform = 'translate(25%,0)';
    } else if (this.direction === 'bottom') {
      this.dialogTransform = 'translate(0,25%)';
    } else if (this.direction === 'left') {
      this.dialogTransform = 'translate(-25%,0)';
    }
  },
  data() {
    return {
      dialogTransform: 'translate(0,-25%)'
    };
  },
  methods: {
    away() {
      if (this.removeBackdrop) {
        return;
      }
      this.$emit('close', this);
    },
    enter(el) {
      el.style.opacity = 0;
      el.childNodes[0].style.transform = this.dialogTransform;
      this.$emit('show', this);
    },
    afterEnter(el) {
      el.style.opacity = 1;
      el.childNodes[0].style.transform = 'translate(0,0)';
      setTimeout(() => {
        this.$emit('shown', this);
      }, 400);
    },
    beforeLeave(el) {
      this.$parent.$emit('hide', this);
      el.style.opacity = 0;
      el.childNodes[0].style.transform = this.dialogTransform;
    },
    afterLeave() {
      this.$parent.$emit('hidden', this);
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
        this.dark && 'form-dark',
        this.scrollable && 'modal-dialog-scrollable'
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
</style>
