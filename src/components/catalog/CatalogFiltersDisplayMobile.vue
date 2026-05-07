<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { useProductStore } from '@/stores/product.store';
import { computed } from 'vue';
import Icon from '../Icon.vue';
import GroupFadeInTransition from '../transitions/GroupFadeInTransition.vue';
import CatalogFiltersDisplayItem from './CatalogFiltersDisplayItem.vue';
import { ChevronRight } from '@lucide/vue';

const catalogFilterStore = useCataLogFilterStore();
const productStore = useProductStore();

const showFilters = computed(() => catalogFilterStore.showFiltersMobile)

</script>

<template>
  <div class="text-sm flex flex-wrap gap-2 justify-between transition-all">


    <div class="flex items-center justify-between w-full transition-all">
      <div class="flex items-center gap-1 text-xs text-text-secondary">
        <p class="font-medium">Produtos</p>
        <Icon :icon="ChevronRight" :size="14" />
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.brand?.value"
          :btn-disabled="catalogFilterStore.filter.brand.value === 'all'" @remove="catalogFilterStore.resetBrand()">
          {{ catalogFilterStore.filter.brand.label }}
        </CatalogFiltersDisplayItem>
      </div>
      <p class="font-light text-text-primary text-xs ml-auto">
        ({{ productStore.filteredProducts.length }} de {{ productStore.products.length }})
      </p>
    </div>

    <div v-if="showFilters" class="flex items-center gap-2.5 md:gap-4 transition-all w-full">
      <GroupFadeInTransition class="flex items-center gap-2 transition-all flex-wrap">
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.term" @remove="catalogFilterStore.resetTerm()">
          "{{ catalogFilterStore.filter.term }}"
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
  </div>
</template>
