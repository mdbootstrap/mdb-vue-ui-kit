<template>
  <component
    :is="props.tag"
    :class="navTogglerClass"
    type="button"
    data-mdb-toggle="collapse"
    :data-mdb-target="props.target"
    :aria-controls="props.target"
    :aria-expanded="isExpanded"
    aria-label="Toggle navigation"
    @click="handleClick"
    v-bind="attrs"
  >
    <MDBIcon
      :icon="props.togglerIcon"
      :class="props.togglerIconClass"
      :size="props.togglerSize"
      :iconStyle="props.iconStyle"
    />
  </component>
</template>

<script>
import { computed, inject, ref } from "vue";
import { MDBIcon } from "@/index.free.js";

export default {
  name: "MDBNavbarToggler",
  components: {
    MDBIcon
  },
  props: {
    tag: {
      type: String,
      default: "button"
    },
    target: {
      type: String,
      default: "#navbarSupportedContent"
    },
    togglerClass: {
      type: String
    },
    togglerIcon: {
      type: String,
      default: "bars"
    },
    togglerSize: {
      type: String,
      default: "1x"
    },
    iconStyle: {
      type: String,
      default: "fas"
    }
  },
  emits: ["update:toggle"],
  setup(props, { attrs }) {
    const navTogglerClass = computed(() => {
      return ["navbar-toggler", props.togglerClass];
    });

    const isExpanded = ref(false);

    const toggleCollapse = inject("toggleCollapse", false);

    const handleClick = () => {
      isExpanded.value = !isExpanded.value;

      if (toggleCollapse) {
        toggleCollapse();
      } else {
        const collapsibleTarget = document.querySelector(`${props.target}`);

        if (!collapsibleTarget) {
          return;
        }

        collapsibleTarget.classList.contains("show")
          ? collapsibleTarget.classList.remove("show")
          : collapsibleTarget.classList.add("show");
      }
    };

    return {
      navTogglerClass,
      handleClick,
      isExpanded,
      props,
      attrs
    };
  }
};
</script>
