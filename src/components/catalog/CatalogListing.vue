<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import CatalogProductCard from './CatalogProductCard.vue';
import Icon from '../Icon.vue';
import GroupFadeInTransition from '../transitions/GroupFadeInTransition.vue';

const productStore = useProductStore();



</script>

<template>
  <div v-if="!productStore.filteredProducts.length" class="col-span-full text-center py-16">
    <Icon icon="fa-regular fa-face-frown" class="text-4xl mb-4 text-text-secondary/40" />
    <p class="text">Nenhum produto encontrado para esses filtros.</p>
    <p class="text-sm text-text-secondary/80">
      Tente ajustar seus filtros ou volte mais tarde.
    </p>
  </div>

  <GroupFadeInTransition class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 transition-all">
    <CatalogProductCard v-for="product in productStore.filteredProducts" :key="product.id" v-bind="product" />
  </GroupFadeInTransition>
</template>
