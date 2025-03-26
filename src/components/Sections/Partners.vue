<template>
  <section id="partners">
    <div class="wrapper">
      <h2 class="h2 title">Партнеры</h2>
      <div class="logos">
        <div class="logo-item">
          <img width="172" height="72" src="@/assets/images/partners/10.png" loading="lazy" />
        </div>
        <div class="logo-item">
          <img width="249" height="72" src="@/assets/images/partners/11.png" loading="lazy" />
        </div>
        <div class="logo-item">
          <img width="234" height="62" src="@/assets/images/partners/12.png" loading="lazy" />
        </div>
      </div>

      <Swiper
        :slidesPerView="'auto'"
        :spaceBetween="40"
        :modules="[ Autoplay ]"
        :autoplay="{
          delay: 3000,
        }"
        :breakpoints="{
          '700.1': {
            spaceBetween: 70,
          }
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

    @include sm {
      margin-bottom: 30px;
    }
  }

  .slide {
    user-select: none;
    width: fit-content;
    display: flex;
    align-items: center;
    height: auto !important;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 70px;
    row-gap: 40px;
    margin-bottom: 60px;

    @include sm {
      row-gap: 32px;
      column-gap: 40px;
      margin-bottom: 50px;
    }
  }

  .logo-item {
    &:nth-child(1) {
      img {
        @include sm {
          width: 145px;
        }
      }
    }

    &:nth-child(2) {
      @include md {
        order: -1;
        width: 100%;

        img {
          margin: 0 auto;

          @include sm {
            width: 183px;
          }
        }
      }
    }

    &:nth-child(3) {
      img {
        @include sm {
          width: 175px;
        }
      }
    }
  }
</style>
