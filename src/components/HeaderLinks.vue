<script setup lang="ts">
import HeaderLink from './HeaderLink.vue';

</script>

<template>
  <ul class="flex items-center gap-6">
    <HeaderLink to="/home">Home</HeaderLink>
    <HeaderLink to="/catalog">Catálogo</HeaderLink>
    <HeaderLink to="/contact">Contato</HeaderLink>
  </ul>
</template>
