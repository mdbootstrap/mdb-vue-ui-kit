<template>
  <component :is="tag" v-if="wrap" :class="wrapperClassName">
    <input
      :class="inputClassName"
      type="checkbox"
      v-bind="attrs"
      :id="uid"
      :checked="inputValue"
      @change="handleChange"
      :required="required ? true : null"
      :aria-required="required"
      ref="inputRef"
    />
    <label v-if="label" :class="labelClassName" :for="uid">
      {{ label }}
    </label>
    <div v-if="validFeedback" :class="validFeedbackClassName">
      {{ validFeedback }}
    </div>
    <div v-if="invalidFeedback" :class="invalidFeedbackClassName">
      {{ invalidFeedback }}
    </div>
  </component>
  <input
    v-if="!wrap"
    :class="inputClassName"
    type="checkbox"
    v-bind="attrs"
    :id="uid"
    :checked="inputValue"
    @change="handleChange"
    :required="required ? true : null"
    :aria-required="required"
    ref="inputRef"
  />
  <label v-if="!wrap && label" :class="labelClassName" :for="uid">
    {{ label }}
  </label>
  <div v-if="!wrap && validFeedback" :class="validFeedbackClassName">
    {{ validFeedback }}
  </div>
  <div v-if="!wrap && invalidFeedback" :class="invalidFeedbackClassName">
    {{ invalidFeedback }}
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from "vue";
import { on, off } from "../../utils/MDBEventHandlers";
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
    inputClass: String,
    btnCheck: Boolean,
    required: Boolean,
    validateOnChange: Boolean,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
    },
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
    const inputRef = ref("inputRef");
    const inputValue = ref(props.modelValue);
    const uid = props.id || getUID("MDBCheckbox-");

    const wrapperClassName = computed(() => {
      return [
        props.formCheck && !props.btnCheck ? "form-check" : "",
        props.inline && "form-check-inline",
        props.wrapperClass
      ];
    });
    const inputClassName = computed(() => {
      return [
        props.btnCheck ? "btn-check" : "form-check-input",
        props.inputClass && props.inputClass,
        isInputValidated.value && isInputValid.value && "is-valid",
        isInputValidated.value && !isInputValid.value && "is-invalid"
      ];
    });
    const labelClassName = computed(() => {
      return [props.labelClass || "form-check-label"];
    });

    const validFeedbackClassName = computed(() => {
      return props.tooltipFeedback ? "valid-tooltip" : "valid-feedback";
    });

    const invalidFeedbackClassName = computed(() => {
      return props.tooltipFeedback ? "invalid-tooltip" : "invalid-feedback";
    });

    // Validation ------------------------
    const isInputValidated = ref(props.isValidated);
    const isInputValid = ref(props.isValid);

    const handleValidation = e => {
      isInputValid.value = e.target.checkValidity();
      isInputValidated.value = true;
    };

    const bindValidationEvent = () => {
      on(inputRef.value, "change", handleValidation);
    };

    function handleChange() {
      inputValue.value = !inputValue.value;
      emit("update:modelValue", inputValue.value);
    }

    onMounted(() => {
      if (props.validateOnChange) {
        bindValidationEvent();
      }
    });

    onUnmounted(() => {
      off(inputRef.value, "change", handleValidation);
    });

    watchEffect(() => (inputValue.value = props.modelValue));

    watch(
      () => props.isValidated,
      value => (isInputValidated.value = value)
    );

    watch(
      () => props.isValid,
      value => (isInputValid.value = value)
    );

    return {
      inputRef,
      wrapperClassName,
      inputClassName,
      labelClassName,
      validFeedbackClassName,
      invalidFeedbackClassName,
      inputValue,
      handleChange,
      uid,
      attrs,
      props
    };
  }
};
</script>
