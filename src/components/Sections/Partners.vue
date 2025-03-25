<template>
  <section id="partners">
    <div class="wrapper">
      <h2 class="h2 title">Партнеры</h2>
      <Swiper
        class="swiper1"
        :slidesPerView="'auto'"
        :spaceBetween="70"
        :modules="[ Autoplay ]"
        :autoplay="{
          delay: 5000,
        }"
      >
        <SwiperSlide class="slide">
          <img width="172" height="72" src="@/assets/images/partners/10.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="249" height="72" src="@/assets/images/partners/11.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="234" height="62" src="@/assets/images/partners/12.png" loading="lazy" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        :slidesPerView="'auto'"
        :spaceBetween="70"
        :modules="[ Autoplay ]"
        :autoplay="{
          delay: 3000,
        }"
      >
        <SwiperSlide class="slide">
          <img width="109" height="121" src="@/assets/images/partners/1.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="109" height="114" src="@/assets/images/partners/2.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="105" height="105" src="@/assets/images/partners/3.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="211" height="100" src="@/assets/images/partners/4.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="139" height="139" src="@/assets/images/partners/5.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="160" height="77" src="@/assets/images/partners/6.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="144" height="123" src="@/assets/images/partners/7.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="101" height="101" src="@/assets/images/partners/8.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="116" height="116" src="@/assets/images/partners/9.png" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide class="slide">
          <img width="183" height="100" src="@/assets/images/partners/13.png" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay } from 'swiper/modules';
</script>

<style scoped lang="scss">
  .title {
    text-align: center;
    margin-bottom: 60px;
  }

  .slide {
    user-select: none;
    width: fit-content;
    display: flex;
    align-items: center;
    height: auto !important;
  }

  .swiper1 {
    max-width: 828px;
    margin: 0 auto;
    margin-bottom: 54px;
  }
</style>
