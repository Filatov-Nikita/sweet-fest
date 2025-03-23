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

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  onMounted(() => {
    fixHeight();
    window.addEventListener('load', fixHeight);
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
  }

  .prog-item {
    margin-left: 50px;
    margin-top: 50px;
    width: calc(25% - 50px);
  }
</style>
