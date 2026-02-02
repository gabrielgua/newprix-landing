<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed, onMounted, watch } from 'vue';

import { useBrandStore } from '@/stores/brand-store';
import type { Brand } from '@/types/brand';
import { ref } from 'vue';
import CatalogListingHeaderBrandCard from './CatalogListingHeaderBrandCard.vue';
import Icon from '../Icon.vue';
import FadeFromBottomTransition from '@/transitions/FadeFromBottomTransition.vue';

const catalogFilterStore = useCataLogFilterStore();
const brandStore = useBrandStore();
const selectedFilter = computed(() => catalogFilterStore.selectedFilter);

type BrandHeader = Brand & {
  logoSrc?: string;
}

const allFilter: BrandHeader = {
  label: 'Todos',
  value: 'all',
  fullName: 'Todas as Marcas',
  textColor: 'text-primary',
  gradientColor: 'from-slate-200',
}

const brandHeaders = ref<BrandHeader[]>([]);

const getBrand = () => {
  const brand = brandStore.brands.find(b => b.value === selectedFilter.value);
  return brand ? brand : allFilter;
}

const getColors = (brandValue: string) => {
  const brand = brandHeaders.value.find(b => b.value === brandValue);
  return {
    textColor: brand?.textColor || 'text-primary',
    gradientColor: brand?.gradientColor || 'from-slate-800',
  };
};

watch(() => catalogFilterStore.selectedFilter, () => {
  brandHeaders.value.pop();
  brandHeaders.value.push(getBrand());
}, { immediate: true });

</script>

<template>
  <div class="bg-gradient-to-l rounded to-80% py-6 transition-colors" :class="getColors(selectedFilter).gradientColor">
    <ul>
      <FadeFromBottomTransition>
        <CatalogListingHeaderBrandCard v-for="brandHeader in brandHeaders" :key="brandHeader.value"
          :brand-name="brandHeader.label" :color="brandHeader.textColor">
          <template #img>
            <div class="group size-30">
              <img v-if="brandHeader.logoSrc" :src="brandHeader.logoSrc" :alt="`${brandHeader.label} Logo`"
                class="object-cover object-center size-full rounded-4xl shadow group-hover:scale-105 transition-all" />
              <div v-else
                class="grid place-items-center size-full bg-bg-base rounded-4xl shadow group-hover:scale-105 transition-all">
                <Icon icon="layer-group" class="text-primary text-3xl" />
              </div>
            </div>
          </template>
          {{ brandHeader.fullName }}
        </CatalogListingHeaderBrandCard>
      </FadeFromBottomTransition>
    </ul>
  </div>
</template>
