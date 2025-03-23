<template>
  <Modal v-model="value">
    <div class="card">
      <div class="head">
        <button class="btn-close" @click="value = false">
          <IconClose class="btn-close__icon" />
        </button>
      </div>
      <div class="body">
        <div class="logo">
          <img class="logo__img" :width="item.logo.width" :height="item.logo.height" :src="item.logo.src" />
        </div>
        <div class="name">{{ item.name }}</div>
        <p class="text">{{ item.text }}</p>
        <p class="caption">{{ item.caption }}</p>
      </div>
    </div>
  </Modal>
</template>

<script setup>
  import Modal from '@/components/Base/Modal.vue';
  import IconClose from '@/components/Icons/Close.vue';

  defineProps({
    item: {
      required: true,
      type: Object,
    }
  });

  const value = defineModel({ default: false });
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
    max-width: 800px;
    background-color: var(--color-white);
    border-radius: 30px;
    padding: 60px;
    padding-top: 40px;
  }

  .btn-close {
    width: 32px;
    height: 32px;
    padding: 4px;
    color: #757575;

    &:hover {
      color: var(--color-primary);
    }

    &__icon {
      width: 100%;
      height: 100%;
      fill: currentColor;
    }
  }

  .head {
    text-align: right;
  }

  .name {
    font-weight: 600;
    font-size: 24px;
    line-height: 1.35;
    margin-bottom: 14px;
  }

  .text {
    margin-bottom: 16px;
  }

  .caption {
    font-weight: 500;
    font-size: 15px;
    color: var(--color-primary);
  }

  .logo {
    width: fit-content;
    margin-bottom: 20px;
  }
</style>
