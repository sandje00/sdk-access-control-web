<template>
  <tr class="record">
    <td>{{ id }}</td>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ role }}</td>
    <td>{{ start }}</td>
    <td>{{ end }}</td>
  </tr>
</template>

<script>
export default {
  name: 'dashboard-table-record',
  props: {
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: {
      type: String,
      required: true,
      validator: val => ['USER', 'ADMIN'].includes(val)
    },
    start: { type: String, required: true },
    end: { type: String, required: true }
  }
}
</script>

<style lang="scss" scoped>

</style>
