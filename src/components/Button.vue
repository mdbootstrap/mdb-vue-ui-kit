<template>
  <component :is="tag" :class="btnClasses" :type="type" :role="role" @click="handleClick">
    <fa v-if="(icon && !iconRight)" :icon="icon" :class="iconClasses" :color="iconColor"/>
    <slot></slot>
    <fa v-if="(icon && iconRight)" :icon="icon" :class="iconClasses" :color="iconColor"/>
  </component>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';
import Fa from './Fa';

const Btn =  {
  components: {
    Fa
  },
  props: {
    tag: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: "default"
    },
    outline: {
      type: String,
    },
    size: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    role: {
      type: String
    },
    type: {
      type: String
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    iconLeft: {
      type: Boolean,
      default: false
    },
    iconRight: {
      type: Boolean,
      default: false
    },
    waves: {
      type: Boolean,
      default: true
    },
    darkWaves: {
      type: Boolean,
      default: false
    },
    gradient: {
      type: String
    },
    rounded: {
      type: Boolean,
      default: false
    },
    floating: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    action: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    save: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: [String, Array],
      default: null
    },
    iconColor: {
      type: String
    }
  },
  methods: {
    handleClick(e) {
      this.wave(e);
      this.$emit('click', this);
    }
  },
  computed: {
    btnClasses() {
      return classNames(
        this.floating ? 'btn-floating' : 'btn',
        this.outline ? 'btn-outline-' + this.outline : this.flat ? 'btn-flat' : this.transparent ? '' : 'btn-' + this.color,
        this.size ? 'btn-' + this.size : '',
        this.block ? 'btn-block' : '',
        this.disabled ? 'disabled' : '',
        this.gradient ? this.gradient + '-gradient' : '',
        this.rounded ? 'btn-rounded' : '',
        this.action ? 'btn-action' : '',
        this.save ? 'btn-save' : '',
        this.active ? 'active' : '',
        this.waves ? 'ripple-parent' : ''
      );
    },
    iconClasses() {
      return classNames(
        this.iconClass
      );
    }
  },
  mixins: [waves]
};

export default Btn;
export { Btn as mdbBtn };

</script>

<style scoped>
.modal-dialog .form-elegant .btn .fa {
    color: #2196f3!important; }

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28), 0 4px 15px 0 rgba(36, 133, 255, 0.15); }

.form-elegant .z-depth-1a {
  -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25);
  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26), 0 4px 12px 0 rgba(121, 155, 254, 0.25); }

</style>
