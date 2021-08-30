<template>
  <component :is="props.tag" :class="wrapperClassName">
    <input
      :class="inputClassName"
      v-bind="attrs"
      :id="uid"
      :value="inputValue"
      @input="handleInput"
    />
    <label v-if="props.label" ref="labelRef" class="form-label" :for="uid">
      {{ props.label }}
    </label>
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
  <div v-if="props.formText" class="form-text">{{ props.formText }}</div>
</template>

<script>
import { computed, ref, onMounted, onUpdated, watchEffect } from "vue";
import { getUID } from "../../utils/getUID";

export default {
  name: "MDBInput",
  props: {
    id: String,
    label: String,
    modelValue: [String, Number],
    size: String,
    wrapperClass: String,
    formText: String,
    white: Boolean,
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const inputValue = ref(props.modelValue);
    const labelRef = ref(null);
    const showPlaceholder = ref(false);
    const notchLeadingWidth = ref(9);
    const notchMiddleWidth = ref(0);
    const uid = props.id || getUID("MDBInput-");

    const wrapperClassName = computed(() => {
      return ["form-outline", props.white && "form-white", props.wrapperClass];
    });
    const inputClassName = computed(() => {
      return [
        "form-control",
        props.size && `form-control-${props.size}`,
        inputValue.value && "active",
        showPlaceholder.value && "placeholder-active"
      ];
    });

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
    });

    onUpdated(() => {
      calcNotch();
      setPlaceholder();
    });

    watchEffect(() => (inputValue.value = props.modelValue));

    return {
      uid,
      inputValue,
      labelRef,
      handleInput,
      wrapperClassName,
      inputClassName,
      notchLeadingWidth,
      notchMiddleWidth,
      attrs,
      props
    };
  }
};
</script>
