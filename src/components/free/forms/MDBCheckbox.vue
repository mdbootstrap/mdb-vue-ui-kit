<template>
  <component :is="tag" v-if="wrap" :class="wrapperClassName">
    <input
      :class="inputClassName"
      type="checkbox"
      v-bind="attrs"
      :id="uid"
      :checked="inputValue"
      @change="handleChange"
    />
    <label v-if="label" :class="labelClassName" :for="uid">
      {{ label }}
    </label>
  </component>
  <input
    v-if="!wrap"
    :class="inputClassName"
    type="checkbox"
    v-bind="attrs"
    :id="uid"
    :checked="inputValue"
    @change="handleChange"
  />
  <label v-if="!wrap && label" :class="labelClassName" :for="uid">
    {{ label }}
  </label>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBCheckbox",
  props: {
    id: String,
    label: String,
    modelValue: Boolean,
    inline: Boolean,
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
    const inputValue = ref(props.modelValue);
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

    function handleChange() {
      inputValue.value = !inputValue.value;
      emit("update:modelValue", inputValue.value);
    }

    watchEffect(() => (inputValue.value = props.modelValue));

    return {
      wrapperClassName,
      inputClassName,
      labelClassName,
      inputValue,
      handleChange,
      uid,
      attrs,
      props
    };
  }
};
</script>
