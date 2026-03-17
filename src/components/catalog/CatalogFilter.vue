<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import CatalogFilterBrandButton from './CatalogFilterBrandButton.vue';
import Icon from '../Icon.vue';
import { useBrandStore } from '@/stores/brand-store';
import Divider from '../Divider.vue';


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
        class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-3 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
        <input type="text" v-model="catalogFilterStore.filter.term" class="w-full outline-none"
          placeholder="Buscar por produtos..." />
      </div>
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary ">
        <Icon icon="arrow-down-wide-short" />
        <p class="text-base">Ordenar por</p>
      </div>
      <div
        class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
        <select v-model="catalogFilterStore.filter.orderBy" class="w-full outline-none">
          <option v-for="filter in catalogFilterStore.orderByFilters" :value="filter.value" :key="filter.value"
            placeholder="Selecione um...">
            {{ filter.label }}
          </option>
        </select>
      </div>
    </div>



    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="tags" />
        <p class="text-base">Marcas </p>
      </div>
      <div class="flex items-center gap-2 flex-wrap *:grow">
        <CatalogFilterBrandButton :selected="catalogFilterStore.filter.brand?.value === 'all'"
          @click="catalogFilterStore.selectBrand('all')">
          Todas
        </CatalogFilterBrandButton>
        <CatalogFilterBrandButton v-for="brand in brands" :key="brand.value"
          :selected="catalogFilterStore.filter.brand?.value === brand.value" :selected-bg-color="brand.bgColor"
          @click="catalogFilterStore.selectBrand(brand.value)">
          {{ brand.fullName }}
        </CatalogFilterBrandButton>
      </div>
    </div>

    <div class="space-y-2">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="shop" />
        <p class="text-base">Loja</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap *:grow">
        <CatalogFilterBrandButton selected-bg-color="bg-primary" :selected="catalogFilterStore.filter.store === 'all'"
          @click="catalogFilterStore.selectStore('all')">
          Todas
        </CatalogFilterBrandButton>
        <CatalogFilterBrandButton :selected="catalogFilterStore.filter.store === 'AMAZON'"
          selected-bg-color="bg-primary" @click="catalogFilterStore.selectStore('AMAZON')">
          Amazon
        </CatalogFilterBrandButton>
        <CatalogFilterBrandButton :selected="catalogFilterStore.filter.store === 'MERCADO_LIVRE'"
          selected-bg-color="bg-primary" @click="catalogFilterStore.selectStore('MERCADO_LIVRE')">
          Mercado Livre
        </CatalogFilterBrandButton>
      </div>
    </div>

  </div>
</template>
