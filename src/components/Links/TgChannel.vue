<template>
  <a
    class="tg-link"
    :class="{
      'tg-link--white': color === 'white',
      'tg-link--black': color === 'black',
    }"
    href="https://t.me/food_park_aura"
    target="_blank"
  >
    <IconTg class="tg-link__icon" />
    <span>Telegram</span>
  </a>
</template>

<script setup>
  import IconTg from '@/components/Icons/Tg.vue';

  defineProps({
    color: {
      default: 'white',
      type: String,
    }
  });
</script>

<style scoped lang="scss">
  .tg-link {
    display: flex;
    align-items: center;
    column-gap: 14px;
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;

    &--white {
      color: var(--color-white);
      &:hover {
        color: var(--color-secondary);
      }
    }

    &--black {
      color: var(--color-dark);
      &:hover {
        color: var(--color-primary);
      }
    }

    &__icon {
      width: 28px;
      height: 28px;
      flex-shrink: 0;
    }
  }
</style>
