<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClasses"/>
    <label v-if="label && basic" :class="labelClass" @click="focus" ref="label" :for="id">{{label}}</label>
    <component 
      :is="tag"
      :id="id"
      :class="className"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @focus="focus"
      @blur="blur"
      @click="wave"
      @change="onChange"
      ref="input"
      @input="onChange"
      :name="name"
      :required="required"
      :checked="innerChecked"
      :value="innerValue"
    />  
    <label v-if="label && !basic" :class="labelClass" @click="focus" ref="label" :for="id">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import waves from '../mixins/waves';

const Input = {
  props: {
    basic: {
      type: Boolean,
      default: false
    },
    name: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
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
    invalid: {
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
        {
          'validate valid': this.valid,
          'validate invalid': this.invalid,
          'filled-in': this.filled,
          'with-gap': this.gap
        },
        this.type === 'checkbox' ? this.gap ? false : 'form-check-input' : false,
        this.type === 'radio' ? 'form-check-input' : false
      );
    },
    wrapperClass() {
      if (!this.basic) {
        return classNames(
          (this.type === 'checkbox' || this.type === 'radio') && this.inline ?
            'form-check' : (this.type === 'checkbox' || this.type === 'radio') ? 'form-check my-3' : 'md-form',
          this.size && 'form-' + this.size,
          this.waves && 'ripple-parent'
        );
      }

      return null;
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
        {
          'active': (this.placeholder || this.isTouched || this.innerValue !==''),
          'disabled': this.disabled,
          'form-check-label mr-5': (this.type === 'checkbox' || this.type === 'radio')
        },
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
      if (this.type == "text" || this.type == "email" || this.type == "password" || this.type == "radio") {
        this.$emit('input', e.target.value);
        this.innerValue = e.target.value;
      }
      if (this.type == "checkbox") {
        this.$emit('change', e.target.checked);
        this.innerChecked = e.target.checked;
      }
      this.$forceUpdate();
    },
  },
  mixins: [waves]
};

export default Input;
export { Input as mdbInput };
</script>

<style scoped>
.navbar .md-form {
  margin-top: 0;
  margin-bottom: 0;
}
</style>
