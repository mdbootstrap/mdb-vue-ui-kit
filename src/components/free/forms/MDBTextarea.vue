<template>
  <textarea
    v-if="!wrap"
    :class="textareaClassName"
    v-bind="$attrs"
    :id="uid"
    :value="textareaValue"
    @input="handleInput"
    :rows="rows"
    ref="textareaRef"
  />
  <label v-if="label && !wrap" ref="labelRef" class="form-label" :for="uid">
    {{ label }}
  </label>
  <div class="form-helper" v-if="!wrap && helper">{{ helper }}</div>
  <div class="form-helper" v-if="!wrap && counter">
    <div class="form-counter">{{ currentLength }} / {{ maxLength }}</div>
  </div>
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
    <textarea
      :class="textareaClassName"
      v-bind="$attrs"
      :id="uid"
      :value="textareaValue"
      @input="handleInput"
      :rows="rows"
      ref="textareaRef"
    />
    <label v-if="label" ref="labelRef" class="form-label" :for="uid">
      {{ label }}
    </label>
    <div class="form-helper" v-if="helper">{{ helper }}</div>
    <div class="form-helper" v-if="counter">
      <div class="form-counter">{{ currentLength }} / {{ maxLength }}</div>
    </div>
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

<script lang="ts">
export default {
  name: "MDBTextarea",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
  computed,
  ref,
  onMounted,
  onUpdated,
  watchEffect,
  watch,
  onUnmounted,
  useAttrs,
} from "vue";
import { on, off } from "../../utils/MDBEventHandlers";
import { getUID } from "../../utils/getUID";

const props = defineProps({
  id: String,
  rows: {
    type: [String, Number],
    default: 4,
  },
  label: String,
  modelValue: [String, Number],
  size: String,
  formOutline: {
    type: Boolean,
    default: true,
  },
  wrapperClass: String,
  inputGroup: {
    type: [Boolean, String],
    default: false,
  },
  wrap: {
    type: Boolean,
    default: true,
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
    default: false,
  },
  tag: {
    type: String,
    default: "div",
  },
  helper: String,
  counter: Boolean,
  maxLength: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue", "on-validate"]);

const attrs = useAttrs();

const textareaRef = ref<HTMLTextAreaElement | string>("textareaRef");
const textareaValue = ref(props.modelValue);
const labelRef = ref<HTMLLabelElement | null>(null);
const showPlaceholder = ref(false);
const notchLeadingWidth = ref(9);
const notchMiddleWidth = ref(0);
const uid = props.id || getUID("MDBTextarea-");

const wrapperClassName = computed(() => {
  return [
    props.formOutline && "form-outline",
    inputGroupClassName.value,
    props.white && "form-white",
    props.wrapperClass,
  ];
});
const textareaClassName = computed(() => {
  return [
    "form-control",
    props.size && `form-control-${props.size}`,
    textareaValue.value && "active",
    showPlaceholder.value && "placeholder-active",
    isInputValidated.value && isInputValid.value && "is-valid",
    isInputValidated.value && !isInputValid.value && "is-invalid",
  ];
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
  if (isInputValidated.value && !isInputValid.value && props.validationEvent) {
    return defaultValidatorInvalidFeedback.value;
  }
  return props.invalidFeedback;
});

const handleValidation = (e: Event) => {
  const target = e.target as HTMLInputElement;
  isInputValid.value = target.checkValidity();
  if (!isInputValid.value) {
    defaultValidatorInvalidFeedback.value = target.validationMessage;
  }
  isInputValidated.value = true;
  emit("on-validate", isInputValid.value);
};

const bindValidationEvents = () => {
  if (props.validationEvent === "submit") return;
  on(
    textareaRef.value as HTMLTextAreaElement,
    props.validationEvent,
    handleValidation
  );
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

const currentLength = ref<number | null>(null);

currentLength.value =
  typeof textareaValue.value === "string" && textareaValue.value
    ? textareaValue.value.length
    : 0;

function handleInput(e: Event) {
  const target = e.target as HTMLInputElement;
  if (props.counter) {
    if (target.value.length > props.maxLength) {
      if (typeof textareaValue.value === "string") {
        target.value = textareaValue.value;
      }
      return;
    }

    currentLength.value = target.value.length;
  }

  textareaValue.value = target.value;
  emit("update:modelValue", textareaValue.value);
}

const isFirstChild = (element: HTMLElement) => {
  return !Boolean(
    [...element.parentNode.children].findIndex((item) => item === element)
  );
};

onMounted(() => {
  calcNotch();
  setPlaceholder();

  if (
    props.label &&
    props.formOutline &&
    textareaRef.value instanceof HTMLTextAreaElement &&
    !isFirstChild(textareaRef.value)
  ) {
    const textAreaLeft = parseFloat(getComputedStyle(labelRef.value).left);
    labelRef.value.style.left = `${
      textAreaLeft + textareaRef.value.offsetLeft
    }px`;
    notchLeadingWidth.value += textareaRef.value.offsetLeft;
  }

  if (props.validationEvent) {
    bindValidationEvents();
  }
});

onUpdated(() => {
  calcNotch();
  setPlaceholder();
});

onUnmounted(() => {
  off(
    textareaRef.value as HTMLTextAreaElement,
    props.validationEvent,
    handleValidation
  );
});

watchEffect(() => {
  if (props.counter) {
    if (
      typeof props.modelValue === "string" &&
      props.modelValue?.length > props.maxLength
    ) {
      textareaValue.value = props.modelValue.slice(0, props.maxLength);
      currentLength.value = props.maxLength;
      return;
    }

    currentLength.value =
      typeof props.modelValue === "string" && props.modelValue
        ? props.modelValue.length
        : 0;
  }

  textareaValue.value = props.modelValue;
});

watch(
  () => props.isValidated,
  (value) => (isInputValidated.value = value)
);

watch(
  () => props.isValid,
  (value) => (isInputValid.value = value)
);
</script>
