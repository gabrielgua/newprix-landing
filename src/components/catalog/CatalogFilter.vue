<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import CatalogFilterBrandButton from './CatalogFilterBrandButton.vue';
import Icon from '../Icon.vue';
import { useBrandStore } from '@/stores/brand-store';


const catalogFilterStore = useCataLogFilterStore();
const { brands } = useBrandStore();


</script>

<template>
  <div class="bg-bg-base rounded-2xl border border-border/50 p-4 flex flex-col gap-4 text-sm w-full lg:w-[280px]">
    <p class="text-text-primary text-base">Filtrar</p>
    <Divider />

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary ">
        <Icon icon="magnifying-glass" />
        <p class="text-base">Pesquisar</p>
      </div>
      <div
        class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
        <input type="text" class="w-full outline-none" placeholder="Buscar por produtos..." />
      </div>
    </div>


    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="tags" />
        <p class="text-base">Marcas </p>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <CatalogFilterBrandButton :selected="catalogFilterStore.selectedFilter === 'all'"
          @click="catalogFilterStore.selectFilter('all')">
          Todas
        </CatalogFilterBrandButton>
        <CatalogFilterBrandButton v-for="brand in brands" :key="brand.value"
          :selected="catalogFilterStore.selectedFilter === brand.value" :selected-bg-color="brand.bgColor"
          @click="catalogFilterStore.selectFilter(brand.value)">
          {{ brand.fullName }}
        </CatalogFilterBrandButton>
      </div>
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="folder-open" />
        <p class="text-base">Categorias </p>
      </div>
      <div class="space-y-0.5">
        <div class="flex items-center gap-2">
          <input type="checkbox" id="limpeza"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="limpeza" class="text-text-secondary">Limpeza</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="moda"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="moda" class="text-text-secondary">Moda</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="protecao"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="protecao" class="text-text-secondary">Proteção</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="lazer"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="lazer" class="text-text-secondary">Lazer</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="cosmeticos"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="cosmeticos" class="text-text-secondary">Cosméticos</label>
        </div>
      </div>
    </div>


  </div>
</template>
