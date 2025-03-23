<template>
  <section class="section-gen-partner">
    <h3 class="section-gen-partner__title">Генеральный партнер</h3>
    <article class="item">
      <div class="photo">
        <img class="photo__img" width="320" height="320" src="@/assets/images/general-partner/preview.jpg" loading="lazy" />
      </div>
      <h4 class="title">Kulikov</h4>
      <p class="text">Сеть кондитерских</p>
    </article>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .section-gen-partner {
    &__title {
      text-align: center;
      font-size: 20px;
      color: var(--color-accent);
      font-family: var(--font-kisa);
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }

  .item {
    max-width: 320px;
    margin: 0 auto;
    text-align: center;
  }

  .photo {
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 12px;

    &__img {
      width: 100%;
    }
  }

  .title {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.35;
    margin-bottom: 4px;
  }
</style>
