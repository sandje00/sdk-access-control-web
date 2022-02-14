<template>
  <tr class="record">
    <td>{{ date }}</td>
    <td>
      <ul>
        <li v-for="item, index in users[0].userWorkTime" :key="index">
          Start time: {{ item.startTime }}; End time: {{ item.endTime }}
        </li>
      </ul>
    </td>
    <td>{{ users[0].fullTime }}</td>
  </tr>
</template>

<script>
export default {
  name: 'profile-table-record',
  props: {
    date: { type: String, required: true },
    users: { type: Array, default: () => ([]) }
  }
}
</script>

<style lang="scss" scoped>
.record {
  border-bottom: 2px solid var(--color-secondary);
  background-color: var(--color-white);

  &-icon {
    cursor: pointer;
  }
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
