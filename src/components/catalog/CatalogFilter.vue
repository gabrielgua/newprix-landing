<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import CatalogFilterBrandButton from './CatalogFilterBrandButton.vue';
import Icon from '../Icon.vue';
import { useBrandStore } from '@/stores/brand-store';
import Divider from '../Divider.vue';
import Input from '../inputs/Input.vue';
import InputGroup from '../inputs/InputGroup.vue';
import Select from '../inputs/Select.vue';


const catalogFilterStore = useCataLogFilterStore();
const { brands } = useBrandStore();





</script>

<template>
  <div class="bg-bg-base rounded-2xl border border-border/50 p-4 flex flex-col gap-4 text-sm w-full lg:w-[280px]">
    <p class="text-text-primary text-base">Filtrar</p>
    <Divider />

    <InputGroup for="search">
      <template #label-icon>
        <Icon icon="magnifying-glass" styles="text-sm" />
      </template>
      <template #label>Pesquisar</template>
      <template #input>
        <Input id="search" type="text" v-model="catalogFilterStore.filter.term" placeholder="Buscar por produtos..." />
      </template>
    </InputGroup>

    <InputGroup for="orderBy">
      <template #label-icon>
        <Icon icon="arrow-down-wide-short" styles="text-sm" />
      </template>
      <template #label>Ordenar por</template>
      <template #input>
        <Select id="orderBy" v-model="catalogFilterStore.filter.orderBy">
          <option v-for="filter in catalogFilterStore.orderByFilters" :value="filter.value" :key="filter.value"
            placeholder="Selecione um...">
            {{ filter.label }}
          </option>
        </Select>
      </template>
    </InputGroup>

    <InputGroup for="brands">
      <template #label-icon>
        <Icon icon="tags" styles="text-sm" />
      </template>
      <template #label>Marcas</template>
      <template #input>
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
      </template>
    </InputGroup>

    <InputGroup for="store">
      <template #label-icon>
        <Icon icon="shop" styles="text-sm" />
      </template>
      <template #label>Loja</template>
      <template #input>
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
      </template>
    </InputGroup>
  </div>
</template>
