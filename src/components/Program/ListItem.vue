<template>
  <article>
    <div class="logo">
      <img class="logo__img" :width="item.logo.width" :height="item.logo.height" :src="item.logo.src" />
    </div>
    <h3 class="name">{{ item.name }}</h3>
    <div class="text" v-html="item.text"></div>
    <div class="dates">
      <p class="date" v-for="date in item.dates">{{ date }}</p>
    </div>
    <p class="caption" v-if="item.caption">{{ item.caption }}</p>
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
  .name {
    min-height: var(--nameMaxHeight);
    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;
    margin-bottom: 14px;
  }

  .logo {
    min-height: var(--logoMaxHeight);
    width: fit-content;
    margin-bottom: 15px;
  }

  .dates {
    min-height: var(--datesMaxHeight);
    p + p {
      margin-top: 4px;
    }
  }

  .date {
    font-weight: 500;
    font-size: 15px;
    color: var(--color-primary);
  }

  .text {
    min-height: var(--textMaxHeight);
    font-size: 15px;
    margin-bottom: 16px;
  }

  .caption {
    margin-top: 10px;
    color: #555454;
    font-size: 14px;
  }
</style>
