<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed } from 'vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import FadeFromRightTransition from '../transitions/FadeFromRightTransition.vue';
import FadeinTransition from '../transitions/FadeinTransition.vue';
import CatalogFiltersDisplayItem from './CatalogFiltersDisplayItem.vue';
import FadeFromTopTransition from '../transitions/FadeFromTopTransition.vue';
import GroupFadeInTransition from '../transitions/GroupFadeInTransition.vue';

const catalogFilterStore = useCataLogFilterStore();

const showFilters = computed(() => {
  return (
    catalogFilterStore.filter.term ||
    catalogFilterStore.filter.brand?.value !== 'all' ||
    catalogFilterStore.filter.orderBy !== 'default'
  )
})

</script>

<template>
  <div class="text-sm border-y border-border flex items-center gap-4 justify-between py-4 ">
    <div class="flex items-center gap-4 transition-all">
      <p>Filtros: </p>
      <GroupFadeInTransition class="flex items-center gap-2 transition-all">
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.term" @remove="catalogFilterStore.resetTerm()">
          "{{ catalogFilterStore.filter.term }}"
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.brand?.value !== 'all'"
          @remove="catalogFilterStore.resetBrand()">
          {{ catalogFilterStore.filter.brand?.label }}
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem v-if="catalogFilterStore.filter.orderBy !== 'default'"
          @remove="catalogFilterStore.resetOrderBy()">
          {{ catalogFilterStore.filter.orderBy }}
        </CatalogFiltersDisplayItem>

        <Button variant="neutral-icon" size="xs" @click="catalogFilterStore.resetFilters()" v-if="showFilters">
          <Icon icon="rotate-left" class="text-xs" />
          Resetar filtros
        </Button>
      </GroupFadeInTransition>
    </div>


    <div class="flex items-center gap-2 text-text-primary ml-auto">
      <p class="font-light">
        (15)
      </p>
      <p class="font-semibold">
        Resultados
      </p>
    </div>
  </div>
</template>
