<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Container from './Container.vue'
import HeaderLink from './HeaderLink.vue'
import Logo from './Logo.vue'
import AnnouncementBar from './AnnouncementBar.vue';
import FadeFromTopTransition from '@/transitions/FadeFromTopTransition.vue';

const scrolled = ref(false);
const showAnnouncementBar = ref(true);

const handleScroll = () => {
  scrolled.value = window.scrollY > 250;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


</script>

<template>
  <header
    class="sticky top-0 z-50 backdrop-blur-2xl [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all"
    :class="{ 'shadow-xl shadow-slate-400/10 bg-white/70': scrolled }">

    <FadeFromTopTransition>
      <AnnouncementBar v-if="showAnnouncementBar" @close="showAnnouncementBar = false" />
    </FadeFromTopTransition>
    <Container margin="var(--padding)" class="z-50 flex items-center justify-between"
      style="padding-block: var(--padding)" :class="{ 'py-6!': scrolled }">
      <Logo />

      <ul class="flex items-center gap-6">
        <HeaderLink to="/home">Home</HeaderLink>
        <HeaderLink to="/about">Sobre nós</HeaderLink>
        <HeaderLink to="/catalog">Catálogo</HeaderLink>
        <HeaderLink to="/contact">Contato</HeaderLink>
      </ul>
    </Container>



  </header>

</template>
