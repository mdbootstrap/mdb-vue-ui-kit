<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClasses"/>
    <input :is="tag"
           :id="id"
           :class="className"
           :type="type"
           :placeholder="placeholder"
           :disabled="disabled"
           @focus="focus"
           @blur="blur"
           @click="wave"
           :checked="checked"
           :value="value"
           @change="onChange"
           ref="input"
           @input="onChange"/>
    <label v-if="label" :class="labelClass" @click="focus" ref="label" :for="id">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

export default {
  props: {
    tag: {
      type: String,
      default: "input"
    },
    type: {
      type: String,
      default: "text"
    },
    id: {
      type: String
    },
    label: {
      type: String
    },
    filled: {
      type: Boolean
    },
    icon: {
      type: String,
    },
    placeholder: {
      type: String
    },
    size: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    navInput: {
      type: Boolean,
      default: false
    },
    gap: {
      type: Boolean,
      default: false
    },
    waves: {
      type: Boolean,
      default: false
    },
    wavesFixed: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    },
    labelColor: {
      type: String
    },
    iconClass: {
      type: String
    },
    inline: {
      type: Boolean
    },
    successMsg: {
      type: String
    },
    errorMsg: {
      type: String
    },
    valid: {
      type: Boolean
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      innerValue: this.value,
      innerRadio: '',
      isTouched: this.active,
      innerChecked: this.checked
    };
  },
  computed: {
    className() {
      return classNames(
        'form-control',
        this.valid && 'validate valid',
        this.invalid && 'validate invalid',
        this.type === 'checkbox' ? this.gap ? false : 'form-check-input' : false,
        this.type === 'radio' ? 'form-check-input' : false,
        this.filled && 'filled-in',
        this.gap ? 'with-gap' : false
      );
    },
    wrapperClass() {
      return classNames(
        (this.type === 'checkbox' || this.type === 'radio') && this.inline ?
          'form-check' : this.type === 'checkbox' || this.type === 'radio' ? 'form-check my-3' : 'md-form',
        this.size ? 'form-' + this.size : '',
        this.waves ? 'ripple-parent' : ''
      );
    },
    iconClasses(){
      return classNames(
        'prefix fa fa-' + this.icon,
        this.isTouched && 'active',
        this.iconClass
      );
    },
    labelClass() {
      return classNames(
        (this.placeholder || this.isTouched || this.innerValue !=='') ? 'active': '',
        this.disabled ? 'disabled' : '',
        this.type === 'checkbox' || this.type === 'radio' ? 'form-check-label mr-5' : false,
        this.labelColor && 'text-' + this.labelColor
      );
    }
  },
  methods: {
    focus(e) {
      this.isTouched = true;
      if (!this.disabled) {
        this.$refs.input.focus();
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "transparent";
        this.$el.firstElementChild.style.boxShadow = "none";
      }
    },
    blur(e) {
      this.isTouched = false;
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "#fff";
      }
    },
    onChange(e) {
      this.$emit('input', e.target.value);
      if (this.type == "text" || this.type == "email" || this.type == "password") {
        this.innerValue = e.target.value;
      }
      if (this.type == 'checkbox') {
        this.innerChecked = e.target.checked;
      }
      this.$forceUpdate();
    }
  },
  mixins: [waves]
};
</script>

<style scoped>
.navbar .md-form {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
