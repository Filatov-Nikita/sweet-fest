<template>
  <section id="program">
    <div class="wrapper">
      <h2 class="h2 title">Программа</h2>
      <ProgTabs class="prog-tabs" :activeTab="activeTab" @change:tab="activeTab = $event; swiper?.slideTo($event)" />
      <Swiper :allowTouchMove="false" @swiper="swiper = $event">
        <SwiperSlide key="0">
          <ProgList class="row1" :items="items[0]" />
        </SwiperSlide>
        <SwiperSlide key="1">
          <ProgList :items="items[1]" />
        </SwiperSlide>
        <SwiperSlide key="3">
          <ProgList :items="items[2]" />
        </SwiperSlide>
        <SwiperSlide key="4">
          <ProgList :items="items[3]" />
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
          width: '154',
          height: '44',
          src: '/members/kulikov/logo2.png',
        },
        name: 'Сеть кондитерских «Kulikov»',
        text: '<span class="semi-bold">РАЗДАЧА ТОРТА ГИГАНТА</span><br/>от компании «Куликовский»: 3400 кусочков торта компания подарит в честь своего 34-летия!',
        dates: ['6 апреля 13:00-14:30'],
      },
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Пчелоферма «Таёжная слобода»',
        text: 'Дегустации уникальных сортов мёда, раскроем все секреты производства высококачественного продукта и какую пользу пчелопродукты несут для всей семьи',
        dates: ['4-6 апреля 10:00-22:00'],
      },
      {
        logo: {
          width: '63',
          height: '66',
          src: '/members/bossberry/logo.png',
        },
        name: 'BossBerry',
        text: 'Более 60 видов драже с орехами и ягодами. Ягоды в йогуртовой заливке. Орехи в бельгийском шоколаде. 100% натуральные, без пищевых красителей и химии',
        dates: ['4-6 апреля 10:00-22:00'],
      },
      {
        logo: {
          width: '66',
          height: '66',
          src: '/members/сибирская_воля/logo.png',
        },
        name: 'Сибирская Воля',
        text: 'Дегустации сбитня и пряников, расскажем об истории сбитня и пользе лечебных трав',
        dates: ['4-6 апреля 10:00-22:00'],
      },
      {
        logo: {
          width: '80',
          height: '66',
          src: '/members/кафе_шеff_на_месте/logo2.png',
        },
        name: 'Кафе «Шеff на месте»',
        text: 'На дегустации все гости фестиваля смогут попробовать сэндвичи, салаты, десерты: медовик, тирамису, шоколадный трайфл, шоколадный брауни',
        dates: [
          '4 апреля 17:00-18:00',
          '5 апреля 16:00-17:00',
          '6 апреля 15:00-16:00',
        ],
      },
      {
        logo: {
          width: '101',
          height: '66',
          src: '/members/зефирель/logo2.png',
        },
        name: 'Зефирель',
        text: 'Дегустация натурального ягодного зефира ручной работы. Зефир от компани  «Зефирель», как искусство – но его можно будет съесть!',
        dates: [
          '4 апреля 18:00-20:00',
          '5 апреля 17:00-19:00',
          '6 апреля 17:00-18:00',
        ],
      },
      {
        logo: {
          width: '66',
          height: '66',
          src: '/members/пыжка/logo.png',
        },
        name: 'ПыЖка',
        text: 'Конкурс по поеданию пышек! 5 человек старше 18 лет получат комплект пышек и воду для соревнования по поеданию пышек на сцене',
        dates: [
          '5 апреля 14:00-14:20',
          '6 апреля 15:00-15:20',
        ],
      },
      {
        logo: {
          width: '66',
          height: '66',
          src: '/members/крошка_пряник/logo.png',
        },
        name: 'Крошка Пряник',
        text: 'Ароматные, нежные, вкусные, приготовленные с душой пряничные сувениры можно будет попробовать на большой пряничной дегустации!',
        dates: [
          '5 апреля 16:00-17:00',
        ],
      },
    ],
    [
      {
        logo: {
          width: '138',
          height: '66',
          src: '/members/дом_конфеи/logo.png',
        },
        name: 'Шоколадная мастерская «Дом Конфеи»',
        text: 'При покупке 3-х сетов – баночка сладкого десерта в подарок (на выбор солёная карамель, птичье молоко, шоколадно-ореховая паста)',
        dates: [
          '4-6 апреля 10:00-22:00',
        ],
      },
      {
        logo: {
          width: '80',
          height: '66',
          src: '/members/кафе_шеff_на_месте/logo2.png',
        },
        name: 'Кафе «Шеff на месте»',
        text: 'Комбо – напиток и сэндвич, напиток и десерт по специальным ценам со скидкой 15%! Розыгрыш для гостей фестиваля: за любую покупку на фесте вы получите купон для участия в розыгрыше большой плитки дубайского шоколада',
        dates: [
          '4 этаж, Шеff на месте',
        ],
      },
      {
        logo: {
          width: '102',
          height: '66',
          src: '/members/шоколатерия_chocolart/logo2.png',
        },
        name: 'Шоколатерия Chocolart',
        text: 'Акция – викторина о шоколаде, подарок за правильные ответы',
        dates: [],
      },
      {
        logo: {
          width: '120',
          height: '66',
          src: '/members/manna_confectionery/logo.png',
        },
        name: 'Manna Confectionery',
        text: 'Беспроигрышная лотерея при покупке эклеров с возможностью выиграть сертификат на любой эклер! А оставив отзыв о компании «Manna» в 2ГИС, вы получите в подарок к своему десерту ароматный листовой чай!',
        dates: [],
      },
    ],
    [
    {
        logo: {
          width: '66',
          height: '66',
          src: '/members/шоколадный_дом_бриля/logo.png',
        },
        name: 'Шоколадный дом Бриля',
        text: 'Бесплатный мастер-класс по созданию шоколадных плиток от компании Шоколадный дом Бриля.',
        dates: [
          '4 апреля 18:00-19:00',
        ],
        caption: 'Ограничение – до 25 чел.',
      },
      {
        logo: {
          width: '66',
          height: '66',
          src: '/members/маррисолька/logo.png',
        },
        name: 'Маррисолька',
        text: 'Мастер-классы по росписи имбирных пряников',
        dates: [
          '4-6 апреля 12:00-16:00',
        ],
        caption: 'Ограничение – 15 чел./час',
      },
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/таежная_слобода/logo.png',
        },
        name: 'Таёжная слобода',
        text: 'Мастер-класс «Как определить натуральный мед?»',
        dates: [
          '5 апреля 19:00-20:00',
        ],
      },
    ],
    [
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/other/dj.png',
        },
        name: '4 апреля 17:00-20:00',
        text: 'Зажигательные DJ-сеты',
        dates: [],
      },
      {
        logo: {
          width: '60',
          height: '66',
          src: '/members/other/gifts.png',
        },
        name: '5-6 апреля 14:00-18:00',
        text: `
          <ul>
            <li>Поедание пончиков на скорость</li>
            <li>Колесо фортуны – крути и выигрывай призы. Участие за чек с Фуд-Парка и ярмарки от&nbsp;1000&nbsp;₽</li>
            <li>Музыка для твоего настроения</li>
            <li>Конкурсы и игры от ведущего</li>
          </ul>
        `,
        dates: [],
      },
    ],
  ];
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
    margin-bottom: 50px;

    @include sm {
      margin-bottom: 30px;
    }
  }

  .prog-tabs {
    margin-bottom: 50px;

    @include sm {
      margin-bottom: 30px;
    }
  }

  .row1 :deep(.prog-item .dates) {
    min-height: auto !important;
  }
</style>
