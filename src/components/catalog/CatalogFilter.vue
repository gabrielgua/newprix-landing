<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import FilterButton from '../FilterButton.vue';
import { useBrandStore } from '@/stores/brand-store';

const catalogFilterStore = useCataLogFilterStore();
const { getBrand } = useBrandStore();


</script>

<template>
  <div class="flex items-center justify-center gap-4 flex-wrap">
    <FilterButton v-for="filter in catalogFilterStore.filters" :key="filter.value"
      :selected="catalogFilterStore.selectedFilter === filter.value"
      :selected-bg-color="getBrand(filter.value)?.bgColor!" @click="catalogFilterStore.selectFilter(filter.value)">
      {{ filter.label }}
    </FilterButton>
  </div>
</template>
