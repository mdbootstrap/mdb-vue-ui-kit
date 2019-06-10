import classNames from 'classnames';
import waves from './waves';
import mdbClassMixin from './mdbClassMixin';

export const mdbInput = {
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
      type: [String, Number, Boolean],
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
    validation: {
      type: Boolean
    },
    customValidation: {
      type: Boolean
    },
    isValid: {
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
    },
    validFeedback: {
      type: [String, Boolean],
      default: false
    },
    invalidFeedback: {
      type: [String, Boolean],
      default: false
    },
    small: {
      type: String
    },
    bg: {
      type: Boolean
    },
    radioValue: {
      type: String
    }
  },
  data() {
    return {
      innerValue: this.value,
      innerChecked: this.checked,
      isTouched: this.active
    };
  },
  mounted() {
    if (this.type === "checkbox" || this.type === "radio") {
      this.$emit('getDefaultValue', this.inputChecked);
    } else {
      this.$emit('getDefaultValue', this.innerValue);
    }
  },
  computed: {
    inputChecked() {
      if (this.type === "checkbox") {
        if (this.value === true || this.innerChecked === true) {
          return true;
        }
        return false;
      }
      if (this.type === "radio") {
        if (this.value === this.radioValue || this.innerChecked) {
          return true;
        }
        return false;
      }
      return this.value;
    },
    inputClasses() {
      return classNames(
        'form-control',
        this.validation ? this.isValid ? 'is-valid' : 'is-invalid' : false,
        this.customValidation ? this.isValid ? 'is-valid' : 'is-invalid' : false,
        this.size && 'form-control-' + this.size,
        {
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
          'form-check' : (this.type === 'checkbox' || this.type === 'radio') ? 'form-check' : false,
        this.basic || this.type === 'checkbox' || this.type === 'radio' ? false : 'md-form',
        this.outline && 'md-outline',
        this.bg && 'md-bg',
        this.waves && 'ripple-parent',
        this.doesItGetTheGroupClass && this.size ? `input-group input-group-${this.size}` :
          this.doesItGetTheGroupClass && !this.size ? 'input-group' :
            !this.doesItGetTheGroupClass && this.size ? `form-${this.size}` : false,
        this.wrapperClass,
        this.mdbClass
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
          'active': (this.placeholder || this.isTouched || this.innerValue !=='') && this.type!=='checkbox' && this.type!=='radio',
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
    focus() {
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
    blur() {
      this.isTouched = false;
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "#fff";
      }
    },
    onChange(e) {
      if (this.type === "checkbox") {
        this.$emit('change', e.target.checked);
        this.$emit('input', e.target.checked);
        this.innerChecked = e.target.checked;
      } else if (this.type === "radio") {
        this.innerChecked = e.target.checked;
        if (this.radioValue) {
          this.$emit('input', this.radioValue);
        }
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
  mixins: [waves, mdbClassMixin],
  watch: {
    value(val) {
      this.$refs.input.value = val;
      this.innerValue = val;
      this.$emit('change', this.innerValue);
    }
  }
};
