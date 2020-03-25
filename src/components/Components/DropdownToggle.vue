<template>
  <component :is="tag" aria-haspopup="true" aria-expanded="false" :class="[className, {'ripple-parent': waves}]" @click.prevent="wave">
    <span v-if="srOnly" class="sr-only">Toggle Dropdown</span>
    <mdb-icon v-if="(icon && !iconRight)" :icon="icon" :far="far || regular" :fal="fal || light" :fab="fab || brands" :class="iconClasses" :color="iconColor"/>
    <slot></slot>
    <mdb-icon v-if="(icon && iconRight)" :icon="icon" :far="far || regular" :fal="fal || light" :fab="fab || brands" :class="iconClasses" :color="iconColor"/>
  </component>
</template>

<script>import waves from '../../mixins/waves';
import mdbBtn from './Button';
import mdbIcon from '../Content/Fa';

const DropdownToggle = {
  components: {
    mdbBtn,
    mdbIcon
  },
  props: {
    navLink: {
      type: Boolean,
      default: false
    },
    srOnly: {
      type: Boolean,
      default: false
    },
    ...mdbBtn.props,
    color: {
      type: String
    }
  },
  computed: {
    className() {
      return [
        this.navLink ? 'nav-link' : 'btn',
        this.rounded && 'btn-rounded',
        this.floating && 'btn-floating',
        this.flat ? 'btn-flat' : this.transparent ? '' : 'btn-' + this.color,
        this.gradient && this.gradient + '-gradient',
        this.action && 'btn-action',
        this.save && 'btn-save',
        this.waves && 'ripple-parent',
        this.text && `${this.text}-text`,
        this.outline ? 'btn-outline-' + this.outline : this.transparent ? '' : 'btn-' + this.color,
        this.size ? 'btn-' + this.size : '',
        this.block ? 'btn-block' : '',
        this.active ? 'active' : '',
        this.disabled ? 'disabled' : '',
        this.group && 'm-0 px-3 py-2',
        (this.group && this.outline) && 'z-depth-0',
        'dropdown-toggle'
      ];
    },
    iconClasses() {
      return [
        'px-1',
        this.iconClass
      ];
    }
  },
  mixins: [waves]
};

export default DropdownToggle;
export { DropdownToggle as mdbDropdownToggle };
</script>

<style scoped>
.btn {
  margin: 0;
}
</style>
