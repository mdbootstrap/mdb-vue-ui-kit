<template>
  <div :class="wrapperClass">
    <fa v-if="icon" :icon="icon" :class="iconClasses" :style="iconStyle"/>
    <input :is="tag" :id="id" :class="className" :type="type" :placeholder="placeholder" :disabled="disabled" @focus="focus" @blur="blur" @click="wave" :checked="checked" :value="value" @change="change" ref="input" @input="$emit('input', $event.target.value)"/>
    <label v-if="label" :class="labelClass" @click="focus" ref="label" :for="id">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import waves from '../mixins/waves';
import Fa from './Fa';

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
      type: Boolean
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
      type: String,
      default: ''
    },
    labelColor: {
      type: String
    },
    iconClass: {
      type: String
    },
    iconStyle: {
      type: String
    },
    inline: {
      type: Boolean
    }
  },
  components: {
    Fa
  },
  data() {
    return {
      innerValue: this.value
    };
  },
  computed: {
    className() {
      return classNames(
        'form-control',
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
        'prefix',
        this.iconClass
      );
    },
    labelClass() {
      return classNames(
        this.placeholder ? 'active': '',
        this.disabled ? 'disabled' : '',
        this.type === 'checkbox' || this.type === 'radio' ? 'form-check-label mr-5' : false,
        this.labelColor && 'text-' + this.labelColor
      );
    }
  },
  methods: {
    focus(e) {
      if (this.label && !this.disabled) {
        this.$refs.label.classList.add('active');
        this.$refs.input.focus();
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "transparent";
        this.$el.firstElementChild.style.boxShadow = "none";
      }
    },
    blur(e) {
      if (this.label && !this.disabled && !this.placeholder) {
        if (this.$refs.label.parentElement.childNodes[2].value == ''){
          this.$refs.label.classList.remove('active');
        }
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "#fff";
      }
    },
    change(e) {
      this.innerValue = this.$refs.input.value;
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
