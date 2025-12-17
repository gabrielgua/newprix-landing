<script setup lang="ts">
import { useCataLogFilterStore, type FilterValue } from '@/stores/catalog-filter-store';
import { computed, type Component } from 'vue';
import Icon from '../Icon.vue';

import FadeFromBottomTransition from '@/transitions/FadeFromBottomTransition.vue';
import { ref } from 'vue';
import CatalogListingHeaderAll from './CatalogListingHeaderAll.vue';
import CatalogListingHeaderBrandWAP from './CatalogListingHeaderBrandWAP.vue';
import CatalogListingHeaderBrandAlhe from './CatalogListingHeaderBrandAlhe.vue';
import CatalogListingHeaderBrandNWX from './CatalogListingHeaderBrandNWX.vue';
import CatalogListingHeaderBrandVonder from './CatalogListingHeaderBrandVonder.vue';
import CatalogListingHeaderBrandSelene from './CatalogListingHeaderBrandSelene.vue';

const catalogFilterStore = useCataLogFilterStore();
const selectedFilter = computed(() => catalogFilterStore.selectedFilter);

const brandHeaders = ref<{
  value: FilterValue;
  component: Component
}[]>([
  { value: 'all', component: CatalogListingHeaderAll },
  { value: 'wap', component: CatalogListingHeaderBrandWAP },
  { value: 'alhe', component: CatalogListingHeaderBrandAlhe },
  { value: 'nwx', component: CatalogListingHeaderBrandNWX },
  { value: 'vonder', component: CatalogListingHeaderBrandVonder },
  { value: 'selene', component: CatalogListingHeaderBrandSelene },
])

</script>

<template>
  <FadeFromBottomTransition name="fade-from-bottom" tag="div">
    <component :is="brandHeaders.find(header => header.value === selectedFilter)?.component" />
  </FadeFromBottomTransition>


  <div class="flex items-end justify-between gap-3">
    <div
      class="flex items-center gap-4 bg-bg-base ps-4 rounded-2xl border border-border shadow-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all w-120">
      <Icon icon="magnifying-glass" class="text-sm text-text-secondary" />
      <input type="text" class="outline-none pe-4 py-2.5 w-full" placeholder="Buscar por produtos..." />
    </div>
    <p class="text-text-secondary/80">Mostrando todos os 15 produtos disponíveis</p>
  </div>
</template>
