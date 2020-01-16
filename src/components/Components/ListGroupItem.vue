<template>
  <component :class="className" :is="tag">
    <mdb-icon
      v-if="icon"
      :icon="icon"
      :far="far"
      :regular="regular"
      :fad="fad"
      :duotone="duotone"
      :fal="fal"
      :light="light"
      :fab="fab"
      :brands="brands"
      :class="iconClass"
    />
    <div v-if="icon && !social" class="md-v-line"></div>
    <slot></slot>
  </component>
</template>

<script>
import mdbIcon from "../Content/Fa";
import mdbBtn from "../Components/Button";

const ListGroupItem = {
  components: {
    mdbIcon,
    mdbBtn
  },
  props: {
    tag: {
      type: String,
      default: "li"
    },
    action: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    justifyContentBetween: {
      type: Boolean,
      default: true
    },
    alignItemsCenter: {
      type: Boolean,
      default: true
    },
    social: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    iconColor: {
      type: String,
      default: 'default-color'
    },
    color: String,
    icon: String,
    far: Boolean,
    regular: Boolean,
    light: Boolean,
    fal: Boolean,
    fad: Boolean,
    duotone: Boolean,
    fab: Boolean,
    brands: Boolean
  },
  computed: {
    iconClass() {
      return [
        this.social ? 'fa-2x list-item-btn mr-4 white-text' : "pr-4",
        this.circle && 'rounded-circle',
        this.social && this.iconColor
      ]
    },
    className() {
      const mdbColors = [
        "danger",
        "warning",
        "success",
        "info",
        "default",
        "primary",
        "secondary",
        "dark",
        "light"
      ];
      return [
        "list-group-item",
        "d-flex",
        mdbColors.indexOf(this.color) === -1
          ? this.color
          : `list-group-item-${this.color}`,
        this.justifyContentBetween
          ? this.icon
            ? "justify-content-start"
            : "justify-content-between"
          : "",
        this.alignItemsCenter ? "align-items-center" : "",
        this.action ? "list-group-item-action" : "",
        this.disabled ? "disabled" : "",
        this.active ? "active" : ""
      ];
    }
  }
};

export default ListGroupItem;
export { ListGroupItem as mdbListGroupItem };
</script>

<style scoped>
.md-v-line {
  position: absolute;
  border-left: 1px solid rgba(0, 0, 0, 0.125);
  height: 50px;
  top: 0px;
  left: 54px;
}

.list-group-item-action:hover {
  cursor: pointer;
}

.list-item-btn {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
}
</style>
