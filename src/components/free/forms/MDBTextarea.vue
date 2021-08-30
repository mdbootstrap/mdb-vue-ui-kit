<template>
  <component :is="tag" :class="wrapperClassName">
    <textarea
      :class="textareaClassName"
      v-bind="attrs"
      :id="uid"
      :value="textareaValue"
      @input="handleInput"
      :rows="rows"
    />
    <label v-if="label" ref="labelRef" class="form-label" :for="uid">
      {{ label }}
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
  <div v-if="formText" class="form-text">{{ formText }}</div>
</template>

<script>
import { computed, ref, onMounted, onUpdated, watchEffect } from "vue";
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
    tag: {
      type: String,
      default: "div"
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
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
      textareaValue.value = e.target.value;
      emit("update:modelValue", textareaValue.value);
    }

    onMounted(() => {
      calcNotch();
      setPlaceholder();
    });

    onUpdated(() => {
      calcNotch();
      setPlaceholder();
    });

    watchEffect(() => (textareaValue.value = props.modelValue));

    return {
      uid,
      textareaValue,
      labelRef,
      handleInput,
      wrapperClassName,
      textareaClassName,
      notchLeadingWidth,
      notchMiddleWidth,
      attrs,
      props
    };
  }
};
</script>
