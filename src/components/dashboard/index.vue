<template>
  <app-layout>
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
import { dateToDbFormat, getToday } from '../../utils/date';
import AddButton from '../common/AddButton';
import api from '../../api/workhours';
import AppLayout from '../common/layout';
import DashboardControl from './DashboardControl';
import DashboardTable from './DashboardTable';
import UserModal from '../UserModal';

export default {
  name: 'admin-dashboard',
  data: () => ({
    records: [],
    currentDayRecords: [],
    visibleRecords: [],
    isModalOpen: false
  }),
  created() {
    api.getAllWorkHours()
      .then(res => {
        this.records = res.data;
        this.loadRecords(getToday());
      })
      .catch(err => {
        console.log(err.response.data.msg);
      });
  },
  methods: {
    loadRecords(date) {
      date = dateToDbFormat(date);
      this.currentDayRecords =this.records.find(it => it.date === date).users;
      this.visibleRecords = this.currentDayRecords;
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
