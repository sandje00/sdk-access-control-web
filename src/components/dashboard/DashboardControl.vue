<template>
  <div class="dashboard-control">
    <date-picker
      v-model="date"
      @input="dateChange">
    </date-picker>
    <search-box
      v-model="keyword"
      @input="keywordChange"
      class="search"
      placeholder="Search"
    >
    </search-box>
  </div>
</template>

<script>
import DatePicker from '../common/DatePicker';
import SearchBox from '../common/SearchBox';

export default {
  name: 'dashboard-control',
  data: () => ({
    date: '',
    keyword: ''
  }),
  methods: {
    dateChange() {
      this.$emit('date-change', this.date);
    },
    keywordChange() {
      this.$emit('keyword-change', this.keyword);
    }
  },
  components: { DatePicker, SearchBox }
}
</script>

<style lang="scss" scoped>
.dashboard-control {
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
</style>
