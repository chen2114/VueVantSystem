<template>
  <svg
    class="ch-svg"
    aria-hidden="true"
    :style="{
      'font-size': `${size}px`,
      'color': color
    }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'ChSvg',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 12
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
<style>
.ch-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
