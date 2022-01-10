<template>
  <base-icon v-bind="$props">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path>
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
