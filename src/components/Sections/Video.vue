<template>
  <section id="video">
    <div class="wrapper">
      <h2 class="h2 title">Как это было</h2>
      <div class="video-wrap">
        <video class="video" src="/videos/sweet-fest.mp4" controls></video>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .title {
    text-align: center;
    margin-bottom: 30px;

    @include md {
      font-size: 40px;
    }

    @include xs {
      font-size: 28px;
      margin-bottom: 20px;
    }
  }

  .video-wrap {
    border-radius: 16px;
    overflow: hidden;
  }

  .video {
    width: 100%;
  }
</style>
