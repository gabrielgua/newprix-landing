<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed, watch } from 'vue';

import { useBrandStore } from '@/stores/brand-store';
import FadeFromBottomTransition from '@/components/transitions/FadeFromRightTransition.vue';
import type { Brand } from '@/types/brand';
import { ref } from 'vue';
import Icon from '../Icon.vue';
import CatalogListingHeaderBrandCard from './CatalogListingHeaderBrandCard.vue';
import { Layers } from '@lucide/vue';

const catalogFilterStore = useCataLogFilterStore();
const brandStore = useBrandStore();
const selectedFilter = computed(() => catalogFilterStore.filter.brand?.value);

type BrandHeader = Brand & {
  logoSrc?: string;
}

const allFilter: BrandHeader = {
  label: 'Todos',
  value: 'all',
  fullName: 'Todas as Marcas',
  textColor: 'text-primary',
  gradientColor: 'from-slate-200',
  description: 'Mostrando todo o nosso catálogo.'
}

const brandHeaders = ref<BrandHeader[]>([]);

const getBrand = () => {
  const brand = brandStore.brands.find(b => b.value === selectedFilter.value);
  return brand ? brand : allFilter;
}

watch(() => catalogFilterStore.filter.brand?.value, () => {
  brandHeaders.value.pop();
  brandHeaders.value.push(getBrand());
}, { immediate: true });

</script>

<template>
  <div>
    <ul>
      <FadeFromBottomTransition>
        <CatalogListingHeaderBrandCard v-for="brandHeader in brandHeaders" :key="brandHeader.value"
          :brand-name="brandHeader.label" :color="brandHeader.textColor">
          <template #img>
            <div class="group size-24 md:size-30 rounded-xl md:rounded-2xl overflow-hidden border border-border/50">
              <img v-if="brandHeader.logoSrc" :src="brandHeader.logoSrc" :alt="`${brandHeader.label} Logo`"
                class="object-cover object-center size-full shadow group-hover:scale-105 transition-all" />
              <div v-else
                class="grid place-items-center size-full bg-bg-base shadow group-hover:scale-105 transition-all">
                <Icon :icon="Layers" class="text-primary" />
              </div>
            </div>
          </template>
          <template #brand-name>{{ brandHeader.fullName }}</template>
          <template #brand-description>{{ brandHeader.description }}</template>
        </CatalogListingHeaderBrandCard>
      </FadeFromBottomTransition>
    </ul>
  </div>
</template>
