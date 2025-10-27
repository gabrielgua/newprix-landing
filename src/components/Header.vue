<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import Container from './Container.vue'
import HeaderLink from './HeaderLink.vue'
import Logo from './Logo.vue'

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


</script>

<template>
  <header
    class="bg-bg-base [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all shadow-lg shadow-slate-100"
    style="padding-block: var(--padding)" :class="{ 'py-6! md:py-8!': scrolled }">
    <Container margin="var(--padding)" class="flex items-center justify-between">
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
