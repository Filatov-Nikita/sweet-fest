<template>
  <footer class="footer">
    <div class="body">
      <p>ТРЦ «Аура»</p>
      <p class="address">г.&nbsp;Новосибирск, ул.&nbsp;Военная,&nbsp;5</p>
    </div>
    <TgChannel color="black" />
  </footer>
</template>

<script setup>
  import TgChannel from '@/components/Links/TgChannel.vue';
</script>

<style scoped lang="scss">
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    column-gap: 80px;
    row-gap: 30px;
  }

  .body {
    font-size: 20px;
    line-height: 1.3;
    letter-spacing: 0.01em;

    @include sm {
      font-size: 16px;
    }
  }

  .address {
    margin-top: 10px;
  }
</style>
