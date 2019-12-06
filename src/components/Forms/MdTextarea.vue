<template>
  <div :class="wrapperClasses">
    <i v-if="icon" :class="iconClasses"/>
    <div class="input-group-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <textarea
      :is="tag"
      :class="textareaClass"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      ref="input"
      :rows="rows"
      :aria-label="label"
      @focus="focus"
      @blur="blur"
      @input="onInput"
      @change="onChange"
      v-model="innerValue"
      ></textarea>
    <label v-if="label" :class="labelClass" ref="label" @click="focus" :for="id">{{label}}</label>
    <slot></slot>
    <div class="input-group-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
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
      type: [Number, String],
      default: 1
    },
    value: {
      type: String,
      default: ''
    },
    iconClass: {
      type: String
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
    outline: {
      type: Boolean,
      default: false
    },
    brands: {
      type: Boolean,
      default: false
    },
    basic: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    wrapperClass: {
      type: [String, Array]
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
      return [
        'form-control',
        this.basic ? false : 'md-textarea'
      ];
    },
    wrapperClasses() {
      return [
        this.basic ? 'form-group' : 'md-form',
        this.outline && 'md-outline',
        this.doesItGetTheGroupClass && 'input-group',
        this.size && this.doesItGetTheGroupClass ? `input-group-${this.size}` :
          this.size && !this.doesItGetTheGroupClass ? `form-${this.size}` : false,
        this.wrapperClass
      ];
    },
    iconClasses() {
      return [
        this.far || this.regular ? 'far' :
          this.fal || this.light ? 'fal' :
            this.fab || this.brands ? 'fab' : 'fas',
        'prefix fa-' + this.icon,
        this.isTouched && 'active',
        this.iconClass
      ];
    },
    labelClass() {
      return [
        (this.isTouched || this.placeholder || this.innerValue !== '') && 'active',
        this.disabled && 'disabled'
      ];
    },
    // classname helper:
    doesItGetTheGroupClass() {
      return (this.$slots.prepend || this.$slots.append) || this.basic;
    }
  },
  mounted() {
    this.$emit('input', this.innerValue);
  },
  methods: {
    focus(e) {
      this.$emit('focus', e);
      if (this.label && !this.disabled) {
        this.isTouched = true;
        this.$refs.input.focus();
      }
    },
    blur(e) {
      this.$emit('blur', e);
      this.isTouched = false;
      this.$refs.input.blur();
    },
    onChange(e) {
      this.$emit('change', e.target.value);
      this.innerValue = e.target.value;
    },
    onInput(e) {
      this.$emit('input', e.target.value);
      this.innerValue = e.target.value;
    }
  },
  watch: {
    value(val) {
      this.$refs.input.value = val;
      this.innerValue = val;
      this.$emit('change', this.innerValue);
    }
  }
};

export default MdTextarea;
export { MdTextarea as mdbTextarea };
</script>

<style scoped>

</style>
