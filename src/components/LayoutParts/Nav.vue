<template>
  <nav class="nav">
    <a class="nav__item" href="#about" @click.prevent="scroll">Описание</a>
    <a class="nav__item" href="#members" @click.prevent="scroll">Участники</a>
    <a class="nav__item" href="#program" @click.prevent="scroll">Программа</a>
    <a class="nav__item" href="#partners" @click.prevent="scroll">Партнеры</a>
  </nav>
</template>

<script setup>
  function scroll(e) {
    const id = e.target.getAttribute('href');
    if(!id) return;
    const el = document.querySelector(id);
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
  }
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
