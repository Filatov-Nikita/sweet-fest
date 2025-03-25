<template>
  <header class="header">
    <a class="logo" href="https://aura.planeta-mall.ru/" target="_blank">
      <img class="logo__img" width="155" height="37" src="@/assets/images/logo-aura.svg" alt="Логотип Аура">
    </a>
    <template v-if="grid.lg">
      <Nav />
      <TgChannel />
    </template>
    <template v-else>
      <button class="btn" @click="showed = true">
        <BurgerIcon class="btn__icon" />
      </button>
      <NavScreen :showed="showed" @close="showed = false" />
    </template>
  </header>
</template>

<script setup>
  import Nav from './Nav.vue';
  import NavScreen from './NavScreen.vue';
  import BurgerIcon from '@/components/Icons/Burger.vue';
  import TgChannel from '@/components/Links/TgChannel.vue';
  import useAppGrid from '@/composables/useAppGrid';
  import { ref } from 'vue';

  const grid = useAppGrid();

  const showed = ref(false);
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

    @include md {
      width: 103px;
    }

    &:hover {
      opacity: 0.8;
    }

    &__img {
      width: 100%;
    }
  }

  .btn {
    width: 32px;
    height: 32px;

    &__icon {
      width: 100%;
      height: 100%;
      fill: var(--color-white);
    }
  }
</style>
