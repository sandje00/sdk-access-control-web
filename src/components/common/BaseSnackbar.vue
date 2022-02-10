<template>
  <div
    :class="{ info, success, error }"
    class="snackbar"
  >
    <div class="flex-h">
      <span class="message">
        {{ message }}
      </span>
      <button @click="$emit('close-snackbar')" class="close">
        <span class="x">
          +
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-snackbar',
  props: {
    message: { type: String, required:true },
    info: { type: Boolean, default: true },
    success: { type: Boolean, default: false },
    error: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.snackbar {
  width: max-content;
  border-radius: 20px;
  text-align: center;

  .message {
    display: inline-block;
    font-size: 1.2rem;
    padding: 1.2rem;
  }

  .close {
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 0.5rem;

    .x {
      display: inline-block;
      transform: rotateZ(45deg);
      font-size: 2rem;
    }
  }

  &.info {
    background-color: var(--color-info-light);
    border: 1px solid var(--color-info-dark);

    & .message, .x {
      color: var(--color-info-dark);
    }
  }

  &.success {
    background-color: var(--color-success-light);
    border: 1px solid var(--color-success-dark);

    & .message, .x {
      color: var(--color-success-dark);
    }
  }

  &.error {
    background-color: var(--color-error-light);
    border: 1px solid var(--color-error-dark);

    & .message, .x {
      color: var(--color-error-dark);
    }
  }
}
</style>
