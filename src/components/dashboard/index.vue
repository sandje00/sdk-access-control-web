<template>
  <app-layout logged-in>
    <div class="dashboard">
      <dashboard-control
        @date-change="loadRecords"
        @keyword-change="filterRecords"
      ></dashboard-control>
      <dashboard-table :records="visibleRecords">
      </dashboard-table>
    </div>
    <add-button
      @click="toggleModalOpen"
      class="add-user"
    ></add-button>
    <user-modal
      v-if="isModalOpen"
      @close-modal="toggleModalOpen"
    ></user-modal>
  </app-layout>
</template>

<script>
import AddButton from '../common/AddButton';
import AppLayout from '../common/layout';
import DashboardControl from './DashboardControl';
import DashboardTable from './DashboardTable';
import employeeData from '../../data/employees.json';
import { getToday } from '../../utils/date';
import UserModal from '../UserModal';

export default {
  name: 'admin-dashboard',
  data: () => ({
    records: [],
    visibleRecords: [],
    isModalOpen: false
  }),
  created() {
    this.loadRecords(getToday());
  },
  methods: {
    loadRecords(date) {
      this.records = employeeData.find(it => it.date === date).records;
      this.visibleRecords = this.records;
    },
    filterRecords(keyword) {
      this.visibleRecords = this.records.filter(it =>
        it.firstName.toUpperCase().includes(keyword.toUpperCase())
          || it.lastName.toUpperCase().includes(keyword.toUpperCase())
      );
    },
    toggleModalOpen() {
      this.isModalOpen = !this.isModalOpen;
    }
  },
  components: {
    AddButton,
    AppLayout,
    DashboardControl,
    DashboardTable,
    UserModal
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
}

.add-user {
  position: absolute;
  bottom: 5%;
  right: 5%;
  z-index: var(--z-add-button);
}
</style>
