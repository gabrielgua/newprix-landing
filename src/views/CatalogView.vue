<script setup lang="ts">
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import { computed, ref } from 'vue';
import { useElementBounding } from '@vueuse/core';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import { useBrandStore } from '@/stores/brand-store';

const catalogFilterStore = useCataLogFilterStore();
const { getBrand } = useBrandStore();

const headerHeight = 100;
const brandFiltersRef = ref<HTMLElement | null>(null);
const genericFiltersRef = ref<HTMLElement | null>(null);


const { top: brandFiltersTop, bottom: brandFiltersBottom } = useElementBounding(brandFiltersRef);
const { top: genericFiltersTop } = useElementBounding(genericFiltersRef);

const isBrandFiltersPinned = computed(() => {
  return brandFiltersTop.value <= headerHeight;
})

const isGenericFiltersPinned = computed(() => {
  return genericFiltersTop.value <= (brandFiltersBottom.value + 1);
})


const getColor = () => {
  const brand = getBrand(catalogFilterStore.selectedFilter);
  return brand?.bgColor || 'bg-primary';
};

const getGenericFiltersTop = () => {
  return isBrandFiltersPinned.value ? (brandFiltersBottom.value) + 'px' : 'auto';
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

  <Section ref="brandFiltersRef" centered class="sticky top-20 lg:top-24 z-10 border-b border-bg-base"
    :class="[isBrandFiltersPinned ? 'py-2! border-border *:scale-90 backdrop-blur-3xl' : 'py-2! md:py-8! lg:py-12!', isGenericFiltersPinned ? getColor() : 'bg-bg-base']">
    <template #first-column-content>
      <CatalogFilter />
    </template>
  </Section>

  <Section class="py-0! bg-bg-base">
    <template #first-column-content>
      <CatalogListingHeader />
    </template>
  </Section>

  <Section ref="genericFiltersRef" class="sticky z-5 transition-all bg-bg-base border-b border-border"
    :style="{ top: getGenericFiltersTop() }" :class="isGenericFiltersPinned ? 'py-2!' : 'py-2! md:py-4! lg:py-8!'">
    <template #first-column-content>

      <div class="flex items-center justify-between gap-3 flex-wrap">
        <div class="flex items-center gap-2">
          <p class="font-semibold text-xl text-text-primary">
            Produtos
          </p>
          <p class="font-normal text-lg text-text-secondary/80">
            (15)
          </p>
        </div>
        <div class="flex items-center gap-4 ml-auto">
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
        <div class="flex items-center gap-4">
          <p class="text-text-secondary">Pesquisar: </p>
          <div
            class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
            <Icon icon="magnifying-glass" class="text-text-secondary text-xs" />
            <input type="text" class="w-full outline-none" placeholder="Buscar por produtos..." />
          </div>
        </div>
      </div>
    </template>
  </Section>

  <Section class="bg-bg-base py-8!" :class="{ 'pt-24!': isGenericFiltersPinned }">
    <template #first-column-content>
      <div class="space-y-12">
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
