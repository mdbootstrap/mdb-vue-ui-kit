<template>
  <div :class="wrapperClass">
    <i v-if="icon" :class="iconClass"/>
      <textarea :is="tag" :class="className" :type="type" :placeholder="placeholder" :disabled="disabled" @focus="focus" @blur="blur"/>
      <label v-if="label" :class="labelClass">{{label}}
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
      type: [String, Boolean]
    }
  },
  data() {
    return {
      className: classNames(
        'md-textarea'
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
      const label = e.path[0].nextElementSibling;
      label.classList.add('active');
    },
    blur(e) {
      const label = e.path[0].nextElementSibling;
      if (label.parentElement.childNodes[2].value == ''){
        label.classList.remove('active');
      }
    }
  }
};
</script>

<style scoped>

</style>
