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
      <profile-table-record
        v-for="record in records"
        :key="record.date"
        v-bind="record"
      >
      </profile-table-record>
    </table>
  </div>
</template>

<script>
import ProfileTableRecord from './ProfileTableRecord';

export default {
  name: 'profile-table',
  props: {
    records: { type: Array, default: () => ([]) }
  },
  data: () => ({
    headerCols: [
      { label: 'Date', id: 'date' },
      { label: 'Start time', id: 'start_time' },
      { label: 'End time', id: 'end_time' }
    ]
  }),
  components: { ProfileTableRecord }
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

  tr th:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 1rem;
  }

  tr th:last-child{
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
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
