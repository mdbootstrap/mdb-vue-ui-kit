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
      v-bind="attrs"
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

<script>
import { computed, ref, watch, nextTick } from "vue";
import { getUID } from "@/components/utils/getUID";

export default {
  name: "MDBRange",
  props: {
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
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
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
    const thumbLeftPosition = ref(0);

    const handleInput = (e) => {
      inputValue.value = parseFloat(e.target.value);
      emit("update:modelValue", inputValue.value);

      setThumbPosition();
    };

    const toggleThumb = (isActive) => {
      isThumbActive.value = isActive;
    };

    const setThumbPosition = () => {
      const left = parseFloat(
        ((inputValue.value - minValue.value) * 100) /
          (maxValue.value - minValue.value)
      );

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

    return {
      inputValue,
      minValue,
      maxValue,
      uid,
      wrapperClassName,
      inputClassName,
      labelClassName,
      thumbClassName,
      thumbLeftPosition,
      attrs,
      props,
      handleInput,
      toggleThumb,
    };
  },
};
</script>
