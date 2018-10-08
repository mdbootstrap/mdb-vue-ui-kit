<template>
  <component :is="tag" :class="className">
    <slot></slot>
    <a v-if="close" flat class="close" @click.prevent="away">&times;</a>
  </component>
</template>

<script>
import classNames from 'classnames';

const ModalHeader = {
  props: {
    tag: {
      type: String,
      default: "div"
    },
    close: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    },
    textColor: {
      type: String
    }
  },
  data() {
    return {
      isStyled: false
    };
  },
  mounted() {
    if (this.$parent._props.success ||
        this.$parent._props.info ||
        this.$parent._props.warning ||
        this.$parent._props.danger) {
      this.isStyled = true;
    }
  },
  computed: {
    className() {
      return classNames(
        'modal-header',
        ((this.color && !this.textColor) || this.isStyled) ? this.color + ' white-text':
          this.textColor ? this.color + ' ' + this.textColor+'-text' : false
      );
    }
  },
  methods: {
    away() {
      this.$parent.$emit('close');
    }
  }
};

export default ModalHeader;
export { ModalHeader as mdbModalHeader };
</script>

<style scoped>
.form-elegant .modal-header {
    border-bottom: none;
}
.form-dark .modal-header {
    border-bottom: none;
}
</style>
