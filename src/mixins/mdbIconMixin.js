export const mdbIconMixin = {
  props: {
    icon: {
      type: String
    },
    size: {
      type: [Boolean, String],
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    },
    pull: {
      type: [Boolean, String],
      default: false
    },
    border: {
      type: Boolean,
      default: false
    },
    spin: {
      type: Boolean,
      default: false
    },
    pulse: {
      type: Boolean,
      default: false
    },
    rotate: {
      type: [Boolean, String],
      default: false
    },
    flip: {
      type: [Boolean, String],
      default: false
    },
    inverse: {
      type: [Boolean, String],
      default: false
    },
    stack: {
      type: [Boolean, String],
      default: false
    },
    color: {
      type: String,
      default: ''
    },
    far: {
      type: Boolean,
      default: false
    },
    regular: {
      type: Boolean,
      default: false
    },
    fal: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    fab: {
      type: Boolean,
      default: false
    },
    fad: {
      type: Boolean,
      default: false
    },
    duotone: {
      type: Boolean,
      default: false
    },
    brands: {
      type: Boolean,
      default: false
    },
    openIcon: {
      type: String
    },
    slimIcon: {
      type: String
    },
    customIconClass: {
      type: [String, Array]
    }
  },
  computed: {
    iconClass() {
      return [
        this.far || this.regular ? 'far' :
          this.fal || this.light ? 'fal' :
            this.fab || this.brands ? 'fab' :
              this.fad || this.duotone ? 'fad' : 'fas',
        this.slimIcon ? 'fa-' + this.slimIcon :
          this.openIcon && this.isCollapsed ? 'fa-' + this.openIcon :
            this.submenuIcon ? 'fa-' + this.submenuIcon :
              this.togglerIcon ?  'fa-' + this.togglerIcon :
                this.icon && 'fa-' + this.icon,
        this.size && 'fa-' + this.size,
        this.fixed && 'fa-fw',
        this.pull && 'fa-pull-' + this.pull,
        this.border && 'fa-border',
        this.spin && 'fa-spin',
        this.pulse && 'fa-pulse',
        this.rotate && 'fa-rotate-' + this.rotate,
        this.flip && 'fa-flip-' + this.flip,
        this.inverse && 'fa-inverse',
        this.stack && 'fa-' + this.stack,
        this.iconColor === '' || !this.iconColor ? null : 'text-' + this.iconColor,
        this.color && !this.iconColor ? 'text-' + this.color : null,
        this.togglerSize && 'fa-' + this.togglerSize,
        this.customIconClass
      ];
    }
  }
};