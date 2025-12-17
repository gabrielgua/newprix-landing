<script setup lang="ts">
import { useBrandStore } from '@/stores/brand-store';
import CatalogListingHeaderBrandCard from './CatalogListingHeaderBrandCard.vue';

const selectedFilter = 'vonder';
const { getBrand } = useBrandStore();

</script>

<template>
  <CatalogListingHeaderBrandCard :brand-name="getBrand(selectedFilter)?.label!"
    :img-src="getBrand(selectedFilter)?.logoSrc!" :color="getBrand(selectedFilter)?.textColor!">
    {{ getBrand(selectedFilter)?.fullName }}
  </CatalogListingHeaderBrandCard>
</template>
