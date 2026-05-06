<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed } from 'vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import GroupFadeInTransition from '../transitions/GroupFadeInTransition.vue';
import CatalogFiltersDisplayItem from './CatalogFiltersDisplayItem.vue';
import { useProductStore } from '@/stores/product.store';
import Divider from '../Divider.vue';

const catalogFilterStore = useCataLogFilterStore();
const productStore = useProductStore();

const showFilters = computed(() => {
  return (
    catalogFilterStore.filter.term ||
    catalogFilterStore.filter.brand?.value !== 'all' ||
    catalogFilterStore.filter.orderBy !== 'default'
  )
})

</script>

<template>
  <div class="text-sm border-y border-border flex flex-wrap gap-4 justify-between"
    :class="[showFilters ? 'py-4 md:py-2.5' : 'py-4']">
    <div v-if="showFilters" class="flex items-center gap-2.5 md:gap-4 transition-all w-full">
      <p>Filtros: </p>
      <GroupFadeInTransition class="flex items-center gap-2 transition-all flex-wrap">
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.term" @remove="catalogFilterStore.resetTerm()">
          "{{ catalogFilterStore.filter.term }}"
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.brand?.value !== 'all'"
          @remove="catalogFilterStore.resetBrand()">
          {{ catalogFilterStore.filter.brand?.label }}
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.orderBy !== 'default'"
          @remove="catalogFilterStore.resetOrderBy()">
          {{ catalogFilterStore.selectedOrderByLabel }}
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.store !== 'all'"
          @remove="catalogFilterStore.resetStore()">
          {{ catalogFilterStore.selectedStoreLabel }}
        </CatalogFiltersDisplayItem>
      </GroupFadeInTransition>
    </div>

    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 text-text-primary ml-auto">
        <p class="font-light">
          ({{ productStore.filteredProducts.length }} de {{ productStore.products.length }})
        </p>
        <p class="font-semibold">
          Resultados
        </p>
      </div>
      <Button v-if="showFilters" variant="neutral-outlined" size="xs" class="gap-2!"
        @click="catalogFilterStore.resetFilters()">
        <Icon icon="rotate-left" class="text-xs" />
        Resetar filtros
      </Button>
    </div>

  </div>
</template>
