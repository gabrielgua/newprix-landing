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

    <div class="space-y-4">
      <div class="flex items-center gap-2 text-text-primary">
        <Icon icon="folder-open" />
        <p class="text-base">Categorias </p>
      </div>
      <div class="space-y-0.5">
        <div class="flex items-center gap-2">
          <input type="checkbox" id="limpeza-mobile"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="limpeza-mobile" class="text-text-secondary">Limpeza</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="moda-mobile"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="moda-mobile" class="text-text-secondary">Moda</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="protecao-mobile"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="protecao-mobile" class="text-text-secondary">Proteção</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="lazer-mobile"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="lazer-mobile" class="text-text-secondary">Lazer</label>
        </div>
        <div class="flex items-center gap-2">
          <input type="checkbox" id="cosmeticos-mobile"
            class="w-4 h-4 text-primary bg-bg-base border-border rounded focus:ring-primary">
          <label for="cosmeticos-mobile" class="text-text-secondary">Cosméticos</label>
        </div>
      </div>

      <Divider />

      <div class="flex items-center gap-2 justify-between *:grow">
        <Button variant="neutral">
          <Icon icon="rotate-left" />
          Resetar filtros
        </Button>
        <Button @click="$emit('on-close')" variant="primary">
          <Icon icon="check" />
          Concluído
        </Button>
      </div>
    </div>
  </div>
</template>
