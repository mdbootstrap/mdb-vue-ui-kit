<template>
  <vue-numeric :empty-value="emptyValue" :min="min" :max="max" :minus="minus" :precision="precision" :placeholder="placeholder" :class="className" type="number" v-model="number"></vue-numeric>
</template>

<script>
import classNames from 'classnames';
import VueNumeric from 'vue-numeric';

export default {
  props: {
    emptyValue: {
      type: Number,
      default: 0
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    precision: {
      type: Number
    },
    placeholder: {
      type: String
    },
    separator: {
      type: String,
      default: ','
    },
    minus: {
      type: Boolean,
      default: false
    }
  },
  components: {
    VueNumeric
  },
  computed: {
    className() {
      return classNames(
        'form-control'
      );
    }
  },
  data: () => ({
    number: ''
  }),
};
</script>


<style scoped>
</style>
