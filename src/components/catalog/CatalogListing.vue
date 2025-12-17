<script setup lang="ts">
import CatalogProductCard from './CatalogProductCard.vue';

</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 transition-all">
    <CatalogProductCard v-for="n in 10" :key="n" />
  </div>
</template>
