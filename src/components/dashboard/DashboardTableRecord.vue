<template>
  <tr class="record">
    <td>
      <button-icon
        @click="$router.push({ name: 'profile', params: { userId: $props.id.toString() } })"
      >
        <icon-info
          icon-name="Info"
          icon-color="#5e1fde"
          class="record-icon"
        >
        </icon-info>
      </button-icon>
    </td>
    <td>{{ id }}</td>
    <td>{{ firstName }}</td>
    <td>{{ lastName }}</td>
    <td>{{ role }}</td>
    <td>{{ start }}</td>
    <td>{{ end }}</td>
  </tr>
</template>

<script>
import ButtonIcon from '../common/ButtonIcon';
import IconInfo from '../common/icons/IconInfo';

export default {
  name: 'dashboard-table-record',
  props: {
    id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    role: {
      type: String,
      required: true,
      validator: val => ['USER', 'ADMIN'].includes(val)
    },
    start: { type: String, required: true },
    end: { type: String, required: true }
  },
  components: { ButtonIcon, IconInfo }
}
</script>

<style lang="scss" scoped>
.record {
  border-bottom: 2px solid var(--color-secondary);
  background-color: var(--color-white);
}

tr td:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-left: 1rem;
}

tr td:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media(max-width: 650px) {
  td, tr td:first-child {
    padding: 0.5rem;
  }
}
</style>
