<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="iconViewBox"
    :fill="iconColor"
  >
    <title :id="iconName" lang="en">
      {{ iconName }} icon
    </title>
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: 'base-icon',
  props: {
    iconName: { type: String, required: true },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, required: true }
  },
  computed: {
    iconViewBox() {
      return '0 0 ' + this.$props.width.toString() + ' ' + this.$props.height.toString();
    }
  }
}
</script>
