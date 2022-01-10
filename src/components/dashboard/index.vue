<template>
  <app-layout logged-in>
    <div class="dashboard">
      <div
        :class="[breakpoint
          ? 'flex-v align-stretch'
          : 'flex-h justify-space-between']"
        class="dashboard-control">
        <date-picker v-model="date">
        </date-picker>
        <search-box
          v-model="keyword"
          :class="{ 'vertical': breakpoint }"
          placeholder="Search"
        >
        </search-box>
      </div>
      <dashboard-table :records="records">
      </dashboard-table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import DatePicker from '../common/DatePicker';
import DashboardTable from './DashboardTable';
import employeeData from '../../data/employees.json';
import SearchBox from '../common/SearchBox';

export default {
  name: 'admin-dashboard',
  data: () => ({
    mockDate: '2022-01-07',
    date: '',
    keyword: ''
  }),
  computed: {
    records() {
      return employeeData.find(it => it.date === this.mockDate).records;
    },
    breakpoint() {
      return window.innerWidth <= 650;
    }
  },
  components: {
    AppLayout,
    DashboardTable,
    SearchBox,
    DatePicker
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  margin-top: 8vh;
  padding: 0 8vw;
  max-width: 90vw;

  &-control {
    padding: 2rem 0;
  }

  .vertical {
    margin-top: 1rem;
  }
}
</style>
