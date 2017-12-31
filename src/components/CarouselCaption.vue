<template>
  <div :is="tag" :class="className">
    <h3 class="h3-responsive">{{ title }}</h3>
    <p>{{ text }}</p>
  </div>
</template>

<script>
  import classNames from 'classnames';

  export default {
    props: {
      tag: {
        type: String,
        default: "div"
      },
      title: {
        type: String
      },
      text: {
        type: String
      },
      alignV: {
        type: String,
        default: 'bottom'
      }
    },
    data() {
      return {
        className: classNames(
          'carousel-caption',
          `caption-${this.alignV}`
        )
      };
    }
  };
</script>

<style lang="scss" scoped>
  .carousel-caption {
    &.caption-bottom {
      bottom: 5% !important;
    }

    &.caption-center {
      bottom: 35% !important;
    }

    &.caption-top {
      bottom: 70% !important;
    }
  }
</style>
