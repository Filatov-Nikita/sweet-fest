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
            <p class="text__p1">Сладкий ажиотаж в&nbsp;Ауре!</p>
            <p class="text__p2">Вход свободный – калории за&nbsp;наш счет</p>
          </div>
        </div>
        <div class="section-main__right">
          <img class="photo" width="1107" height="938" src="@/assets/images/ponchik.png" alt="" />
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

      @include md {
        padding-top: 0px;
        padding-bottom: 40px;
        column-gap: 30px;
      }

      @include sm {
        column-gap: 0px;
        row-gap: 32px;
      }
    }

    &__left {
      width: calc(45% - 25px);
      padding-top: 30px;

      @include md {
        padding-top: 20px;
        width: calc(50% - 15px);
      }

      @include sm {
        width: 100%;
      }
    }

    &__right {
      width: calc(55% - 25px);

      @include md {
        width: calc(50% - 15px);
      }

      @include sm {
        width: 100%;
      }
    }
  }

  .photo {
    @include sm {
      max-width: 520px;
      width: 100%;
      margin: 0 auto;
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
      font-size: 70px;
    }

    @include md {
      font-size: 50px;
      margin-bottom: 30px;
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
    font-size: 100px;

    @include xl {
      font-size: 90px;
    }

    @include lg {
      font-size: 70px;
    }

    &__p1 {
      font-size: 0.3em;
      font-weight: 600;
    }

    &__p2 {
      margin-top: 12px;
      font-size: 0.2em;

      @include md {
        margin-top: 8px;
      }
    }
  }

  .date-period {
    margin-bottom: 30px;
    max-width: 323px;

    @include lg {
      margin-bottom: 20px;
      max-width: 280px;
    }

    @include md {
      max-width: 180px;
    }

    &__img {
      width: 100%;
    }
  }
</style>
