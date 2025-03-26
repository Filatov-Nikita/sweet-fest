<template>
  <div class="prog-items" ref="itemsRef">
    <ListItem
      class="prog-item"
      v-for="item in items"
      :item="item"
    />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import ListItem from './ListItem.vue';
  import useAppGrid from '@/composables/useAppGrid';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  const grid = useAppGrid();

  onMounted(() => {
    resetHeight();
    if(grid.sm) {
      fixHeight();
    }
  });

  const itemsRef = ref(null);

  function getMaxHeight(elements) {
    let maxHeight = 0;
    elements.forEach(el => {
      if(el.offsetHeight > maxHeight) {
        maxHeight = el.offsetHeight
      };
    });
    return maxHeight;
  }

  function resetHeight() {
    itemsRef.value.style.removeProperty('--logoMaxHeight');
    itemsRef.value.style.removeProperty('--nameMaxHeight');
    itemsRef.value.style.removeProperty('--textMaxHeight');
    itemsRef.value.style.removeProperty('--datesMaxHeight');
  }

  function fixHeight() {
    const logoMaxHeight = getMaxHeight(itemsRef.value.querySelectorAll('.prog-item .logo'));
    const nameMaxHeight = getMaxHeight(itemsRef.value.querySelectorAll('.prog-item .name'));
    const textMaxHeight = getMaxHeight(itemsRef.value.querySelectorAll('.prog-item .text'));
    const datesMaxHeight = getMaxHeight(itemsRef.value.querySelectorAll('.prog-item .dates'));
    itemsRef.value.style.setProperty('--logoMaxHeight', `${logoMaxHeight}px`);
    itemsRef.value.style.setProperty('--nameMaxHeight', `${nameMaxHeight}px`);
    itemsRef.value.style.setProperty('--textMaxHeight', `${textMaxHeight}px`);
    itemsRef.value.style.setProperty('--datesMaxHeight', `${datesMaxHeight}px`);
  }
</script>

<style scoped lang="scss">
  .prog-items {
    display: flex;
    flex-wrap: wrap;
    margin-left: -50px;
    margin-top: -50px;

    @include xs {
      margin-left: -30px;
      margin-top: -30px;
    }
  }

  .prog-item {
    margin-left: 50px;
    margin-top: 50px;
    width: calc(25% - 50px);

    @include xl {
      width: calc(33.3% - 50px);
    }

    @include md {
      width: calc(50% - 50px);
    }

    @include xs {
      margin-left: 30px;
      margin-top: 30px;
      width: calc(100% - 30px);
    }
  }
</style>
