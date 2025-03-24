<template>
  <section id="subscribe">
    <div class="wrapper">
      <h2 v-if="!grid.lg" class="h2 h2--red title">Подписывайтесь на&nbsp;нас!</h2>
      <div class="wrap">
        <div class="round-wrap">
          <img class="round" width="311" height="310" src="@/assets/images/tg-round.svg" loading="lazy" />
          <img class="icecream" width="165" height="165" src="@/assets/images/decor/icecream2.png" loading="lazy" >
        </div>
        <div class="body-wrap">
          <h2 v-if="grid.lg" class="h2 h2--red title">Подписывайтесь на&nbsp;нас!</h2>
          <p class="text">Тайный ингредиент фестиваля — ты. Ждем!<br/>Подпишись в телеграм – не пропусти анонсы.</p>
          <BaseButton v-if="grid.md" class="action" tag="a" href="https://t.me/food_park_aura" target="_blank">
            Подписаться
          </BaseButton>
        </div>
      </div>
      <BaseButton v-if="!grid.md" class="action" tag="a" href="https://t.me/food_park_aura" target="_blank">
        Подписаться
      </BaseButton>
    </div>
  </section>
</template>

<script setup>
  import useAppGrid from '@/composables/useAppGrid';
  import BaseButton from '@/components/Base/Button.vue';

  const grid = useAppGrid();
</script>

<style scoped lang="scss">
  .title {
    font-size: 42px;
    letter-spacing: 0.01em;
    line-height: 1;
    margin-bottom: 24px;
  }

  .text {
    margin-bottom: 50px;
    max-width: 600px;
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 0.01em;
  }

  .action {
    display: block;
    text-align: center;
    width: 100%;
    max-width: 254px;
    padding: 16px 30px;
    line-height: 1.3;
    text-decoration: none;
    text-transform: uppercase;
  }

  .wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    column-gap: 60px;
    row-gap: 30px;
  }

  .round-wrap {
    position: relative;
    width: calc(26% - 30px);
  }

  .body-wrap {
    padding-top: 20px;
    width: calc(74% - 30px);
  }

  .round {
    width: 100%;
    animation-name: roundFrames;
    animation-duration: 35s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  .icecream {
    position: absolute;
    z-index: 10;
    width: 53%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @keyframes roundFrames {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
