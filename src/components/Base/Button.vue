<template>
  <component
    class="btn"
    :is="tag"
    :class="{
      'btn--colored': theme === 'colored',
      'btn--outlined': theme === 'outlined',
    }"
  >
    <slot></slot>
  </component>
</template>

<script setup>
  defineProps({
    tag: {
      default: 'button',
      type: String,
    },
    theme: {
      default: 'colored',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .btn {
    border-radius: 30px;
    font-size: 16px;
    line-height: 1.4;

    &--colored {
      padding: 12px 30px;
      font-weight: 500;
      background: linear-gradient(90deg, #f2826f 0%, #fd556f 100%);
      color: var(--color-white);

      &:hover {
        color: var(--color-secondary);
      }
    }

    &--outlined {
      padding: 11px 30px;
      font-weight: 400;
      background: transparent;
      color: var(--color-dark);
      border: 1px solid #F86972;

      &:hover {
        border-color: var(--color-primary);
        color: var(--color-primary);
      }
    }
  }
</style>
