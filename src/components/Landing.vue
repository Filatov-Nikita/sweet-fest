<template>
  <main class="landing">
    <SectionMain class="landing__main" />
    <SectionMembers class="landing__members" />
    <SectionProgram class="landing__program" />
  </main>
</template>

<script setup>
  import SectionMain from './Sections/Main.vue';
  import SectionMembers from './Sections/Members.vue';
  import SectionProgram from './Sections/Program.vue';
</script>

<style scoped lang="scss">
  .landing {
    &__main {}

    &__members {
      padding: 60px 0;
    }

    &__program {
      padding: 60px 0;
    }
  }
</style>
