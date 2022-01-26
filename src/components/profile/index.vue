<template>
  <app-layout logged-in>
    <div class="profile">
      <h1 class="profile-name">{{ fullName }}</h1>
      <profile-table :records="records">
      </profile-table>
    </div>
  </app-layout>
</template>

<script>
import AppLayout from '../common/layout';
import employeeData from '../../data/employees.json';
import ProfileTable from './ProfileTable';

export default {
  name: 'user-profile',
  props: {
    userId: { type: Number, required: true }
  },
  data: () => ({
    firstName: '',
    lastName: '',
    records: []
  }),
  computed: {
    fullName() { return this.firstName + ' ' + this.lastName }
  },
  created() {
    employeeData.forEach(record => {
      let tmp = {};
      tmp.date = record.date;
      tmp.records = record.records.filter(it => it.id === this.$props.userId);
      this.firstName = tmp.records[0].firstName;
      this.lastName = tmp.records[0].lastName;
      this.records.push(tmp);
    });
  },
  components: { AppLayout, ProfileTable }
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

  &-name {
    color: var(--color-primary);
  }
}
</style>
