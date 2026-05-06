<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilterBrandButton from '@/components/catalog/CatalogFilterBrandButton.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import { useBrandStore } from '@/stores/brand-store';
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';
import InputGroup from '../inputs/InputGroup.vue';
import Input from '../inputs/Input.vue';
import Select from '../inputs/Select.vue';

const catalogFilterStore = useCataLogFilterStore();
const { brands } = useBrandStore();

defineEmits(['on-close']);

</script>

<template>
  <div class="space-y-4">
    <InputGroup for="orderBy">
      <template #label-icon>
        <Icon icon="arrow-down-wide-short" styles="text-sm" />
      </template>
      <template #label>Ordenar por</template>
      <template #input>
        <Select id="orderBy" v-model="catalogFilterStore.filter.orderBy" size="sm">
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
