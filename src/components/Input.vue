<template>
  <component
    v-if="noWrapper"
    ref="input"
    :is="whatTagIsThis"
    :id="id"
    :class="inputClasses"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :name="name"
    :required="required"
    :checked="innerChecked"
    :value="innerValue"
    :rows="rows"
    :maxlength="maxlength"
    :aria-label="label || ariaLabel || placeholder"
    :aria-describedby="ariaDescribedBy"
    :aria-labelledby="ariaLabelledBy"
    @focus="focus"
    @blur="blur"
    @click="wave"
    @change="onChange"
    @input="onInput"
  >{{whatTagIsThis==='textarea' && value}}</component>
  <div :class="wrapperClasses" v-else>
    <i v-if="icon" :class="iconClasses"/>
    <div class="input-group-prepend" v-if="$slots.prepend" :id="prependSlotID">
      <slot name="prepend"></slot>
    </div>
    <component
      ref="input"
      :is="whatTagIsThis"
      :id="id"
      :class="inputClasses"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :name="name"
      :required="required"
      :checked="innerChecked"
      :value="innerValue"
      :rows="rows"
      :maxlength="maxlength"
      :aria-label="label || ariaLabel || placeholder"
      :aria-describedby="ariaDescribedBy"
      :aria-labelledby="ariaLabelledBy"
      @focus="focus"
      @blur="blur"
      @click="wave"
      @change="onChange"
      @input="onInput"
    >{{whatTagIsThis==='textarea' && value}}</component>
    <label v-if="label" :class="labelClasses" @click="focus" ref="label" :for="id">{{label}}</label>
    <label v-if="isThisCheckboxLabeless" :class="labelClasses" @click="focus" ref="label" :for="id"/>
    <slot></slot>
    <div class="input-group-append" v-if="$slots.append" :id="appendSlotID">
      <slot name="append"></slot>
    </div>
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
    },
    rows: {
      type: Number
    },
    wrapperClass: {
      type: [String, Array]
    },
    noWrapper: {
      type: Boolean,
      value: false
    },
    ariaLabel: {
      type: String
    },
    ariaDescribedBy: {
      type: String
    },
    ariaLabelledBy: {
      type: String
    },
    prependSlotID: {
      type: String
    },
    appendSlotID: {
      type: String
    },
    inputClass: {
      type: String
    },
    maxlength: {
      type: [String, Number]
    },
    outline: {
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
      this.$emit('getDefaultValue', this.innerChecked);
    } else if (this.type === "radio") {
      if (this.checked) {
        this.$emit('getDefaultValue', this.innerValue);
      }
    } else {
      this.$emit('getDefaultValue', this.innerValue);
    }
  },
  computed: {
    inputClasses() {
      return classNames(
        'form-control',
        {
          'validate valid': this.valid,
          'validate invalid': this.invalid,
          'filled-in': this.filled,
          'with-gap': this.gap
        },
        this.type === 'checkbox' ? this.gap ? false : 'form-check-input' : false,
        this.type === 'radio' ? 'form-check-input' : false,
        this.type === 'textarea' && !this.basic ? 'md-textarea' : false,
        this.inputClass && this.inputClass
      );
    },
    wrapperClasses() {
      return classNames(
        (this.type === 'checkbox' || this.type === 'radio') && this.inline ?
          'form-check' : (this.type === 'checkbox' || this.type === 'radio') ? 'form-check my-3' : false,
        this.basic ? false : 'md-form',
        this.outline && 'md-outline',
        this.waves && 'ripple-parent',
        this.doesItGetTheGroupClass && this.size ? `input-group input-group-${this.size}` :
          this.doesItGetTheGroupClass && !this.size ? 'input-group' :
            !this.doesItGetTheGroupClass && this.size ? `form-${this.size}` : false,
        this.wrapperClass
      );
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
          'active': (this.placeholder || this.isTouched || this.innerValue !=='') && this.type!=='checkbox',
          'disabled': this.disabled,
          'form-check-label': (this.type === 'checkbox' || this.type === 'radio'),
          'mr-5': !this.isThisCheckboxLabeless
        },
        this.labelColor && 'text-' + this.labelColor,
        this.labelClass
      );
    },
    // tagname helper
    whatTagIsThis() {
      if (this.type==='textarea') {
        return 'textarea';
      }
      return this.tag;
    },
    // classname helper
    doesItGetTheGroupClass() {
      return (this.$slots.prepend || this.$slots.append) || (this.basic && this.type==='textarea');
    },
    // checkbox with no label (say, has to fit vertically & horizontally) helper
    isThisCheckboxLabeless() {
      return this.type==='checkbox' && typeof this.label==="undefined";
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
  height: 15px;
}

.md-form textarea~label.active{
	color: inherit;
}


</style>
