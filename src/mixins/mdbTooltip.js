import Popper from "popper.js";

const on = function(element, event, handler) {
  if (element && event && handler) {
    document.addEventListener ?
      element.addEventListener(event, handler, false) :
      element.attachEvent("on" + event, handler);
  }
};

const off = function(element, event, handler) {
  if (element && event) {
    document.removeEventListener ?
      element.removeEventListener(event, handler, false) :
      element.detachEvent("on" + event, handler);
  }
};

export const mdbTooltip = {
  props: {
    trigger: {
      type: String,
      default: "hover",
      validator: value => ["click", "hover"].indexOf(value) > -1
    },
    delayOnMouseOut: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    content: String,
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
      default: ""
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    },
    maxWidth: {
      type: Number,
      default: 276
    }
  },

  data() {
    return {
      referenceElm: null,
      popperJS: null,
      showPopper: false,
      currentPlacement: "",
      popperOptions: {
        placement: "bottom",
        gpuAcceleration: false
      }
    };
  },

  watch: {
    showPopper(value) {
      if (value) {
        this.$emit("show");
        this.updatePopper();
      } else {
        this.$emit("hide");
      }
    },

    forceShow: {
      handler(value) {
        this[value ? "doShow" : "doClose"]();
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
    this.tooltip = this.$refs.tooltip || this.$slots.default[0].elm;

    switch (this.trigger) {
      case "click":
        on(this.referenceElm, "click", this.doToggle);
        on(document, "click", this.handleDocumentClick);
        break;
      case "hover":
        on(this.referenceElm, "mouseover", this.onMouseOver);
        on(this.tooltip, "mouseover", this.onMouseOver);
        on(this.referenceElm, "mouseout", this.onMouseOut);
        on(this.tooltip, "mouseout", this.onMouseOut);
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
        document.body.removeChild(this.tooltip.parentElement);
      }
    },

    createPopper() {
      this.$nextTick(() => {
        if (this.visibleArrow) {
          this.appendArrow(this.tooltip);
        }

        if (this.appendToBody && !this.appendedToBody) {
          this.appendedToBody = true;
          document.body.appendChild(this.tooltip.parentElement);
        }

        if (this.popperJS && this.popperJS.destroy) {
          this.popperJS.destroy();
        }

        if (this.boundariesSelector) {
          const boundariesElement = document.querySelector(
            this.boundariesSelector
          );

          if (boundariesElement) {
            this.popperOptions.modifiers = Object.assign(
              {},
              this.popperOptions.modifiers
            );
            this.popperOptions.modifiers.preventOverflow = Object.assign(
              {},
              this.popperOptions.modifiers.preventOverflow
            );
            this.popperOptions.modifiers.preventOverflow.boundariesElement = boundariesElement;
          }
        }

        this.popperOptions.onCreate = () => {
          this.$emit("created", this);
          this.$nextTick(this.updatePopper);
        };

        this.popperJS = new Popper(
          this.referenceElm,
          this.tooltip,
          this.popperOptions
        );
      });
    },

    destroyPopper() {
      off(this.referenceElm, "click", this.doToggle);
      off(this.referenceElm, "mouseup", this.doClose);
      off(this.referenceElm, "mousedown", this.doShow);
      off(this.referenceElm, "focus", this.doShow);
      off(this.referenceElm, "blur", this.doClose);
      off(this.referenceElm, "mouseout", this.onMouseOut);
      off(this.referenceElm, "mouseover", this.onMouseOver);
      off(document, "click", this.handleDocumentClick);

      this.showPopper = false;
      this.doDestroy();
    },

    appendArrow(element) {
      if (this.appendedArrow) {
        return;
      }

      this.appendedArrow = true;

      const arrow = document.createElement("div");
      arrow.setAttribute("x-arrow", "");
      arrow.className = "tooltip_arrow";
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
      if (
        !this.$el ||
        !this.referenceElm ||
        this.$el.contains(e.target) ||
        this.referenceElm.contains(e.target) ||
        !this.tooltip ||
        this.tooltip.contains(e.target)
      ) {
        return;
      }

      this.$emit("documentClick");

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
