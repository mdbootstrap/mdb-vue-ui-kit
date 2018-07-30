<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClasses"/>
    <textarea
              :is="tag"
              :class="textareaClass"
              :type="type"
              :placeholder="placeholder"
              :disabled="disabled" @focus="focus"
              @blur="blur"
              ref="input"
              :rows="rows"
              @input="onChange"
              v-model="innerValue" />
    <label v-if="label" :class="labelClass" ref="label" @click="focus">{{label}}
    </label><slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
// import 'font-awesome/css/font-awesome.min.css';
// import Fa from './Fa';

const MdTextarea = {
  props: {
    tag: {
      type: String,
      default: "textarea"
    },
    label: {
      type: String
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    rows: {
      type: Number
    },
    value: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String
    }
  },

  data() {
    return {
      isTouched: false,
      innerValue: this.value
    };
  },
  computed: {
    textareaClass() {
      return classNames(
        'form-control md-textarea'
      );
    },
    wrapperClass() {
      return classNames(
        'md-form'
      );
    },
    iconClasses() {
      return classNames(
        'prefix fa fa-' + this.icon,
        this.isTouched && 'active',
        this.iconClass
      );
    },
    labelClass() {
      return classNames(
        (this.isTouched || this.placeholder || this.innerValue !== '') && 'active',
        this.disabled && 'disabled'
      );
    }
  },
  methods: {
    focus(e) {
      if (this.label && !this.disabled) {
        this.isTouched = true;
        this.$refs.input.focus();
      }
    },
    blur(e) {
      this.isTouched = false;
      this.$refs.input.blur();
    },
    onChange(e) {
      this.$emit('input', e.target.value);
      this.innerValue = e.target.value;
    }
  }
};

export default MdTextarea;
export { MdTextarea as mdbTextarea };
</script>

<style scoped>
</style>
