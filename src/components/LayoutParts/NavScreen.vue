<template>
  <Teleport to="body">
    <Transition name="nav-anim">
      <div class="nav-mobile" v-if="showed">
        <div class="wrapper">
          <div class="body">
            <div class="head">
              <a class="logo" href="https://aura.planeta-mall.ru/" target="_blank">
                <img class="logo__img" width="155" height="37" src="@/assets/images/logo-aura.svg" alt="Логотип Аура">
              </a>
              <button class="btn-close" @click="$emit('close')">
                <IconClose />
              </button>
            </div>
            <div class="nav">
              <div class="nav-wrap">
                <a class="nav-link" href="#about" @click.prevent="scroll">Описание</a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#members" @click.prevent="scroll">Участники</a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#program" @click.prevent="scroll">Программа</a>
              </div>
              <div class="nav-wrap">
                <a class="nav-link" href="#partners" @click.prevent="scroll">Партнеры</a>
              </div>
            </div>
            <TgChannel color="white" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
  import IconClose from '@/components/Icons/Close.vue';
  import TgChannel from '@/components/Links/TgChannel.vue';

  defineProps({
    showed: {
      required: true,
      type: Boolean,
    },
  });

  const emit = defineEmits([ 'close' ]);

  function scroll(e) {
    const id = e.target.getAttribute('href');
    if(!id) return;
    const el = document.querySelector(id);
    if(!el) return;
    el.scrollIntoView({ behavior: 'smooth' });
    emit('close');
  }
</script>

<style scoped lang="scss">
  .nav-mobile {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9000;
    background: linear-gradient(90deg, #f2826f 0%, #fd556f 100%);
    overflow-x: hidden;
    padding-bottom: 32px;
  }

  .body {
    padding-top: 30px;
  }


  .logo {
    width: 103px;
    &__img {
      width: 100%;
    }
  }

  .head {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  .nav-anim {
    &-enter-from {
      opacity: 0;
    }

    &-enter-active {
      transition: opacity 300ms;
    }

    &-leave-active {
      transition: opacity 300ms;
      opacity: 0;
    }
  }

  .nav {
    margin-bottom: 50px;
  }

  .nav-wrap {
    padding: 12px 0;
  }

  .nav-link {
    font-size: 16px;
    line-height: 1.25;
    text-decoration: none;
    color: var(--color-white);
  }

  .btn-close {
    cursor: pointer;
    width: 32px;
    height: 32px;
    fill: var(--color-white);
  }
</style>
