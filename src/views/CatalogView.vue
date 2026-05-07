<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogFilterMobile from '@/components/catalog/CatalogFilterMobile.vue';
import CatalogFiltersDisplay from '@/components/catalog/CatalogFiltersDisplay.vue';
import CatalogFiltersDisplayMobile from '@/components/catalog/CatalogFiltersDisplayMobile.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import Input from '@/components/inputs/Input.vue';
import MobileBottomModal from '@/components/MobileBottomModal.vue';
import Section from '@/components/Section.vue';
import GroupFadeInTransition from '@/components/transitions/GroupFadeInTransition.vue';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { computed, onMounted, onUnmounted, ref } from 'vue';

const catalogFilterStore = useCataLogFilterStore();

const showFilterModal = ref(false);
const toggleFilterModal = () => {
  showFilterModal.value = !showFilterModal.value;
};

onMounted(() => {
  document.title = 'Newprix - Nossos Produtos'
})

onUnmounted(() => {
  catalogFilterStore.resetFilters();
})

const showResetFiltersBtn = computed(() => catalogFilterStore.showFiltersMobile)

</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-base py-14!">
    <template #title>Nossa seleção</template>
    <template #title-hero>
      As melhores marcas,
      <span class="text-primary">um só lugar.</span>
    </template>
    <template #subtitle>
      <p class="max-w-full md:max-w-[600px]">
        Explore nosso catálogo completo. Produtos originais WAP, Vonder, Selene e muito mais,
        disponíveis na Amazon e Mercado Livre.
      </p>
    </template>
  </Section>

  <Section class="md:hidden bg-bg-base/80 backdrop-blur-3xl py-2! px-0! border-y border-border sticky top-18 z-10">
    <template #first-column-content>
      <div class="space-y-2">
        <GroupFadeInTransition class="grid items-center gap-2 text-text-primary text-sm"
          :class="[showResetFiltersBtn ? 'grid-cols-[1fr_auto_auto] ' : 'grid-cols-[1fr_auto] ']">
          <Input id="search" placeholder="Buscar por produtos..." v-model="catalogFilterStore.filter.term" inverted
            icon-start="magnifying-glass" size="sm" />
          <Button @click="toggleFilterModal" size="xs-icon" variant="neutral-outlined">
            <Icon icon="sliders" />
          </Button>
          <Button v-if="catalogFilterStore.showFiltersMobile" @click="catalogFilterStore.resetFilters()" size="xs-icon"
            variant="neutral-outlined">
            <Icon icon="arrow-rotate-left" />
          </Button>
        </GroupFadeInTransition>
        <Divider />
        <CatalogFiltersDisplayMobile />
      </div>
    </template>
  </Section>

  <MobileBottomModal :show="showFilterModal" title="Filtros" @on-close="toggleFilterModal">
    <CatalogFilterMobile @on-close="toggleFilterModal" />
  </MobileBottomModal>

  <Section class="bg-bg-muted pt-0 pb-8! md:pt-8!" flex-row gap="gap-4">
    <template #first-column-content>
      <CatalogFilter class="hidden md:flex" />

    </template>
    <template #second-column-content>
      <div class="space-y-4 w-full">
        <CatalogListingHeader />
        <CatalogFiltersDisplay class="hidden md:block" />
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
