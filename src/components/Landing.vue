<template>
  <main class="landing">
    <SectionMain class="landing__main" />
    <SectionAbout class="landing__about" />
    <SectionMembers class="landing__members" />
    <SectionProgram class="landing__program" />
    <SectionPartners class="landing__partners" />
    <SectionSubscribe class="landing__subscribe" />
    <SectionVideo class="landing__video" />
    <SectionFooter class="landing__footer" />
  </main>
</template>

<script setup>
  import SectionMain from './Sections/Main.vue';
  import SectionMembers from './Sections/Members.vue';
  import SectionProgram from './Sections/Program.vue';
  import SectionAbout from './Sections/About.vue';
  import SectionPartners from './Sections/Partners.vue';
  import SectionSubscribe from './Sections/Subscribe.vue';
  import SectionFooter from './Sections/Footer.vue';
  import SectionVideo from './Sections/Video.vue';
</script>

<style scoped lang="scss">
  .landing {
    &__about {
      padding-top: 100px;
      padding-bottom: 60px;

      @include sm {
        padding-top: 40px;
        padding-bottom: 35px;
      }
    }

    &__members {
      padding: 60px 0;

      @include sm {
        padding: 35px 0;
      }
    }

    &__program {
      padding: 60px 0;

      @include sm {
        padding: 35px 0;
      }
    }

    &__partners {
      padding: 60px 0 75px;

      @include sm {
        padding: 35px 0;
      }
    }

    &__subscribe {
      padding: 75px 0;

      @include sm {
        padding: 35px 0;
      }
    }

    &__video {
      padding: 50px 0;

      @include sm {
        padding: 25px 0;
      }
    }

    &__footer {
      padding: 75px 0;

      @include sm {
        padding: 35px 0;
      }
    }
  }
</style>
