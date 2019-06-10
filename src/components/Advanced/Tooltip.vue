<template>
  <span>
    <transition @after-leave="doDestroy">
      <span ref="popper" :class="{show:!disabled && showPopper}">
        <div class="tooltip" v-if="$slots.tip" ref="tooltip">
          <slot name="tip"></slot>
        </div>
        <slot></slot>
      </span>
    </transition>
    <slot name="reference"></slot>
  </span>
</template>

<script>
  import { mdbTooltip } from '../../mixins/mdbTooltip.js';

  const Tooltip = {
    mixins: [mdbTooltip]
  };

  export default Tooltip;
  export { Tooltip as mdbTooltip };
</script>

<style>
  .tooltip {
    width: auto;
    background-color: rgba(0, 0, 0, 0.85);
    color: rgba(242, 239, 239, 0.95);
    text-align: center;
    padding: 0.24em 0.5em;
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    font-size: 0.83em;
    font-weight: normal;
    z-index: 200000;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
    visibility: hidden;
  }

  .show > .tooltip {
    opacity: 1;
    visibility: visible;
  }

  .tooltip .tooltip_arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
  }
  .tooltip[x-placement^="top"] {
    margin-bottom: 5px;
  }
  .tooltip[x-placement^="top"] .tooltip_arrow {
    border-width: 5px 5px 0 5px;
    border-color:  rgba(0, 0, 0, 0.85) transparent transparent transparent;
    bottom: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .tooltip[x-placement^="bottom"] {
    margin-top: 5px;
  }
  .tooltip[x-placement^="bottom"] .tooltip_arrow {
    border-width: 0 5px 5px 5px;
    border-color: transparent transparent rgba(0, 0, 0, 0.85) transparent;
    top: -5px;
    left: calc(50% - 5px);
    margin-top: 0;
    margin-bottom: 0;
  }
  .tooltip[x-placement^="right"] {
    margin-left: 5px;
  }
  .tooltip[x-placement^="right"] .tooltip_arrow {
    border-width: 5px 5px 5px 0;
    border-color: transparent rgba(0, 0, 0, 0.85) transparent transparent;
    left: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
  .tooltip[x-placement^="left"] {
    margin-right: 5px;
  }
  .tooltip[x-placement^="left"] .tooltip_arrow {
    border-width: 5px 0 5px 5px;
    border-color: transparent transparent transparent rgba(0, 0, 0, 0.85);
    right: -5px;
    top: calc(50% - 5px);
    margin-left: 0;
    margin-right: 0;
  }
</style>
