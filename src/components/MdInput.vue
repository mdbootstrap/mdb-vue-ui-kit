<template>
  <div :class="wrapperClass">
      <i v-if="icon" :class="iconClass"/>
      <input :is="tag" :class="className" :type="type" :placeholder="placeholder" :disabled="disabled" @focus="focus" @blur="blur" @click="wave">
      <label v-if="label" :class="labelClass">{{label}}</label>
      <slot></slot>
    </input>
  </div>
</template>

<script>
import classNames from 'classnames';
import 'font-awesome/css/font-awesome.min.css';
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
    label: {
      type: String
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
      type: [String, Boolean]
    },
    navInput: {
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
    }
  },
  data() {
    return {
      className: classNames(
        'form-control'
      ),
      wrapperClass: classNames(
        this.navInput ? '' : 'md-form',
        this.size ? 'form-' + this.size : '',
        this.waves ? 'ripple-parent' : ''
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
      if (label) {
        label.classList.add('active');
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "transparent";
        this.$el.firstElementChild.style.boxShadow = "none";
      }
    },
    blur(e) {
      const label = e.path[0].nextElementSibling;
      if (label) {
        if (label.parentElement.childNodes[2].value == ''){
          label.classList.remove('active');
        }
      }
      // styles for navbar input
      if (this.navInput) {
        this.$el.firstElementChild.style.borderColor = "#fff";
      }
    }
  },
  mixins: [waves]
};
</script>

<style scoped>

</style>
