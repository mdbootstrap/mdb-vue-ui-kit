<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClasses"/>
    <label v-if="label && basic" :class="labelClasses" @click="focus" ref="label" :for="id">{{label}}</label>
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
      @input="onInput"
      :name="name"
      :required="required"
      :checked="innerChecked"
      :value="innerValue"
    />
    <label v-if="label && !basic" :class="labelClasses" @click="focus" ref="label" :for="id">{{label}}</label>
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
    },
    labelClass: {
      type: [Array, String]
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
    brands: {
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
  mounted() {
    if (this.type === "checkbox") {
      this.$emit('change', this.innerChecked);
    } else if (this.type === "radio") {
      if (this.checked) {
        this.$emit('input', this.innerValue);
      }
    } else {
      this.$emit('input', this.innerValue);
    }
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
        this.far || this.regular ? 'far' :
          this.fal || this.light ? 'fal' :
            this.fab || this.brands ? 'fab' : 'fas',
        'prefix fa-' + this.icon,
        this.isTouched && 'active',
        this.iconClass
      );
    },
    labelClasses() {
      return classNames(
        {
          'active': (this.placeholder || this.isTouched || this.innerValue !==''),
          'disabled': this.disabled,
          'form-check-label mr-5': (this.type === 'checkbox' || this.type === 'radio')
        },
        this.labelColor && 'text-' + this.labelColor,
        this.labelClass
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
      if (this.type === "checkbox") {
        this.$emit('change', e.target.checked);
        this.innerChecked = e.target.checked;
      }
      else {
        this.$emit('change', e.target.value);
      }
    },
    onInput(e) {
      if (this.type !== "checkbox") {
        this.$emit('input', e.target.value);
        this.innerValue = e.target.value;
      }
    }
  },
  mixins: [waves],
  watch: {
    value(val) {
      this.$refs.input.value = val;
      this.innerValue = val;
      this.$emit('change', this.innerValue);
    }
  }
};

export default Input;
export { Input as mdbInput };
</script>

<style scoped>
.navbar .md-form {
  margin-top: 0;
  margin-bottom: 0;
}

.form-dark input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%; }

.form-dark .font-small {
  font-size: 0.8rem; }

.form-dark input[type=email]:focus:not([readonly]) + label {
  color: #fff; }

.form-dark input[type="checkbox"] + label:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border: 1.5px solid #fff;
  border-radius: 1px;
  margin-top: 2px;
  -webkit-transition: 0.2s;
  transition: 0.2s; }

.form-dark input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  -webkit-backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%; }

.form-dark input[type=password]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851; }


.form-dark input[type=email]:focus:not([readonly]) {
  border-bottom: 1px solid #00C851;
  -webkit-box-shadow: 0 1px 0 0 #00C851;
  box-shadow: 0 1px 0 0 #00C851; }


.form-dark [type="checkbox"] + label:before {
  top: 2px;
  width: 15px;
  height: 15px; }


</style>
