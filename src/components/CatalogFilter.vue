<script setup lang="ts">
import { ref, watch } from 'vue';
import FilterButton from './FilterButton.vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const FILTERS = [
  { label: 'Todos', value: 'all' },
  { label: 'WAP', value: 'wap' },
  { label: 'Vonder', value: 'vonder' },
  { label: 'NWX', value: 'nwx' },
  { label: 'Selene', value: 'selene' },
  { label: 'Alhe', value: 'alhe' },
] as const;


export type Filter = typeof FILTERS[number]['value'];

export type CatalogFilter = {
  label: string;
  value: Filter;
}

const isValidFilter = (value: unknown): value is Filter => {
  return FILTERS.some(filter => filter.value === value);
}

const selectedFilter = ref<Filter>(
  isValidFilter(route.query.brand) ? route.query.brand : 'all'
)

const selectFilter = (filter: Filter) => {
  selectedFilter.value = filter

  router.replace({
    query: filter === 'all'
      ? {}
      : { brand: filter }
  })
}

watch(() => route.query.brand, (brand) => {
  if (isValidFilter(brand)) {
    selectedFilter.value = brand;
    return;
  }

  selectedFilter.value = 'all';

  if (brand !== undefined) {
    router.replace({ query: {} });
  }
}, { immediate: true });


</script>

<template>
  <div class="flex items-center gap-4">
    <FilterButton v-for="filter in FILTERS" :key="filter.value" :selected="selectedFilter === filter.value"
      @click="selectFilter(filter.value)">
      {{ filter.label }}
    </FilterButton>
  </div>
</template>
