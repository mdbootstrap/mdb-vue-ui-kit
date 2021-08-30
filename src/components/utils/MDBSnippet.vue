<template>
  <div class="docs-pills border">
    <ul class="nav nav-pills">
      <li class="nav-item" v-if="slots.template">
        <a class="nav-link" @click="setCurrentTab('template')">Template</a>
      </li>
      <li class="nav-item" v-if="slots.script">
        <a class="nav-link" @click="setCurrentTab('script')">Script</a>
      </li>
      <li class="nav-item" v-if="slots.style">
        <a class="nav-link" @click="setCurrentTab('style')">Style</a>
      </li>
      <MDBBtn color="dark" class="btn-copy-code">Copy</MDBBtn>
    </ul>
    <div class="tab-content">
      <div ref="template" style="display: none" v-if="slots.template">
        <slot name="template"></slot>
      </div>
      <div ref="script" style="display: none" v-if="slots.script">
        <slot name="script"></slot>
      </div>
      <div ref="style" style="display: none" v-if="slots.style">
        <slot name="style"></slot>
      </div>
      <PrismEditor
        v-model="content.template"
        v-if="isTemplateActive"
        :highlight="highlighter"
        line-numbers
      ></PrismEditor>
      <PrismEditor
        v-model="content.script"
        v-if="isScriptActive"
        :highlight="highlighter"
        line-numbers
      ></PrismEditor>
      <PrismEditor
        v-model="content.style"
        v-if="isStyleActive"
        :highlight="highlighter"
        line-numbers
      ></PrismEditor>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, reactive, toRefs } from "vue";
import MDBBtn from "../free/components/MDBBtn";

// const Entities = require("html-entities").AllHtmlEntities;
// const entities = new Entities();

import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

export default {
  components: {
    MDBBtn,
    PrismEditor
  },
  setup(_, { slots }) {
    /*---- Tab functionality  ----*/
    const activeTab = ref("template");

    const isTemplateActive = computed(() => {
      return activeTab.value === "template";
    });
    const isScriptActive = computed(() => {
      return activeTab.value === "script";
    });
    const isStyleActive = computed(() => {
      return activeTab.value === "style";
    });
    const setCurrentTab = tab => {
      activeTab.value = tab;
    };
    /*---- Tab functionality  ----*/

    /*---- Prism functionality  ----*/
    const components = reactive({
      template: null,
      script: null,
      style: null
    });

    const componentRefs = toRefs(components);
    const { template, script, style } = componentRefs;

    const content = reactive({
      template: "",
      script: "",
      style: ""
    });

    const highlighter = code => {
      return highlight(code, languages.js); //returns html
    };

    const setContent = () => {
      Object.keys(content).map(key => {
        if (componentRefs[key].value) {
          console.log(componentRefs[key].value, key);
          const componentRefInnerContent = wrapTag(
            componentRefs[key].value,
            key
          );

          content[key] = componentRefInnerContent;
        }
      });
    };

    const removeVueData = elements => {
      elements.forEach(el => {
        if (el.dataset) {
          Object.keys(el.dataset).forEach(data => {
            if (data.startsWith("v-")) {
              el.removeAttribute(
                `data-${data
                  .split(/(?=[A-Z])/)
                  .join("-")
                  .toLowerCase()}`
              );
            }
          });
        }
      });
    };

    const wrapTag = (data, tag) => {
      console.log(data);
      const elements = data.querySelectorAll("pre > *");

      removeVueData(elements);

      const innerContent = data.querySelector("pre").innerHTML;

      const wrapper = document.createElement(`${tag}`);
      console.log(wrapper);
      wrapper.innerHTML = innerContent;

      return wrapper.outerHTML;
    };
    /*---- Prism functionality  ----*/

    onMounted(() => {
      if (slots.template) {
        activeTab.value = "template";
      } else if (!slots.template && slots.script) {
        activeTab.value = "script";
      } else if (!slots.template && !slots.script && slots.style) {
        activeTab.value = "style";
      }

      setContent();
    });

    return {
      slots,
      isTemplateActive,
      isScriptActive,
      isStyleActive,
      setCurrentTab,
      template,
      script,
      style,
      content,
      highlighter
    };
  }
};
</script>

<style scoped lang="scss">
/* PrismJS 1.14.0
http://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+markup-templating+json+php+jsx+typescript+scss&plugins=line-numbers+toolbar+previewers+normalize-whitespace+copy-to-clipboard */

/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

