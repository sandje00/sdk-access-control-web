<template>
  <base-icon v-bind="$props">
    <path d="M0 0h24v24H0V0z" fill="none"></path>
    <path d="M10 10.02h5V21h-5zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"></path>
  </base-icon>
</template>

<script>
import BaseIcon from '../BaseIcon';

export default {
  name: 'icon-dashboard',
  props: {
    iconName: { type: String, required: true },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, required: true }
  },
  components: { BaseIcon }
}
</script>
