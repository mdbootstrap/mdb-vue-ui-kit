<template>
  <component :is="tag" :class="wrapperClassName">
    <textarea
      :class="textareaClassName"
      v-bind="attrs"
      :id="uid"
      :value="textareaValue"
      @input="handleInput"
      :rows="rows"
      ref="textareaRef"
    />
    <label v-if="label" ref="labelRef" class="form-label" :for="uid">
      {{ label }}
    </label>
    <div :class="validFeedbackClassName">
      {{ validFeedback }}
    </div>
    <div :class="invalidFeedbackClassName">
      {{ customInvalidFeedback }}
    </div>
    <div class="form-notch">
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
  onUnmounted
} from "vue";
import { on, off } from "../../utils/MDBEventHandlers";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBTextarea",
  props: {
    id: String,
    rows: {
      type: [String, Number],
      default: 4
    },
    label: String,
    modelValue: [String, Number],
    size: String,
    wrapperClass: String,
    formText: String,
    white: Boolean,
    validationEvent: String,
    isValidated: Boolean,
    isValid: Boolean,
    isInvalid: Boolean,
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
    const textareaRef = ref("textareaRef");
    const textareaValue = ref(props.modelValue);
    const labelRef = ref(null);
    const showPlaceholder = ref(false);
    const notchLeadingWidth = ref(9);
    const notchMiddleWidth = ref(0);
    const uid = props.id || getUID("MDBTextarea-");

    const wrapperClassName = computed(() => {
      return ["form-outline", props.white && "form-white", props.wrapperClass];
    });
    const textareaClassName = computed(() => {
      return [
        "form-control",
        props.size && `form-control-${props.size}`,
        textareaValue.value && "active",
        showPlaceholder.value && "placeholder-active",
        ((isInputValidated.value && isInputValid.value) || props.isValid) &&
          "is-valid",
        ((isInputValidated.value && !isInputValid.value) || props.isInvalid) &&
          "is-invalid"
      ];
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
      on(textareaRef.value, props.validationEvent, handleValidation);
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
      textareaValue.value = e.target.value;
      emit("update:modelValue", textareaValue.value);
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
      off(textareaRef.value, props.validationEvent, handleValidation);
    });

    watchEffect(() => (textareaValue.value = props.modelValue));

    return {
      textareaRef,
      uid,
      textareaValue,
      labelRef,
      handleInput,
      wrapperClassName,
      textareaClassName,
      validFeedbackClassName,
      invalidFeedbackClassName,
      customInvalidFeedback,
      notchLeadingWidth,
      notchMiddleWidth,
      attrs,
      props
    };
  }
};
</script>
