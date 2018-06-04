<template>
  <div :class="wrapperClass">
    <fa v-if="icon" :icon="icon" :class="iconClasses" :style="iconStyle"/>
    <textarea :is="tag" :class="textareaClass" :type="type" :placeholder="placeholder" :disabled="disabled" @focus="focus" @blur="blur" ref="input" :rows="rows" @input="$emit('input', $event.target.value)" v-model="value"></textarea>
    <label v-if="label" :class="labelClass" ref="label" @click="focus">{{label}}
    </label><slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
import Fa from './Fa';

export default {
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
    },
    iconStyle: {
      type: String
    }
  },
  components: {
    Fa
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
        'prefix',
        this.iconClass
      );
    },
    labelClass() {
      return classNames(
        this.placeholder ? 'active': '',
        this.disabled ? 'disabled' : ''
      );
    }
  },
  methods: {
    focus(e) {
      if (this.label && !this.disabled) {
        this.$refs.label.classList.add('active');
        this.$refs.input.focus();
      }
    },
    blur(e) {
      if (this.$refs.label.parentElement.childNodes[2].value == ''){
        this.$refs.label.classList.remove('active');
      }
    }
  }
};
</script>

<style scoped>
</style>
