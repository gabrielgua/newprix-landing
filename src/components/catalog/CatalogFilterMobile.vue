<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilterBrandButton from '@/components/catalog/CatalogFilterBrandButton.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import { useBrandStore } from '@/stores/brand-store';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';

const catalogFilterStore = useCataLogFilterStore();
const { brands } = useBrandStore();

defineEmits(['on-close']);

</script>

<template>
  <div class="space-y-4">
    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="magnifying-glass" />
        <p>Pesquisar</p>
      </div>
      <div
        class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
        <input type="text" v-model="catalogFilterStore.filter.term" class="w-full outline-none"
          placeholder="Buscar por produtos..." />
      </div>
    </div>

    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2 text-text-primary ">
        <Icon icon="arrow-down-wide-short" />
        <p>Ordenar por</p>
      </div>
      <div
        class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
        <select v-model="catalogFilterStore.filter.orderBy" class="w-full outline-none">
          <option value="default" selected>Padrão</option>
          <option value="asc">Nome: de A-Z</option>
          <option value="desc">Nome: de Z-A</option>
          <option value="newFirst">Lançamentos</option>
          <option value="oldFirst">Antigos</option>
        </select>
      </div>
    </div>

    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="tags" />
        <p>Marcas </p>
      </div>
      <div class="flex items-center gap-2 flex-wrap *:grow *:min-w-[20%]">
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

    <div class="space-y-2 text-sm">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="shop" />
        <p>Loja</p>
      </div>
      <div class="flex items-center gap-2 flex-wrap *:grow *:min-w-[25%]">
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

    <Divider />
    <div class="flex items-center flex-wrap gap-2 justify-between *:grow">
      <Button variant="neutral" @click="catalogFilterStore.resetFilters()">
        <Icon icon="rotate-left" />
        Resetar filtros
      </Button>
      <Button @click="$emit('on-close')" variant="primary">
        <Icon icon="check" />
        Concluído
      </Button>
    </div>
  </div>
</template>
