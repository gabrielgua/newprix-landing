<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogFilterMobile from '@/components/catalog/CatalogFilterMobile.vue';
import CatalogFiltersDisplay from '@/components/catalog/CatalogFiltersDisplay.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Icon from '@/components/Icon.vue';
import Input from '@/components/inputs/Input.vue';
import MobileBottomModal from '@/components/MobileBottomModal.vue';
import Section from '@/components/Section.vue';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { onMounted, ref } from 'vue';

const catalogFilterStore = useCataLogFilterStore();

const showFilterModal = ref(false);
const toggleFilterModal = () => {
  showFilterModal.value = !showFilterModal.value;
};

onMounted(() => {
  document.title = 'Newprix - Nossos Produtos'
})


</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-base py-14!">
    <template #title>Nossa seleção</template>
    <template #title-hero>
      <p class="mb-4 text-5xl ">
        As melhores marcas,
        <span class="text-primary">um só lugar.</span>
      </p>
    </template>
    <template #subtitle>
      <p class="max-w-[600px] text-lg">
        Explore nosso catálogo completo. Produtos originais WAP, Vonder, Selene e muito mais,
        disponíveis na Amazon e Mercado Livre.
      </p>
    </template>
  </Section>


  <Section class="md:hidden bg-bg-base border py-2! border-border sticky top-18 z-10">
    <template #first-column-content>
      <div class="grid grid-cols-[1fr_auto] items-center gap-2 text-text-primary text-sm">
        <Input id="search" placeholder="Buscar por produtos..." v-model="catalogFilterStore.filter.term" />
        <Button @click="toggleFilterModal" size="md-icon" variant="neutral-outlined">
          <Icon icon="filter" />
        </Button>

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
        <CatalogFiltersDisplay />
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
