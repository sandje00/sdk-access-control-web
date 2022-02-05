<template>
  <base-icon v-bind="$props">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path>
  </base-icon>
</template>

<script>
import BaseIcon from '../BaseIcon';

export default {
  name: 'icon-edit',
  props: {
    iconName: { type: String, required: true },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    iconColor: { type: String, required: true }
  },
  components: { BaseIcon }
}
</script>
