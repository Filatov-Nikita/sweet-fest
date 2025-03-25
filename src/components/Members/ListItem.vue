<template>
  <article class="item">
    <div class="photo">
      <img class="photo__img" width="290" height="290" :src="item.preview" loading="lazy" />
    </div>
    <h3 class="title">{{ item.name }}</h3>
    <p class="text">{{ item.description }}</p>
  </article>
</template>

<script setup>
  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });
</script>

<style scoped lang="scss">
  .item {
    cursor: pointer;

    &:hover {
      .photo__img {
        transform: scale(1.2);
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
    margin-bottom: 12px;
    overflow: hidden;
    border-radius: 30px;

    @include sm {
      margin-bottom: 10px;
    }

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

    @include sm {
      font-size: 16px;
    }
  }

  .text {
    @include sm {
      font-size: 13px;
    }
  }
</style>
