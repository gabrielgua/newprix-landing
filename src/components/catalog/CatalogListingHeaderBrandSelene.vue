<script setup lang="ts">
import { useBrandStore, type BrandValue } from '@/stores/brand-store';
import CatalogListingHeaderBrandCard from './CatalogListingHeaderBrandCard.vue';

const selectedFilter = 'selene';
const brandStore = useBrandStore();

const getBrand = (value: BrandValue) => {
  return brandStore.getBrand(value);
}

</script>

<template>
  <CatalogListingHeaderBrandCard :brand-name="getBrand(selectedFilter)?.label!"
    :img-src="getBrand(selectedFilter)?.logoSrc!" :color="getBrand(selectedFilter)?.textColor!">
    {{ getBrand(selectedFilter)?.fullName }}
  </CatalogListingHeaderBrandCard>
</template>
