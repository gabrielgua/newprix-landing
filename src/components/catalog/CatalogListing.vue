<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import CatalogProductCard from './CatalogProductCard.vue';

const productStore = useProductStore();



</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
    <CatalogProductCard v-for="product in productStore.products" :key="product.id" v-bind="product" />
  </div>
</template>
