<template>
  <app-layout logged-in>
    <div class="dashboard">
      <search-box
        v-model="keyword"
        placeholder="Search"
      >
      </search-box>
      <dashboard-table :records="records">
      </dashboard-table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import DashboardTable from './DashboardTable';
import employeeData from '../../data/employees.json';
import SearchBox from '../common/SearchBox';

export default {
  name: 'admin-dashboard',
  data: () => ({
    date: '2022-01-07',
    keyword: ''
  }),
  computed: {
    records() {
      return employeeData.find(it => it.date === this.date).records;
    }
  },
  components: { AppLayout, DashboardTable, SearchBox }
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 8vh;
}
</style>