/* stylelint-disable */
code[class*="language-"],
pre[class*="language-"] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*="language-"]::-moz-selection,
pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection,
code[class*="language-"] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*="language-"]::selection,
pre[class*="language-"] ::selection,
code[class*="language-"]::selection,
code[class*="language-"] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*="language-"],
  pre[class*="language-"] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

pre.line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber;
}

pre.line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

.prism-previewer,
.prism-previewer:before,
.prism-previewer:after {
  position: absolute;
  pointer-events: none;
}
.prism-previewer,
.prism-previewer:after {
  left: 50%;
}
.prism-previewer {
  margin-top: -48px;
  width: 32px;
  height: 32px;
  margin-left: -16px;

  opacity: 0;
  -webkit-transition: opacity 0.25s;
  -o-transition: opacity 0.25s;
  transition: opacity 0.25s;
}
.prism-previewer.flipped {
  margin-top: 0;
  margin-bottom: -48px;
}
.prism-previewer:before,
.prism-previewer:after {
  content: "";
  position: absolute;
  pointer-events: none;
}
.prism-previewer:before {
  top: -5px;
  right: -5px;
  left: -5px;
  bottom: -5px;
  border-radius: 10px;
  border: 5px solid #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75);
}
.prism-previewer:after {
  top: 100%;
  width: 0;
  height: 0;
  margin: 5px 0 0 -7px;
  border: 7px solid transparent;
  border-color: rgba(255, 0, 0, 0);
  border-top-color: #fff;
}
.prism-previewer.flipped:after {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: 5px;
  border-top-color: rgba(255, 0, 0, 0);
  border-bottom-color: #fff;
}
.prism-previewer.active {
  opacity: 1;
}

.prism-previewer-angle:before {
  border-radius: 50%;
  background: #fff;
}
.prism-previewer-angle:after {
  margin-top: 4px;
}
.prism-previewer-angle svg {
  width: 32px;
  height: 32px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.prism-previewer-angle[data-negative] svg {
  -webkit-transform: scaleX(-1) rotate(-90deg);
  -moz-transform: scaleX(-1) rotate(-90deg);
  -ms-transform: scaleX(-1) rotate(-90deg);
  -o-transform: scaleX(-1) rotate(-90deg);
  transform: scaleX(-1) rotate(-90deg);
}
.prism-previewer-angle circle {
  fill: transparent;
  stroke: hsl(200, 10%, 20%);
  stroke-opacity: 0.9;
  stroke-width: 32;
  stroke-dasharray: 0, 500;
}

.prism-previewer-gradient {
  background-image: linear-gradient(
      45deg,
      #bbb 25%,
      transparent 25%,
      transparent 75%,
      #bbb 75%,
      #bbb
    ),
    linear-gradient(45deg, #bbb 25%, #eee 25%, #eee 75%, #bbb 75%, #bbb);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;

  width: 64px;
  margin-left: -32px;
}
.prism-previewer-gradient:before {
  content: none;
}
.prism-previewer-gradient div {
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 10px;
  border: 5px solid #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5) inset, 0 0 10px rgba(0, 0, 0, 0.75);
}

.prism-previewer-color {
  background-image: linear-gradient(
      45deg,
      #bbb 25%,
      transparent 25%,
      transparent 75%,
      #bbb 75%,
      #bbb
    ),
    linear-gradient(45deg, #bbb 25%, #eee 25%, #eee 75%, #bbb 75%, #bbb);
  background-size: 10px 10px;
  background-position: 0 0, 5px 5px;
}
.prism-previewer-color:before {
  background-color: inherit;
  background-clip: padding-box;
}

.prism-previewer-easing {
  margin-top: -76px;
  margin-left: -30px;
  width: 60px;
  height: 60px;
  background: #333;
}
.prism-previewer-easing.flipped {
  margin-bottom: -116px;
}
.prism-previewer-easing svg {
  width: 60px;
  height: 60px;
}
.prism-previewer-easing circle {
  fill: hsl(200, 10%, 20%);
  stroke: white;
}
.prism-previewer-easing path {
  fill: none;
  stroke: white;
  stroke-linecap: round;
  stroke-width: 4;
}
.prism-previewer-easing line {
  stroke: white;
  stroke-opacity: 0.5;
  stroke-width: 2;
}

@-webkit-keyframes prism-previewer-time {
  0% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 500;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: -100;
  }
}

@-o-keyframes prism-previewer-time {
  0% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 500;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: -100;
  }
}

@-moz-keyframes prism-previewer-time {
  0% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 500;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: -100;
  }
}

@keyframes prism-previewer-time {
  0% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100, 500;
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dasharray: 0, 500;
    stroke-dashoffset: -100;
  }
}

