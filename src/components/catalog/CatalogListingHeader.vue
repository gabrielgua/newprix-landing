<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed, type Component } from 'vue';
import Icon from '../Icon.vue';

import FadeFromBottomTransition from '@/transitions/FadeFromBottomTransition.vue';
import { ref } from 'vue';
import CatalogListingHeaderAll from './CatalogListingHeaderAll.vue';
import CatalogListingHeaderBrandAlhe from './CatalogListingHeaderBrandAlhe.vue';
import CatalogListingHeaderBrandNWX from './CatalogListingHeaderBrandNWX.vue';
import CatalogListingHeaderBrandSelene from './CatalogListingHeaderBrandSelene.vue';
import CatalogListingHeaderBrandVonder from './CatalogListingHeaderBrandVonder.vue';
import CatalogListingHeaderBrandWAP from './CatalogListingHeaderBrandWAP.vue';
import { useBrandStore } from '@/stores/brand-store';

const catalogFilterStore = useCataLogFilterStore();
const { getBrand } = useBrandStore();
const selectedFilter = computed(() => catalogFilterStore.selectedFilter);

const brandHeaders = ref<{
  value: string;
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
  <div class="bg-gradient-to-l rounded to-80% to-bg-muted py-6 transition-colors"
    :class="getBrand(selectedFilter)?.gradientColor ? getBrand(selectedFilter)?.gradientColor : 'from-slate-200'">
    <FadeFromBottomTransition>
      <component :is="brandHeaders.find(header => header.value === selectedFilter)?.component" />
    </FadeFromBottomTransition>
  </div>
</template>
