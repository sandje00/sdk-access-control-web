<template>
  <h2 v-if="!records.length" class="message">
    There are no records to show.
  </h2>
  <div v-else class="container">
    <table class="table">
      <tr class="table-header">
        <th
          v-for="{ label, id } in headerCols"
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
  </div>
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
      { label: '', id: 'info' },
      { label: 'Name', id: 'name' },
      { label: 'Role', id: 'role' },
      { label: 'User work time', id: 'user_work_time' },
      { label: 'Current start time', id: 'current_start_time' },
      { label: 'Full time', id: 'full_time' }
    ]
  }),
  components: { DashboardTableRecord }
}
</script>

<style lang="scss" scoped>
.message {
  text-align: center;
  color: var(--color-gray-light);
}

.container {
  overflow-x: auto;
}

.table {
  width: 100%;
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
    padding-left: 1rem;
    cursor: default;
    width: 5%;
  }

  tr th:nth-child(2) {
    width: 15%;
  }

  tr th:nth-child(3) {
    width: 10%;
  }

  tr th:nth-child(4) {
    width: 30%;
  }

  tr th:nth-child(6) {
    width: 15%;
  }

  tr th:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    width: 15%;
  }

  &-header {
    color: var(--color-white);
    background-color: var(--color-primary);
  }

  @media(max-width: 650px) {
    th, tr th:first-child {
      padding: 0.5rem;
    }
  }

}
</style>
