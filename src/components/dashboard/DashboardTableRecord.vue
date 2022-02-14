<template>
  <tr class="record">
    <td>
      <button-icon
        @click="$router.push({ name: 'profile', params: { userId } })"
      >
        <icon-info
          icon-name="Info"
          icon-color="#5e1fde"
          class="record-icon"
        >
        </icon-info>
      </button-icon>
    </td>
    <td>{{ userName }}</td>
    <td>{{ userRole }}</td>
    <td>
      <ul>
        <li v-for="item, index in userWorkTime" :key="index">
          Start time: {{ item.startTime }}; End time: {{ item.endTime }}
        </li>
      </ul>
    </td>
    <td>{{ currentStartTime }}</td>
    <td>{{ fullTime }}</td>
  </tr>
</template>

<script>
import ButtonIcon from '../common/ButtonIcon';
import IconInfo from '../common/icons/IconInfo';

export default {
  name: 'dashboard-table-record',
  props: {
    userId: { type: String, required: true },
    userName: { type: String, required: true },
    userRole: {
      type: String,
      required: true,
      validator: val => ['USER', 'ADMIN'].includes(val)
    },
    currentStartTime: { type: String, required: true },
    fullTime: { type: String, required: true },
    userWorkTime: { type: Array, default: () => ([]) }
  },
  components: { ButtonIcon, IconInfo }
}
</script>

<style lang="scss" scoped>
.record {
  border-bottom: 2px solid var(--color-secondary);
  background-color: var(--color-white);
}

tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 1rem;
}

tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media(max-width: 650px) {
  td, tr td:first-child {
    padding: 0.5rem;
  }
}
</style>
