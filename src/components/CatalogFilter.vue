<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import FilterButton from './FilterButton.vue';

const catalogFilterStore = useCataLogFilterStore();

</script>

<template>
  <div class="flex items-center gap-4">
    <FilterButton v-for="filter in catalogFilterStore.FILTERS" :key="filter.value"
      :selected="catalogFilterStore.selectedFilter === filter.value"
      @click="catalogFilterStore.selectFilter(filter.value)">
      {{ filter.label }}
    </FilterButton>
  </div>
</template>
