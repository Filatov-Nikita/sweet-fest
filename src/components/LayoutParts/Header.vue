<template>
  <header class="header">
    <a class="logo" href="https://aura.planeta-mall.ru/" target="_blank">
      <img class="logo__img" width="155" height="37" src="@/assets/images/logo-aura.svg" alt="Логотип Аура">
    </a>
    <Nav />
    <TgChannel />
  </header>
</template>

<script setup>
  import Nav from './Nav.vue';
  import TgChannel from '@/components/Links/TgChannel.vue';
</script>

<style scoped lang="scss">
  .header {
    padding: 30px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 60px;
    row-gap: 20px;
  }

  .logo {
    width: 155px;
    transition: opacity 200ms;

    &:hover {
      opacity: 0.8;
    }

    &__img {
      width: 100%;
    }
  }
</style>
