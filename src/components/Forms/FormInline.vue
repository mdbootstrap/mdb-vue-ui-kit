<template>
  <component :is="tag" :class="className">
    <slot></slot>
  </component>
</template>

<script>
const FormInline = {
  props: {
    tag: {
      type: String,
      default: "form"
    },
    classes: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        'form-inline',
        this.classes
      ];
    }
  }
};

export default FormInline;
export { FormInline as mdbFormInline };
</script>

<style scoped>

</style>