.prism-previewer-time:before {
  border-radius: 50%;
  background: #fff;
}
.prism-previewer-time:after {
  margin-top: 4px;
}
.prism-previewer-time svg {
  width: 32px;
  height: 32px;
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
.prism-previewer-time circle {
  fill: transparent;
  stroke: hsl(200, 10%, 20%);
  stroke-opacity: 0.9;
  stroke-width: 32;
  stroke-dasharray: 0, 500;
  stroke-dashoffset: 0;
  -webkit-animation: prism-previewer-time linear infinite 3s;
  -moz-animation: prism-previewer-time linear infinite 3s;
  -o-animation: prism-previewer-time linear infinite 3s;
  animation: prism-previewer-time linear infinite 3s;
}

/* custom */
.docs-pills .d-flex.justify-content-between {
  border-bottom: 1px solid #e0e0e0 !important;
}

.docs-pills .btn.btn-sm[class*="btn-outline-"] {
  margin-top: 0.1rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
}

.docs-pills .nav-pills .nav-link {
  padding: 10px 20px;
  margin: 0 5px;
}

.docs-pills .nav-item .active {
  background-color: #616161 !important;
}

.docs-pills .tab-content {
  padding: 0;
}

.docs-pills .btn-copy-code,
.docs-tab-content .export-to-snippet {
  position: absolute;
  top: 9px;
  right: 8px;
  background-color: #616161 !important;
  padding: 6px 15px !important;
}

.docs-pills {
  position: relative !important;
}

.docs-pills pre[class*="language-"] {
  margin-top: 0;
}

pre.line-numbers {
  position: relative;
  padding-left: 3.8em !important; /* It's important to overwrite px-3 class which breaks showing numbers */
  counter-reset: linenumber;
}

pre.line-numbers > code {
  position: relative;
  white-space: inherit;
}

.line-numbers .line-numbers-rows {
  position: absolute;
  pointer-events: none;
  top: 0;
  font-size: 100%;
  left: -3.8em;
  width: 3em; /* works for line-numbers below 1000 lines */
  letter-spacing: -1px;
  border-right: 1px solid #999;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.line-numbers-rows > span {
  pointer-events: none;
  display: block;
  counter-increment: linenumber;
}

.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}

.code-toolbar {
  margin: 0;
}

code[class*="language-"],
pre[class*="language-"] {
  max-height: 450px;
}

/* stylelint-enable */

.nav {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;
}

.nav-link {
  display: block;
  padding: $nav-link-padding-y $nav-link-padding-x;
  @include font-size($nav-link-font-size);
  font-weight: $nav-link-font-weight;
  color: $nav-link-color;
  text-decoration: if($link-decoration == none, null, none);
  @include transition($nav-link-transition);

  &:hover,
  &:focus {
    cursor: pointer;
    color: $nav-link-hover-color;
    text-decoration: if($link-hover-decoration == underline, none, null);
  }

  // Disabled state lightens text
  &.disabled {
    color: $nav-link-disabled-color;
    pointer-events: none;
    cursor: default;
  }
}

//
// Tabs
//

.nav-tabs {
  border-bottom: $nav-tabs-border-width solid $nav-tabs-border-color;

  .nav-link {
    margin-bottom: -$nav-tabs-border-width;
    border: $nav-tabs-border-width solid transparent;
    @include border-top-radius($nav-tabs-border-radius);

    &:hover,
    &:focus {
      border-color: $nav-tabs-link-hover-border-color;
    }

    &.disabled {
      color: $nav-link-disabled-color;
      background-color: transparent;
      border-color: transparent;
    }
  }

  .nav-link.active,
  .nav-item.show .nav-link {
    color: $nav-tabs-link-active-color;
    background-color: $nav-tabs-link-active-bg;
    border-color: $nav-tabs-link-active-border-color;
  }

  .dropdown-menu {
    // Make dropdown border overlap tab border
    margin-top: -$nav-tabs-border-width;
    // Remove the top rounded corners here since there is a hard edge above the menu
    @include border-top-radius(0);
  }
}

//
// Pills
//

.nav-pills {
  .nav-link {
    @include border-radius($nav-pills-border-radius);
  }

  .nav-link.active,
  .show > .nav-link {
    color: $nav-pills-link-active-color;
    @include gradient-bg($nav-pills-link-active-bg);
  }
}

//
// Justified variants
//

.nav-fill {
  > .nav-link,
  .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }
}

.nav-justified {
  > .nav-link,
  .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }
}

// Tabbable tabs
//
// Hide tabbable panes to start, show them when `.active`

.tab-content {
  > .tab-pane {
    display: none;
  }
  > .active {
    display: block;
  }
}
</style>
