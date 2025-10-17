<script setup lang="ts">
import Container from './Container.vue'
import HeaderLink from './HeaderLink.vue'
import Logo from './Logo.vue'
</script>

<template>
  <header class="bg-bg-base [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all"
    style="padding-block: var(--padding)">
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
