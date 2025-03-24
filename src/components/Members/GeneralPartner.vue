<template>
  <section class="section-gen-partner">
    <h3 class="section-gen-partner__title">Генеральный партнер</h3>
    <article class="item" @click="showed = true">
      <div class="photo">
        <img class="photo__img" width="320" height="320" :src="item.preview" loading="lazy" />
      </div>
      <h4 class="title">{{ item.name }}</h4>
      <p class="text">{{ item.description }}</p>
    </article>
    <ModalShow v-model="showed" :item="item" />
  </section>
</template>

<script setup>
  import { ref } from 'vue';
  import ModalShow from './ModalShow.vue';

  const showed = ref(false);

  const item = {
    name: 'Kulikov',
    description: 'Сеть кондитерских',
    preview: '/members/kulikov/preview.jpg',
    text: `
      Kulikov — это волшебство праздника, заключенное в каждом десерте. Мы создаем уникальные моменты радости и наслаждения, используя только натуральные ингредиенты в наших кондитерских изделиях ручной работы. Каждый торт, пирожное или сладость наполняет атмосферу теплом и счастьем.<br/><br/>Компания Kulikov уже более 33 лет, радует своих гостей сладостями.<br/>- в нашем ассортименте более 200 продуктов, чтобы каждый нашел свое. Мы каждый день стремимся стать лучше для наших любимых гостей и с трепетом относимся к каждому отзыву. Мы черпаем вдохновение в улыбках потребителей и постоянно расширяем ассортимент, пробуем новое и следуем трендам.
    `,
    caption: 'Раздача торта гиганта: 6 апреля с 13:00 до 13:40',
    logo: {
      width: '154',
      height: '100',
      src: '/members/kulikov/logo.png',
    }
  };
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
    cursor: pointer;
    max-width: 320px;
    margin: 0 auto;
    text-align: center;

    &:hover {
      .photo__img {
        transform: scale(1.05);
      }

      .title {
        color: var(--color-primary);
      }

      .text {
        opacity: 0.7;
      }
    }
  }

  .photo {
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 12px;

    &__img {
      transition: transform 150ms;
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
