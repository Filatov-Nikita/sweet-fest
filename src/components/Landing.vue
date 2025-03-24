<template>
  <main class="landing">
    <SectionMain class="landing__main" />
    <SectionAbout class="landing__about" />
    <SectionMembers class="landing__members" />
    <SectionProgram class="landing__program" />
    <SectionFooter class="landing__footer" />
  </main>
</template>

<script setup>
  import SectionMain from './Sections/Main.vue';
  import SectionMembers from './Sections/Members.vue';
  import SectionProgram from './Sections/Program.vue';
  import SectionAbout from './Sections/About.vue';
  import SectionFooter from './Sections/Footer.vue';
</script>

<style scoped lang="scss">
  .landing {
    &__about {
      padding-top: 100px;
      padding-bottom: 60px;
    }

    &__members {
      padding: 60px 0;
    }

    &__program {
      padding: 60px 0;
    }

    &__footer {
      padding: 75px 0;
    }
  }
</style>
