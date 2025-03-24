<template>
  <div class="items">
    <article class="item">
      <div class="item__icon">
        <img width="50" height="50" src="@/assets/images/decor/cake.png" loading="lazy" />
      </div>
      <h3 class="item__title">Гигантский медовик на&nbsp;3400 кусочков</h3>
      <p class="item__text">Успей отхватить свой!</p>
    </article>
    <article class="item">
      <div class="item__icon">
        <img width="50" height="50" src="@/assets/images/decor/sweet.png" loading="lazy" />
      </div>
      <h3 class="item__title">Конкурс «Сибирский&nbsp;леденец»</h3>
      <p class="item__text">Создай сладость размером с амбиции</p>
    </article>
    <article class="item">
      <div class="item__icon">
        <img width="50" height="50" src="@/assets/images/decor/icecream.png" loading="lazy" />
      </div>
      <h3 class="item__title">Сладкие мастер-классы и фотозона</h3>
      <p class="item__text">Для твоих ярких воспоминаний</p>
    </article>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .items {
    display: flex;
    flex-wrap: wrap;
    margin: -15px;
  }

  .item {
    margin: 15px;
    width: calc(33.3% - 30px);
    padding: 30px 24px;
    padding-right: 20px;
    border-radius: 30px;
    background: linear-gradient(90deg, #f2826f 0%, #fd556f 100%);
    color: var(--color-white);

    &__icon {
      width: fit-content;
      margin-bottom: 20px;
    }

    &__title {
      font-weight: 600;
      font-size: 18px;
      line-height: 1.35;
      margin-bottom: 8px;
    }

    &__icon {
      width: 50px;
      img {
        width: 100%;
      }
    }
  }
</style>
