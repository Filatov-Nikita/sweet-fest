<template>
  <nav class="nav">
    <a class="nav__item" href="#about">Описание</a>
    <a class="nav__item" href="#members">Участники</a>
    <a class="nav__item" href="#program">Программа</a>
    <a class="nav__item" href="#partners">Партнеры</a>
  </nav>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .nav {
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    padding: 14px 60px;
    border-radius: 50px;
    border: 1px solid var(--color-white);

    &__item {
      text-decoration: none;
      color: var(--color-white);

      &:hover {
        color: var(--color-secondary);
      }
    }
  }
</style>
