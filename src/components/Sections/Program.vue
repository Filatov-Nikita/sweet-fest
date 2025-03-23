<template>
  <section id="members">
    <div class="wrapper">
      <h2 class="h2 title">Программа</h2>
      <ProgTabs class="prog-tabs" :activeTab="activeTab" @change:tab="activeTab = $event; swiper?.slideTo($event)" />
      <Swiper @swiper="swiper = $event">
        <SwiperSlide key="0">
          <ProgList :items="items[0]" />
        </SwiperSlide>
        <SwiperSlide key="1">
          <ProgList :items="items[1]" />
        </SwiperSlide>
        <SwiperSlide>
          2
        </SwiperSlide>
        <SwiperSlide>
          3
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
  import ProgTabs from '@/components/Program/Tabs.vue';
  import ProgList from '@/components/Program/List.vue';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { ref } from 'vue';

  const activeTab = ref(0);
  const swiper = ref(null);

  const items = [
    [
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Сеть кондитерских «Kulikov»',
        text: '<span>РАЗДАЧА ТОРТА ГИГАНТА</span> от компании «Куликовский»: 3400 кусочков торта компания подарит в честь своего 34-летия!',
        dates: ['4 апреля 18:00-19:00', '4 апреля 18:00-19:00'],
      },
      {
        logo: {
          width: '40',
          height: '46',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Сеть кov»',
        text: '<span>РАЗДАЧА ТОРТА ГИГ',
        dates: ['4 апреля 18:00-19:00'],
        caption: 'Ограничение – до 25 чел.',
      },
    ],
    [
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Сеть кондитерских «Kulikov»',
        text: '<span>РАЗДкусочков торта компания подарит в честь своего 34-летия!',
        dates: ['4 апреля 18:00-19:00', '4 апреля 18:00-19:00'],
      },
      {
        logo: {
          width: '80',
          height: '86',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Сеть кондитерских «Kulikov» «Kulikov» «Kulikov»«Kulikov» «Kulikov» «Kulikov»',
        text: '<span> компания подарит в честь своего 34-летия!',
        dates: ['4 апреля 18:00-19:00', '4 апреля 18:00-19:00', '4 апреля 18:00-19:00', '4 апреля 18:00-19:00'],
      },
    ],
  ];
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
    margin-bottom: 50px;
  }

  .prog-tabs {
    margin-bottom: 50px;
  }
</style>
