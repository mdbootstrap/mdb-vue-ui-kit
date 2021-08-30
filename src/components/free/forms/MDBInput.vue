<template>
  <input
    v-if="!wrap"
    :class="inputClassName"
    v-bind="attrs"
    :id="uid"
    :value="inputValue"
    @input="handleInput"
    ref="inputRef"
  />
  <label
    v-if="label && !wrap"
    ref="labelRef"
    :class="labelClassName"
    :for="uid"
  >
    {{ label }}
  </label>
  <slot v-if="!wrap" />
  <div v-if="!wrap && validFeedback" :class="validFeedbackClassName">
    {{ validFeedback }}
  </div>
  <div v-if="!wrap && customInvalidFeedback" :class="invalidFeedbackClassName">
    {{ customInvalidFeedback }}
  </div>
  <component
    v-if="wrap"
    :is="tag"
    :class="wrapperClassName"
    :style="validationStyle"
  >
    <slot name="prepend" />
    <input
      :class="inputClassName"
      v-bind="attrs"
      :id="uid"
      :value="inputValue"
      @input="handleInput"
      ref="inputRef"
    />
    <label v-if="label" ref="labelRef" :class="labelClassName" :for="uid">
      {{ label }}
    </label>
    <slot></slot>
    <div v-if="validFeedback" :class="validFeedbackClassName">
      {{ validFeedback }}
    </div>
    <div v-if="customInvalidFeedback" :class="invalidFeedbackClassName">
      {{ customInvalidFeedback }}
    </div>
    <div v-if="formOutline" class="form-notch">
      <div
        class="form-notch-leading"
        :style="{ width: `${notchLeadingWidth}px` }"
      ></div>
      <div
        class="form-notch-middle"
        :style="{ width: `${notchMiddleWidth}px` }"
      ></div>
      <div class="form-notch-trailing"></div>
    </div>
  </component>
  <div v-if="formText" class="form-text">{{ formText }}</div>
</template>

<script>
import {
  computed,
  ref,
  onMounted,
  onUpdated,
  watchEffect,
  onUnmounted,
  watch
} from "vue";
import { on, off } from "../../utils/MDBEventHandlers";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBInput",
  props: {
    id: String,
    label: String,
    labelClass: String,
    modelValue: [String, Number],
    size: String,
    formOutline: {
      type: Boolean,
      default: true
    },
    wrapperClass: String,
    inputGroup: {
      type: [Boolean, String],
      default: false
    },
    wrap: {
      type: Boolean,
      default: true
    },
    formText: String,
    white: Boolean,
    validationEvent: String,
    isValidated: Boolean,
    isValid: Boolean,
    validFeedback: String,
    invalidFeedback: String,
    tooltipFeedback: {
      type: Boolean,
      default: false
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
    const labelRef = ref(null);
    const showPlaceholder = ref(false);
    const notchLeadingWidth = ref(9);
    const notchMiddleWidth = ref(0);
    const uid = props.id || getUID("MDBInput-");

    const wrapperClassName = computed(() => {
      return [
        props.formOutline && "form-outline",
        inputGroupClassName.value,
        props.white && "form-white",
        props.wrapperClass
      ];
    });
    const inputClassName = computed(() => {
      return [
        "form-control",
        props.size && `form-control-${props.size}`,
        inputValue.value && "active",
        showPlaceholder.value && "placeholder-active",
        isInputValidated.value && isInputValid.value && "is-valid",
        isInputValidated.value && !isInputValid.value && "is-invalid"
      ];
    });
    const labelClassName = computed(() => {
      return ["form-label", props.labelClass];
    });

    const inputGroupClassName = computed(() => {
      if (!props.inputGroup) {
        return;
      }
      return props.inputGroup !== true
        ? `input-group input-group-${props.inputGroup}`
        : "input-group";
    });

    const validationStyle = computed(() => {
      return props.inputGroup && isInputValidated.value
        ? { marginBottom: "1rem" }
        : "";
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
    const defaultValidatorInvalidFeedback = ref("");
    const customInvalidFeedback = computed(() => {
      if (
        isInputValidated.value &&
        !isInputValid.value &&
        props.validationEvent
      ) {
        return defaultValidatorInvalidFeedback.value;
      }
      return props.invalidFeedback;
    });

    const handleValidation = e => {
      isInputValid.value = e.target.checkValidity();
      if (!isInputValid.value) {
        defaultValidatorInvalidFeedback.value = e.target.validationMessage;
      }
      isInputValidated.value = true;
    };

    const bindValidationEvents = () => {
      if (props.validationEvent === "submit") return;
      on(inputRef.value, props.validationEvent, handleValidation);
    };

    function calcNotch() {
      if (labelRef.value) {
        notchMiddleWidth.value = labelRef.value.clientWidth * 0.8 + 8;
      }
    }

    function setPlaceholder() {
      if (attrs.placeholder && !labelRef.value) {
        showPlaceholder.value = true;
      } else {
        showPlaceholder.value = false;
      }
    }

    function handleInput(e) {
      inputValue.value = e.target.value;
      emit("update:modelValue", inputValue.value);
    }

    onMounted(() => {
      calcNotch();
      setPlaceholder();

      if (props.validationEvent) {
        bindValidationEvents();
      }
    });

    onUpdated(() => {
      calcNotch();
      setPlaceholder();
    });

    onUnmounted(() => {
      off(inputRef.value, props.validationEvent, handleValidation);
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
      uid,
      inputValue,
      labelRef,
      handleInput,
      wrapperClassName,
      inputClassName,
      labelClassName,
      validFeedbackClassName,
      invalidFeedbackClassName,
      validationStyle,
      customInvalidFeedback,
      notchLeadingWidth,
      notchMiddleWidth,
      attrs,
      props
    };
  }
};
</script>
