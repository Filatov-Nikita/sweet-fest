<template>
  <div>
    <div class="wrapper">
      <div class="photo">
        <img class="photo__img" width="1300" height="730" src="@/assets/images/banner.jpg" loading="lazy" alt="" />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
  import Footer from '@/components/LayoutParts/Footer.vue';
</script>

<style scoped lang="scss">
  .photo {
    margin-bottom: 60px;
    overflow: hidden;
    border-radius: 50px;

    &__img {
      width: 100%;
    }
  }
</style>
