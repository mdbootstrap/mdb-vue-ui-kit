<template>
  <label v-if="label" :class="labelClassName" :for="uid">{{ label }}</label>
  <component :is="tag" :class="wrapperClassName">
    <input
      type="range"
      :class="inputClassName"
      :id="uid"
      :value="inputValue"
      :min="minValue"
      :max="maxValue"
      v-bind="$attrs"
      @input="handleInput"
      @mousedown="toggleThumb(true)"
      @touchstart="toggleThumb(true)"
      @mouseup="toggleThumb(false)"
      @touchend="toggleThumb(false)"
    />
    <span
      v-if="thumb"
      :class="thumbClassName"
      :style="{ left: thumbLeftPosition }"
    >
      <span class="thumb-value">{{ inputValue }}</span>
    </span>
  </component>
</template>

<script lang="ts">
export default {
  name: "MDBRange",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from "vue";
import { getUID } from "../../utils/getUID";

const props = defineProps({
  id: String,
  inputClass: String,
  label: String,
  labelClass: String,
  max: {
    type: Number,
    default: 100,
  },
  min: {
    type: Number,
    default: 0,
  },
  modelValue: {
    type: Number,
    default: 50,
  },
  tag: {
    type: String,
    default: "div",
  },
  thumb: {
    type: Boolean,
    default: true,
  },
  thumbClass: String,
  wrapperClass: String,
});

const emit = defineEmits(["update:modelValue"]);

const inputValue = ref(props.modelValue);
const minValue = ref(props.min);
const maxValue = ref(props.max);
const uid = props.id || getUID("MDBRange-");
const isThumbActive = ref(false);

const wrapperClassName = computed(() => {
  return ["range", props.wrapperClass];
});
const inputClassName = computed(() => {
  return ["form-range", props.inputClass];
});
const labelClassName = computed(() => {
  return ["form-label", props.labelClass];
});
const thumbClassName = computed(() => {
  return ["thumb", isThumbActive.value && "thumb-active", props.thumbClass];
});
const thumbLeftPosition = ref<string | number>(0);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  inputValue.value = parseFloat(target.value);
  emit("update:modelValue", inputValue.value);

  setThumbPosition();
};

const toggleThumb = (isActive: boolean) => {
  isThumbActive.value = isActive;
};

const setThumbPosition = () => {
  const inputVal =
    typeof inputValue.value === "string"
      ? parseFloat(inputValue.value)
      : inputValue.value;
  const left =
    ((inputVal - minValue.value) * 100) / (maxValue.value - minValue.value);
  thumbLeftPosition.value = `calc(${left}% + (${8 - left * 0.15}px))`;
};

nextTick(() => {
  setThumbPosition();
});

watch(
  () => props.modelValue,
  (value) => {
    inputValue.value = value;
    setThumbPosition();
  }
);
</script>
