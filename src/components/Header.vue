<script setup lang="ts">
import { useScrollLock } from '@/composables/useScrollLock';
import FadeFromTopTransition from '@/transitions/FadeFromTopTransition.vue';
import FadeinTransition from '@/transitions/FadeinTransition.vue';
import FadeTransition from '@/transitions/FadeTransition.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';
import Container from './Container.vue';
import HeaderLinks from './HeaderLinks.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 250;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


const showHeaderMobile = ref(false);
useScrollLock(showHeaderMobile); //TODO when resizing to bigger screen sizes the scroll lock remains active
const toggleHeaderMobile = () => showHeaderMobile.value = !showHeaderMobile.value;


</script>

<template>
  <header class="backdrop-blur-3xl bg-bg-secondary/60 sticky top-0 z-50 transition-all"
    :class="scrolled ? 'py-4! lg:py-6! space-y-3 md:space-y-0 shadow-xl shadow-primary/20' : 'py-6! lg:py-8! space-y-6 md:space-y-0 text-normal'">
    <Container class="flex items-center justify-between ">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <HeaderLinks class="hidden md:flex" />
      <Button @click="toggleHeaderMobile" variant="neutral-icon" class="md:hidden">
        <FadeinTransition>
          <Icon v-if="showHeaderMobile" icon="xmark" size="lg" class="text-primary-500" />
          <Icon v-else icon="bars" size="lg" class="text-primary-500" />
        </FadeinTransition>
      </Button>
    </Container>
    <FadeFromTopTransition>
      <Container class="md:hidden mb-0" v-if="showHeaderMobile">
        <HeaderLinks @click="toggleHeaderMobile" class="flex-col items-start gap-4!" />
      </Container>
    </FadeFromTopTransition>
    <FadeTransition>
      <div v-if="showHeaderMobile" class="md:hidden absolute mt-6 bg-black/50 w-full min-h-dvh"
        @click="toggleHeaderMobile">
      </div>
    </FadeTransition>
  </header>

</template>
