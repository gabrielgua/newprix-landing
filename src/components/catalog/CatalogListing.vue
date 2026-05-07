<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import CatalogProductCard from './CatalogProductCard.vue';
import Icon from '../Icon.vue';
import GroupFadeInTransition from '../transitions/GroupFadeInTransition.vue';
import Button from '../Button.vue';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { Frown, House, RotateCcw } from '@lucide/vue';

const productStore = useProductStore();
const { resetFilters } = useCataLogFilterStore();



</script>

<template>
  <div v-if="!productStore.filteredProducts.length"
    class="col-span-full flex flex-col items-center text-center py-16 bg-bg-base border border-border rounded-2xl">
    <Icon :icon="Frown" class="text-4xl mb-4 text-text-secondary/40" />
    <p class="text-sm md:text-base">Nenhum produto <br class="block md:hidden"> encontrado para esses filtros.</p>
    <p class="text-xs md:text-sm text-text-secondary/80 max-w-content">
      Tente ajustar seus filtros ou volte mais tarde.
    </p>
    <div class="flex flex-col md:flex-row items-center gap-4 mt-4">
      <Button @click="resetFilters()" size="lg">
        <Icon :icon="RotateCcw" />
        Resetar filtros
      </Button>
      <RouterLink to="/home">
        <Button variant="neutral" size="sm">
          <Icon :icon="House" :size="16" />
          Voltar à Home
        </Button>
      </RouterLink>

    </div>
  </div>

  <GroupFadeInTransition class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 transition-all">
    <CatalogProductCard v-for="product in productStore.filteredProducts" :key="product.id" v-bind="product" />
  </GroupFadeInTransition>
</template>
