<template>
  <app-layout logged-in>
    <div class="dashboard">
      <div class="dashboard-control">
        <date-picker v-model="date">
        </date-picker>
        <search-box
          v-model="keyword"
          class="search"
          placeholder="Search"
        >
        </search-box>
      </div>
      <dashboard-table :records="visibleRecords">
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
    keyword: '',
    records: []
  }),
  computed: {
    visibleRecords() {
      return this.keyword
        ? this.filterRecords()
        : this.records;
    }
  },
  created() {
    this.records = employeeData.find(it => it.date === this.mockDate).records;
  },
  methods: {
    filterRecords() {
      return this.records.filter(it =>
        it.firstName.toUpperCase().includes(this.keyword.toUpperCase())
          || it.lastName.toUpperCase().includes(this.keyword.toUpperCase())
      );
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
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  &-control {
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;

    @media(max-width: 650px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  .search {
    @media(max-width: 650px) {
      margin-top: 1rem;
    }
  }
}
</style>
