<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogFilterMobile from '@/components/catalog/CatalogFilterMobile.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import MobileBottomModal from '@/components/MobileBottomModal.vue';
import Section from '@/components/Section.vue';
import { ref } from 'vue';


const showFilterModal = ref(false);
const toggleFilterModal = () => {
  showFilterModal.value = !showFilterModal.value;
};


</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-base py-24!">
    <template #title>Nossa seleção</template>
    <template #title-hero>
      <p class="mb-4 text-6xl max-w-[700px]">
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


  <Section class="md:hidden bg-bg-base border py-4! border-border sticky top-16 z-10">
    <template #first-column-content>
      <div class="flex items-center  gap-2 text-text-primary text-sm">
        <div
          class="flex items-center grow gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
          <Icon icon="magnifying-glass" class="text-xs" />
          <input type="text" class="w-full outline-none" placeholder="Buscar por produtos..." />
        </div>
        <Button @click="toggleFilterModal" variant="neutral" class="p-0! size-9! grid place-items-center rounded-lg!">
          <Icon icon="filter" />
        </Button>
      </div>
    </template>
  </Section>

  <MobileBottomModal :show="showFilterModal" title="Filtros" @on-close="toggleFilterModal">
    <CatalogFilterMobile @on-close="toggleFilterModal" />
  </MobileBottomModal>



  <Section class="bg-bg-muted py-0! md:py-8!" flex-row gap="gap-4">
    <template #first-column-content>
      <CatalogFilter class="hidden md:flex" />
    </template>
    <template #second-column-content>
      <div class="space-y-4">
        <CatalogListingHeader />
        <Divider />
        <div class="text-sm">
          <div class="flex items-center gap-2 text-text-primary">
            <p class="font-light">
              (15)
            </p>
            <p class="font-semibold">
              Produtos
            </p>
          </div>
        </div>
        <Divider />
        <CatalogListing />
      </div>


    </template>
  </Section>
</template>
