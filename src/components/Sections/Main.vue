<template>
  <div class="section-main">
    <div class="wrapper">
      <Header />
      <div class="section-main__grid">
        <div class="section-main__left">
          <div class="date-period">
            <img class="date-period__img" width="323" height="118" src="@/assets/images/date-period.svg" alt="">
          </div>
          <h1 class="title">
            <span class="title__w1">сладкйи</span>
            <span class="title__w2">фест</span>
          </h1>
          <div class="text">
            <p class="text__p1">Сладкий ажиотаж в Ауре!</p>
            <p class="text__p2">Вход свободный – калории за наш счет</p>
          </div>
        </div>
        <div class="section-main__right">
          <img width="1107" height="938" src="@/assets/images/ponchik.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Header from '@/components/LayoutParts/Header.vue';
</script>

<style scoped lang="scss">
  .section-main {
    min-height: 500px;
    background: linear-gradient(90deg, #f2826f 0%, #fd556f 100%);

    &__grid {
      padding-top: 30px;
      padding-bottom: 80px;
      display: flex;
      flex-wrap: wrap;
      column-gap: 50px;

      @include lg {
        padding-top: 15px;
        padding-bottom: 60px;
      }
    }

    &__left {
      width: calc(50% - 25px);
      padding-top: 40px;
    }

    &__right {
      width: calc(50% - 25px);
    }
  }

  .title {
    margin-bottom: 55px;
    font-family: var(--font-kisa);
    font-weight: 600;
    color: var(--color-secondary);
    font-size: 100px;

    @include xl {
      font-size: 90px;
    }

    @include lg {
      margin-bottom: 40px;
      font-size: 80px;
    }

    &__w1, &__w2 {
      display: block;
      line-height: 0.9;
    }

    &__w1 {
      font-size: 0.86em;
    }

    &__w2 {
      font-size: 1.44em;
    }
  }

  .text {
    color: var(--color-white);

    &__p1 {
      font-size: 30px;
      font-weight: 600;
    }

    &__p2 {
      font-size: 20px;
    }
  }

  .date-period {
    margin-bottom: 30px;
    max-width: 323px;

    @include lg {
      margin-bottom: 20px;
      max-width: 300px;
    }

    &__img {
      width: 100%;
    }
  }
</style>
