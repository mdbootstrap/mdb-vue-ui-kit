<template>
  <component :is="tag" v-if="wrap" :class="wrapperClassName">
    <input
      :class="inputClassName"
      type="radio"
      v-bind="attrs"
      :id="uid"
      @change="handleChange"
      v-model="inputValue"
    />
    <label v-if="label" :class="labelClassName" :for="uid">
      {{ label }}
    </label>
  </component>
  <input
    v-if="!wrap"
    :class="inputClassName"
    type="radio"
    v-bind="attrs"
    :id="uid"
    @change="handleChange"
    v-model="inputValue"
  />
  <label v-if="!wrap && label" :class="labelClassName" :for="uid">
    {{ label }}
  </label>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBRadio",
  props: {
    id: String,
    label: String,
    inline: Boolean,
    modelValue: String,
    wrapperClass: String,
    labelClass: String,
    btnCheck: Boolean,
    wrap: {
      type: Boolean,
      default: true
    },
    formCheck: {
      type: Boolean,
      default: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const inputValue = ref(props.modelValue || false);
    const uid = props.id || getUID("MDBCheckbox-");

    const wrapperClassName = computed(() => {
      return [
        props.formCheck && !props.btnCheck ? "form-check" : "",
        props.inline && "form-check-inline"
      ];
    });
    const inputClassName = computed(() => {
      return [props.btnCheck ? "btn-check" : "form-check-input"];
    });
    const labelClassName = computed(() => {
      return [props.labelClass || "form-check-label"];
    });

    function handleChange(e) {
      emit("update:modelValue", e.target.value);
    }

    watchEffect(() => (inputValue.value = props.modelValue));

    return {
      inputValue,
      handleChange,
      wrapperClassName,
      inputClassName,
      labelClassName,
      uid,
      attrs,
      props
    };
  }
};
</script>
