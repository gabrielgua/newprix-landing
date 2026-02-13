<script setup lang="ts">
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import { useBrandStore } from '@/stores/brand-store';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { useElementBounding } from '@vueuse/core';
import { computed, ref } from 'vue';

const catalogFilterStore = useCataLogFilterStore();
const { getBrand } = useBrandStore();

const headerHeight = 100;
const brandFiltersRef = ref<HTMLElement | null>(null);


const { top: brandFiltersTop } = useElementBounding(brandFiltersRef);

const isBrandFiltersPinned = computed(() => {
  return brandFiltersTop.value <= headerHeight;
})

const getColor = () => {
  const brand = getBrand(catalogFilterStore.selectedFilter);
  return brand?.bgColor || 'bg-primary';
};

</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-muted py-24!">
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

  <Section ref="brandFiltersRef" class="sticky top-16 lg:top-20 bg-bg-muted z-10"
    :class="[isBrandFiltersPinned ? 'py-2!' : 'py-2! md:py-8! lg:py-8! ']">
    <template #first-column-content>
      <div class="flex items-center w-full"
        :class="isBrandFiltersPinned ? 'space-y-0 justify-between' : 'space-y-12 flex-col'">
        <CatalogFilter />
        <div class="flex items-center justify-between gap-3 flex-wrap transition-all"
          :class="isBrandFiltersPinned ? 'text-sm' : 'text-normal w-full'">
          <div class="flex items-center gap-2 text-text-primary">
            <p class="font-semibold">
              Produtos
            </p>
            <p class="font-light">
              (15)
            </p>
          </div>
          <span class="text-text-secondary/50">|</span>
          <div class="flex items-center gap-4 ml-auto" :class="isBrandFiltersPinned ? 'text-sm' : 'text-normal'">
            <p class="text-text-secondary">Ordernar por: </p>
            <select
              class="bg-bg-base border border-border rounded-lg p-2 pe-4 ps-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all">
              <option value="name-a-z">Nome: A-Z</option>
              <option value="name-z-a">Nome: Z-A</option>
              <option value="price-low-high">Preço: menor para o maior</option>
              <option value="price-high-low">Preço: maior para o menor</option>
              <option value="newest">Novidades</option>
            </select>
          </div>
          <div class="flex items-center gap-4" :class="isBrandFiltersPinned ? 'text-sm' : 'text-normal'">
            <p class="text-text-secondary">Pesquisar: </p>
            <div
              class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
              <Icon icon="magnifying-glass" class="text-text-secondary text-xs" />
              <input type="text" class="w-full outline-none" placeholder="Buscar por produtos..." />
            </div>
          </div>
        </div>
      </div>
    </template>
  </Section>


  <Section class="bg-bg-base py-8!" :class="{ 'py-24!': isBrandFiltersPinned }">
    <template #first-column-content>
      <div class="space-y-12">
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
