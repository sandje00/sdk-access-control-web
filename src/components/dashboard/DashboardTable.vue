<template>
  <h2 v-if="!records.length" class="message">
    There are no records to show.
  </h2>
  <table v-else class="table">
    <tr class="table-header">
      <th
        v-for="{label, id} in headerCols"
        :key="id"
      >
        {{ label }}
      </th>
    </tr>
    <dashboard-table-record
      v-for="record in records"
      :key="record.id"
      v-bind="record"
    >
    </dashboard-table-record>
  </table>
</template>

<script>
import DashboardTableRecord from './DashboardTableRecord';

export default {
  name: 'dashboard-table',
  props: {
    records: { type: Array, default: () => ([]) }
  },
  data: () => ({
    headerCols: [
      { label: 'ID', id: 'id' },
      { label: 'First name', id: 'first_name' },
      { label: 'Last name', id: 'last_name' },
      { label: 'Role', id: 'role' },
      { label: 'Start time', id: 'start_time' },
      { label: 'End time', id: 'end_time' }
    ]
  }),
  components: { DashboardTableRecord }
}
</script>

<style lang="scss" scoped>
.table {
  width: 90%;
  text-align: left;
  border-collapse: collapse;

  tr {
    height: 3.5rem;
  }

  th {
    cursor: pointer;
  }

  tr th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  tr th:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &-header {
    color: var(--color-white);
    background-color: var(--color-primary);
  }
}
</style>
