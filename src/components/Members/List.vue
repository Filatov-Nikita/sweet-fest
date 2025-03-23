<template>
  <div class="members-list">
    <ListItem
      class="members-item"
      v-for="(item, index) in items"
      :item="item"
      @click="$emit('show:item', index)"
    />
  </div>
</template>

<script setup>
  import ListItem from './ListItem.vue';

  defineProps({
    items: {
      required: true,
      type: Array,
    }
  });

  defineEmits([ 'show:item' ]);
</script>

<style scoped lang="scss">
  .members-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: -40px;
    margin-top: -40px;
  }

  .members-item {
    margin-left: 40px;
    margin-top: 40px;
    width: calc(25% - 40px);

    @include xl {
      width: calc(33.3% - 40px);
    }

    @include md {
      width: calc(50% - 40px);
    }

    @include sm {
      width: calc(100% - 40px);
    }
  }
</style>
