<template>
  <section id="members">
    <div class="wrapper">
      <h2 class="h2 title">
        <span class="title__w1">у</span>
        <span>частники</span>
      </h2>
      <GeneralPartner class="members-gen" />
      <MembersList :items="items" @show:item="activeIndex = $event; showedItem = true" />
      <ModalShow v-if="activeItem" v-model="showedItem" :item="activeItem" />
    </div>
  </section>
</template>

<script setup>
  import GeneralPartner from '@/components/Members/GeneralPartner.vue';
  import MembersList from '@/components/Members/List.vue';
  import ModalShow from '@/components/Members/ModalShow.vue';
  import { computed, ref } from 'vue';

  const items = [
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
    {
      name: 'Таежная слобода',
      description: 'Мед с Горного Алтая',
      preview: '/members/таежная_слобода/preview.jpg',
      text: '123',
      caption: '1234',
      logo: {
        width: '91',
        height: '100',
        src: '/members/таежная_слобода/logo.png',
      }
    },
  ];

  const showedItem = ref(false);
  const activeIndex = ref(null);
  const activeItem = computed(() => {
    if(activeIndex.value === null) return null;
    return items[activeIndex.value];
  });
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
    white-space: nowrap;
    line-height: 1;
    margin-bottom: 50px;

    &__w1, &__w2 {
      display: inline-block;
    }

    &__w1 {
      text-transform: lowercase;
      transform: translateY(-0.2em);
    }
  }

  .members-gen {
    margin-bottom: 50px;
  }
</style>
