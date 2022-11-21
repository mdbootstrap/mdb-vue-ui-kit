<template>
  <label v-if="label" :class="labelClassName" :for="uid">{{ label }}</label>
  <input
    type="file"
    :class="inputClassName"
    v-bind="$attrs"
    :id="uid"
    @change="handleChange"
  />
  <div v-if="validFeedback" :class="validFeedbackClassName">
    {{ validFeedback }}
  </div>
  <div v-if="invalidFeedback" :class="invalidFeedbackClassName">
    {{ invalidFeedback }}
  </div>
</template>

<script lang="ts">
export const MDBFileList = typeof FileList !== "undefined" ? FileList : Object;

export default {
  name: "MDBFile",
};
</script>

<script setup lang="ts">
import { computed, ref, watch, PropType } from "vue";
import { getUID } from "../../utils/getUID";

const props = defineProps({
  id: String,
  inputClass: String,
  invalidFeedback: String,
  isInvalid: Boolean,
  isValid: Boolean,
  isValidated: Boolean,
  label: String,
  labelClass: String,
  modelValue: {
    type: [MDBFileList, Array] as PropType<FileList | File[]>,
    default: () => [],
  },
  size: String,
  tooltipFeedback: Boolean,
  validFeedback: String,
  validateOnChange: Boolean,
});
const emit = defineEmits(["update:modelValue", "on-validate"]);

const uid = props.id || getUID("MDBFile-");
const inputValue = ref(props.modelValue);

const inputClassName = computed(() => {
  return [
    "form-control",
    props.size && `form-control-${props.size}`,
    isInputValidated.value && isInputValid.value && "is-valid",
    isInputValidated.value && !isInputValid.value && "is-invalid",
    props.inputClass,
  ];
});
const labelClassName = computed(() => {
  return ["form-label", props.labelClass];
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

const handleValidation = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    isInputValid.value = target.files.length > 0;
    isInputValidated.value = true;
    emit("on-validate", isInputValid.value);
  }
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    inputValue.value = target.files;
    emit("update:modelValue", inputValue.value);

    if (props.validateOnChange) {
      handleValidation(event);
    }
  }
};

watch(
  () => props.modelValue,
  (value) => (inputValue.value = value)
);

watch(
  () => props.isValidated,
  (value) => (isInputValidated.value = value)
);

watch(
  () => props.isValid,
  (value) => {
    isInputValid.value = value;
  }
);
</script>
