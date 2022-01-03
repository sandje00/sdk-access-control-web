<template>
  <base-icon v-bind="$props">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
  </base-icon>
</template>

<script>
import BaseIcon from '../BaseIcon';

export default {
  name: 'icon-logout',
  props: {
    iconName: { type: String, required: true },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, required: true }
  },
  components: { BaseIcon }
}
</script>
