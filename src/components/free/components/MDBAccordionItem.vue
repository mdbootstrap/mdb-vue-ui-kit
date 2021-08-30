<template>
  <component :is="tag" v-bind="$attrs" :class="itemClassName" ref="itemRef">
    <h2 :class="headerClassName">
      <button
        @click="() => toggleAccordion(collapseId)"
        :class="buttonClassName"
        aria-expanded="true"
        :aria-controls="collapseId"
      >
        {{ headerTitle }}
      </button>
    </h2>
    <MDBCollapse :id="collapseId" v-model="isActive">
      <div :class="bodyClassName">
        <slot />
      </div>
    </MDBCollapse>
  </component>
</template>

<script>
import { computed, inject, ref, watchEffect } from "vue";

import MDBCollapse from "./MDBCollapse.vue";

export default {
  name: "MDBAccordionItem",
  components: {
    MDBCollapse,
  },
  props: {
    tag: {
      type: String,
      default: "div",
    },
    collapseId: {
      type: String,
      required: true,
    },
    headerTitle: String,
    headerClasses: String,
    bodyClasses: String,
    itemClasses: String,
  },
  setup(props) {
    const itemRef = ref(null);
    const itemClassName = computed(() => {
      return ["accordion-item", props.itemClasses];
    });
    const headerClassName = computed(() => {
      return ["accordion-header", props.headerClasses];
    });
    const bodyClassName = computed(() => {
      return ["accordion-body", props.bodyClasses];
    });
    const buttonClassName = computed(() => {
      return ["accordion-button", isActive.value && "collapsed"];
    });

    const setActiveItem = inject("setActiveItem", null);
    const activeItem = inject("activeItem", null);
    const stayOpen = inject("stayOpen", false);

    const isActive = ref(activeItem.value === props.collapseId);

    watchEffect(() => {
      if (stayOpen) {
        return;
      }
      isActive.value = activeItem.value === props.collapseId;
    });

    const toggleAccordion = () => {
      if (stayOpen) {
        isActive.value = !isActive.value;
      } else {
        isActive.value ? setActiveItem("") : setActiveItem(props.collapseId);
      }
    };

    return {
      itemRef,
      itemClassName,
      headerClassName,
      bodyClassName,
      buttonClassName,
      toggleAccordion,
      isActive,
    };
  },
};
</script>
