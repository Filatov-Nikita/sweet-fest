<template>
  <section id="about">
    <div class="wrapper">
      <h2 class="title">
        <span class="title__w1">впервые</span>
        <span class="title__w2">
          <span class="title__icon">
            <img width="70" height="70" src="@/assets/images/decor/chokolate.png" />
          </span> <span class="title__text">сладкйи фест</span> <span class="title__icon">
            <img width="70" height="70" src="@/assets/images/decor/chokolate.png" />
          </span>
        </span>
        <span class="title__w3">в Ауре</span>
      </h2>
      <p class="subtitle">4-6 апреля ТРЦ «Аура» превратится в сахарный эпицентр</p>

      <div class="about-items">
        <AboutItems />
      </div>

      <div class="text">
        <p class="text__p1">
          Живая музыка, тонны шоколада и море веселья — вход свободный, но уговорить себя уйти будет сложно.
        </p>
        <p class="text__p2">
          Диета подождет. Вы — нет!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import AboutItems from '@/components/About/Items.vue';
</script>

<style scoped lang="scss">
  .title {
    text-transform: none;
    text-align: center;
    font-size: 100px;
    font-weight: var(--font-kisa);
    line-height: 1;

    &__w1, &__w2, &__w3 {
      display: block;
      width: 100%;
    }

    &__w1, &__w3 {
      font-size: 0.44em;
      font-weight: 400;
    }

    &__w2 {
      margin-top: 9px;
      font-weight: 600;
      font-size: 0.7em;
      line-height: 1.1;
      white-space: nowrap;
    }

    &__w3 {
      margin-top: 10px;
    }

    &__icon, &__text {
      display: inline-block;
      vertical-align: middle;
    }
  }

  .subtitle {
    margin: 30px 0;
    text-align: center;
    font-size: 24px;
  }

  .text {
    margin-top: 30px;
    text-align: center;
    font-size: 20px;

    &__p1 {
      max-width: 720px;
      margin: 0 auto;
    }

    &__p2 {
      margin-top: 10px;
    }
  }

  .about-items {
    max-width: 900px;
    margin: 0 auto;
  }
</style>
