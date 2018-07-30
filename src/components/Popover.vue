<template>
  <span>
    <transition @after-leave="doDestroy">
      <span ref="popper" :class="{show:!disabled && showPopper}">
        <slot></slot>
      </span>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
  import Popper from 'popper.js';

  const on = function(element, event, handler) {
    if (element && event && handler) {
      document.addEventListener ? element.addEventListener(event, handler, false) :
        element.attachEvent('on' + event, handler);
    }
  };

  const off = function(element, event, handler) {
    if (element && event) {
      document.removeEventListener ? element.removeEventListener(event, handler, false) : element.detachEvent('on' + event, handler);
    }
  };

  const Popover = {
    props: {
      trigger: {
        type: String,
        default: 'hover',
        validator: value => ['click', 'hover'].indexOf(value) > -1
      },
      delayOnMouseOut: {
        type: Number,
        default: 10,
      },
      disabled: {
        type: Boolean,
        default: false
      },
      enterActiveClass: String,
      leaveActiveClass: String,
      boundariesSelector: String,
      reference: {},
      forceShow: {
        type: Boolean,
        default: false
      },
      appendToBody: {
        type: Boolean,
        default: false
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
      transition: {
        type: String,
        default: ''
      },
      options: {
        type: Object,
        default() {
          return {};
        }
      },
    },

    data() {
      return {
        referenceElm: null,
        popperJS: null,
        showPopper: false,
        currentPlacement: '',
        popperOptions: {
          placement: 'bottom',
          gpuAcceleration: false
        }
      };
    },

    watch: {
      showPopper(value) {
        if (value) {
          this.$emit('show');
          this.updatePopper();
        } else {
          this.$emit('hide');
        }
      },

      forceShow: {
        handler(value) {
          this[value ? 'doShow' : 'doClose']();
        },
        immediate: true
      }
    },

    created() {
      this.appendedArrow = false;
      this.appendedToBody = false;
      this.popperOptions = Object.assign(this.popperOptions, this.options);
    },

    mounted() {
      this.referenceElm = this.reference || this.$slots.reference[0].elm;
      this.popover = this.$slots.default[0].elm;

      switch (this.trigger) {
        case 'click':
          on(this.referenceElm, 'click', this.doToggle);
          on(document, 'click', this.handleDocumentClick);
          break;
        case 'hover':
          on(this.referenceElm, 'mouseover', this.onMouseOver);
          on(this.popover, 'mouseover', this.onMouseOver);
          on(this.referenceElm, 'mouseout', this.onMouseOut);
          on(this.popover, 'mouseout', this.onMouseOut);
          break;
      }
    },

    methods: {
      doToggle() {
        if (!this.forceShow) {
          this.showPopper = !this.showPopper;
        }
      },

      doShow() {
        this.showPopper = true;
      },

      doClose() {
        this.showPopper = false;
      },

      doDestroy() {
        if (this.showPopper) {
          return;
        }

        if (this.popperJS) {
          this.popperJS.destroy();
          this.popperJS = null;
        }

        if (this.appendedToBody) {
          this.appendedToBody = false;
          document.body.removeChild(this.popover.parentElement);
        }
      },

      createPopper() {
        this.$nextTick(() => {
          if (this.visibleArrow) {
            this.appendArrow(this.popover);
          }

          if (this.appendToBody && !this.appendedToBody) {
            this.appendedToBody = true;
            document.body.appendChild(this.popover.parentElement);
          }

          if (this.popperJS && this.popperJS.destroy) {
            this.popperJS.destroy();
          }

          if (this.boundariesSelector) {
            const boundariesElement = document.querySelector(this.boundariesSelector);

            if (boundariesElement) {
              this.popperOptions.modifiers = Object.assign({}, this.popperOptions.modifiers);
              this.popperOptions.modifiers.preventOverflow = Object.assign({}, this.popperOptions.modifiers.preventOverflow);
              this.popperOptions.modifiers.preventOverflow.boundariesElement = boundariesElement;
            }
          }

          this.popperOptions.onCreate = () => {
            this.$emit('created', this);
            this.$nextTick(this.updatePopper);
          };

          this.popperJS = new Popper(this.referenceElm, this.popover, this.popperOptions);
        });
      },

      destroyPopper() {
        off(this.referenceElm, 'click', this.doToggle);
        off(this.referenceElm, 'mouseup', this.doClose);
        off(this.referenceElm, 'mousedown', this.doShow);
        off(this.referenceElm, 'focus', this.doShow);
        off(this.referenceElm, 'blur', this.doClose);
        off(this.referenceElm, 'mouseout', this.onMouseOut);
        off(this.referenceElm, 'mouseover', this.onMouseOver);
        off(document, 'click', this.handleDocumentClick);

        this.showPopper = false;
        this.doDestroy();
      },

      appendArrow(element) {
        if (this.appendedArrow) {
          return;
        }

        this.appendedArrow = true;

        const arrow = document.createElement('div');
        arrow.setAttribute('x-arrow', '');
        arrow.className = 'popover_arrow';
        element.appendChild(arrow);
      },

      updatePopper() {
        this.popperJS ? this.popperJS.scheduleUpdate() : this.createPopper();
      },

      onMouseOver() {
        this.showPopper = true;
        clearTimeout(this._timer);
      },

      onMouseOut() {
        this._timer = setTimeout(() => {
          this.showPopper = false;
        }, this.delayOnMouseOut);
      },

      handleDocumentClick(e) {
        if (!this.$el || !this.referenceElm ||
          this.$el.contains(e.target) ||
          this.referenceElm.contains(e.target) ||
          !this.popover || this.popover.contains(e.target)
        ) {
          return;
        }

        this.$emit('documentClick');

        if (this.forceShow) {
          return;
        }

        this.showPopper = false;
      }
    },

    destroyed() {
      this.destroyPopper();
    }
  };

  export default Popover;
  export { Popover as mdbPopover };
</script>

<style>
  .popover {
    width: auto;
    background-color: white;
    color: #97999b;
    text-align: center;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    border: 1px rgb(0, 0, 0) solid;
    z-index: 200000;
    max-width: 276px;
    text-align: start;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    opacity: 0;
    transition: opacity 0.3s, visibility 0.3s;
    visibility: hidden;
  }

  .show .popover {
    opacity: 1;
    visibility: visible;
  }

  .popover-body {
    color: #6c6e71;
  }

  .popover .popover_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    color: transparent;
  }

  .popover[x-placement^="top"] {
    margin-bottom: 18px;
  }

  .popover[x-placement^="top"] .popover_arrow {
    border-width: 15px 15px 0 15px;
    border-color: #d6d6d6 transparent transparent transparent;
    bottom: -15px;
    margin-bottom: 0;
  }

  .popover[x-placement^="top"] .popover_arrow::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -15px;
    bottom: 1.5px;
    border: solid;
    border-width: 15px 15px 0 15px;
    border-color: white transparent transparent transparent;
  }

  .popover[x-placement^="bottom"] {
    margin-top: 18px;
  }

  .popover[x-placement^="bottom"] .popover_arrow {
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent #d6d6d6 transparent;
    top: -15px;
    margin-top: 0;
  }

  .popover[x-placement^="bottom"] .popover_arrow::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: -15px;
    top: 1.45px;
    border: solid;
    border-width: 0 15px 15px 15px;
    border-color: transparent transparent white transparent;
  }

  .popover[x-placement^="right"] {
    margin-left: 18px;
  }

  .popover[x-placement^="right"] .popover_arrow {
    border-width: 15px 15px 15px 0;
    border-color: transparent #d6d6d6 transparent transparent;
    left: -15px;
    margin-left: 0;
  }

  .popover[x-placement^="right"] .popover_arrow::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -15px;
    left: 1.45px;
    border: solid;
    border-width: 15px 15px 15px 0;
    border-color: transparent white transparent transparent;
  }

  .popover[x-placement^="left"] {
    margin-right: 18px;
  }

  .popover[x-placement^="left"] .popover_arrow {
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent #d6d6d6;
    right: -15px;
    margin-right: 0;
  }

  .popover[x-placement^="left"] .popover_arrow::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: -15px;
    right: 1.45px;
    border: solid;
    border-width: 15px 0 15px 15px;
    border-color: transparent transparent transparent white;
  }
</style>
