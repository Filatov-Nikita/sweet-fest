<template>
  <div class="tabs">
    <div class="items">
      <TBtn
        class="item"
        v-for="(item, index) in items"
        :theme="activeTab === index ? 'colored' : 'outlined'"
        @click="$emit('change:tab', index)"
      >
        {{ item }}
      </TBtn>
    </div>
  </div>
</template>

<script setup>
  import TBtn from '@/components/Base/Button.vue';

  defineProps({
    activeTab: {
      required: true,
      type: Number,
    }
  });

  defineEmits(['change:tab']);

  const items = ['Дегустации', 'Акции', 'Мастер-классы', 'Сцена'];
</script>

<style scoped lang="scss">
  .tabs {
    overflow-x: scroll;
    width: fit-content;
    max-width: 100%;
    padding-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .items {
    display: flex;
    column-gap: 20px;
  }

  .item {
    min-width: 200px;
    white-space: nowrap;
  }
</style>
