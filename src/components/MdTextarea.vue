<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClass"/>
      <textarea :is="tag" :class="className" :type="type" :placeholder="placeholder" :disabled="disabled" @focus="focus" @blur="blur" ref="input" :rows="rows"/>
      <label v-if="label" :class="labelClass" ref="label" @click="focus">{{label}}
      </label><slot></slot>
  </div>
</template>

<script>
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';

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
    }
  },
  data() {
    return {
      className: classNames(
        'form-control md-textarea'
      ),
      wrapperClass: classNames(
        'md-form'
      ),
      iconClass: classNames(
        'fa',
        this.icon ? 'fa-'+this.icon : '',
        'prefix'
      ),
      labelClass: classNames(
        this.placeholder ? 'active': '',
        this.disabled ? 'disabled' : ''
      ),
    };
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
