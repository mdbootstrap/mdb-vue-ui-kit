<template>
  <transition v-if="!shouldTeleport">
    <component
      v-if="isMounted"
      :is="tag"
      :class="className"
      :style="staticStyle"
      v-bind="$attrs"
      data-popper
      ref="root"
    >
      <div v-if="filter" class="mt-2 mx-2">
        <MDBInput
          v-model="search"
          role="searchbox"
          type="text"
          label="Search"
        />
      </div>
      <slot />
    </component>
  </transition>
  <teleport v-else :to="shouldTeleportTo">
    <transition>
      <component
        v-if="isMounted"
        :is="tag"
        :class="className"
        :style="staticStyle"
        v-bind="$attrs"
        :data-popper="externalTarget"
        ref="root"
      >
        <div v-if="filter" class="mt-2 mx-2">
          <MDBInput
            v-model="search"
            role="searchbox"
            type="text"
            label="Search"
          />
        </div>
        <slot />
      </component>
    </transition>
  </teleport>
</template>

<script lang="ts">
export default {
  name: "MDBDropdownMenu",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { MDBInput } from "../../../index.free";
import { computed, inject, onMounted, Ref, ref, watch } from "vue";
import { on, off } from "../../utils/MDBEventHandlers";

const props = defineProps({
  tag: {
    type: String,
    default: "ul",
  },
  fadeIn: {
    type: String,
    default: "fade-in",
  },
  fadeOut: {
    type: String,
    default: "fade-out",
  },
  animation: {
    type: Boolean,
    default: true,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  static: {
    type: Boolean,
    default: false,
  },
  filter: {
    type: Boolean,
    default: false,
  },
});

const animationDuration = 550;

const className = computed(() => {
  return [
    "dropdown-menu",
    menuAlignClasses === "dropdown-menu-start"
      ? "dropdown-menu-start"
      : menuAlignClasses.value,
    fadeClass.value,
    showClass.value && "show",
    props.dark && "dropdown-menu-dark",
  ];
});
const menuAlignClasses = inject<Ref<string> | "dropdown-menu-start">(
  "menuAlignClasses",
  "dropdown-menu-start"
);
const root = ref<HTMLElement | string>("root");
const fadeClass = ref<boolean | string | null>(null);
const showClass = ref(false);

const staticStyle = computed(() => {
  return props.static ? { display: "block", position: "static" } : false;
});

const handleAnimation = () => {
  if (!props.animation) {
    return;
  }

  setTimeout(() => {
    fadeClass.value = false;
  }, animationDuration);
};

// ------------------- isActive -------------------
// controls if DropdownMenu is presented into DOM by isMounted value
// controls close class and animation

const setMenuMountedState = inject<
  (boolean: boolean, menuRef?: HTMLElement) => void
>("setMenuMountedState", () => false);
const isActive = inject<Ref<boolean> | false>("isActive", false);

if (isActive) {
  watch(
    () => isActive.value,
    (cur) => {
      if (cur) {
        setTimeout(() => {
          setMenuMountedState(true, root.value as HTMLElement);
        }, 100);
      } else if (!cur && isPopperActive) {
        setInactive();

        setTimeout(() => {
          setMenuMountedState(false);
        }, animationDuration);
      }
    }
  );
}

const setInactive = () => {
  // keyboard navigation
  off(document, "keydown", handleDown);
  count.value = 0;

  // close animation
  fadeClass.value = props.animation && `animation ${props.fadeOut}`;
  showClass.value = false;

  handleAnimation();
};

const isMounted = computed(() => {
  if (props.static) {
    // standalone DropdownMenu component that needs to be visible always
    return true;
  } else if (
    (isActive && isActive.value) ||
    (isActive && !isActive.value && isPopperActive && isPopperActive.value)
  ) {
    return true;
  } else if (
    isActive &&
    !isActive.value &&
    isPopperActive &&
    !isPopperActive.value
  ) {
    /* eslint-disable */
    setTimeout(() => {
      return false;
    }, animationDuration);
    /* eslint-enable */
  }

  return false;
});

const externalTarget = inject<string | false>("externalTarget", false);
const shouldTeleport = ref(false);
const shouldTeleportTo = ref("");

onMounted(() => {
  if (externalTarget) {
    const target = document.body.querySelector(externalTarget);
    if (target) {
      shouldTeleport.value = true;
      shouldTeleportTo.value = externalTarget as string;
    }
  }
});

// ------------------- isPopperActive -------------------
// controls if DropdownMenu is visible for user or not
// controls show class and animation
const isPopperActive = inject<Ref<boolean>>("isPopperActive", null);

const setActive = () => {
  on(document, "keydown", handleDown);
  fadeClass.value = props.animation && `animation ${props.fadeIn}`;

  handleAnimation();
};

if (isPopperActive) {
  watch(
    () => isPopperActive.value,
    (cur, prev) => {
      if (!root.value) {
        return;
      }

      if ((!prev && cur === true) || prev === false) {
        items.value = (root.value as HTMLElement).querySelectorAll(
          ".dropdown-item"
        );

        showClass.value = true;
        setActive();
      }
    }
  );
}

// ------------------- Utilities for keyboard navigation -------------------

const count = ref(0);
const items = ref(null);

const handleEscAndOutsideClick = inject(
  "handleEscAndOutsideClick",
  () => false
);

const handleDown = (event: KeyboardEvent) => {
  const key = event.key;
  if (key === "ArrowUp" || key === "ArrowDown") {
    event.preventDefault();
  }

  if (isActive && !isActive.value) {
    return;
  }

  items.value.forEach((item: HTMLElement) => {
    item.classList.remove("active");
  });

  switch (key) {
    case "Escape":
      handleEscAndOutsideClick();
      return;
    case "Enter":
      items.value[count.value - 1]?.click();
      // setInactive();

      return;
    case "ArrowUp":
      count.value--;

      if (count.value <= 0) {
        count.value = items.value.length;
      }
      break;
    case "ArrowDown":
      count.value++;
      if (count.value > items.value.length) {
        count.value = 1;
      }
      break;
    default:
      break;
  }

  items.value[count.value - 1]?.classList.add("active");
};

// filtering
const search = ref("");
const dropdownItems = ref([]);
const handleFilter = () => {
  dropdownItems.value = [
    ...(root.value as HTMLElement).querySelectorAll(".dropdown-item"),
  ];
  dropdownItems.value.forEach((el) => {
    el.style.display = "flex";
  });

  if (search.value) {
    dropdownItems.value.forEach((el) => {
      const elText = el.textContent.trim().toLowerCase();
      const isIncluded = elText.includes(search.value.toLowerCase());
      if (!isIncluded) {
        el.style.display = "none";
      }
    });
  }
};

watch(
  () => search.value,
  () => {
    handleFilter();
  }
);
</script>
