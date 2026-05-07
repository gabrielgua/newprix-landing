<script setup lang="ts">
import Button from '@/components/Button.vue';
import CatalogFilterBrandButton from '@/components/catalog/CatalogFilterBrandButton.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import { useBrandStore } from '@/stores/brand-store';
import { useCataLogFilterStore, type OrderByOption, type StoreOption } from '@/stores/catalog-filter-store';
import { ref } from 'vue';
import InputGroup from '../inputs/InputGroup.vue';
import Select from '../inputs/Select.vue';

const catalogFilterStore = useCataLogFilterStore();
const brandStore = useBrandStore();

const emit = defineEmits(['on-close']);


const filter = ref<{
  term: string,
  brand: string,
  store: StoreOption,
  orderBy: OrderByOption,
}>({
  term: catalogFilterStore.filter.term ?? '',
  brand: catalogFilterStore.filter.brand?.value ?? 'all',
  orderBy: catalogFilterStore.filter.orderBy ?? 'default',
  store: catalogFilterStore.filter.store ?? 'all'
})

const selectBrand = (value: string) => {
  filter.value.brand = value
}

const selectStore = (value: StoreOption) => {
  filter.value.store = value;

}
const submitFilters = () => {
  catalogFilterStore.filter.term = filter.value.term;
  catalogFilterStore.filter.orderBy = filter.value.orderBy;
  catalogFilterStore.selectBrand(filter.value.brand);
  catalogFilterStore.selectStore(filter.value.store);

  emit('on-close');
}

const resetFilters = () => {
  catalogFilterStore.resetFilters();

  filter.value = {
    term: catalogFilterStore.filter.term ?? '',
    brand: catalogFilterStore.filter.brand?.value ?? 'all',
    orderBy: catalogFilterStore.filter.orderBy ?? 'default',
    store: catalogFilterStore.filter.store ?? 'all'
  }

  emit('on-close')
}


</script>

<template>
  <div class="space-y-4">
    <InputGroup for="orderBy">
      <template #label-icon>
        <Icon icon="arrow-down-wide-short" styles="text-sm" />
      </template>
      <template #label>Ordenar por</template>
      <template #input>
        <Select id="orderBy" v-model="filter.orderBy">
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
          <CatalogFilterBrandButton :selected="filter.brand === 'all'" @click="selectBrand('all')">
            Todas
          </CatalogFilterBrandButton>
          <CatalogFilterBrandButton v-for="brand in brandStore.brands" :key="brand.value"
            :selected="filter.brand === brand.value" :selected-bg-color="brand.bgColor"
            @click="selectBrand(brand.value)">
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
          <CatalogFilterBrandButton selected-bg-color="bg-primary" :selected="filter.store === 'all'"
            @click="selectStore('all')">
            Todas
          </CatalogFilterBrandButton>
          <CatalogFilterBrandButton :selected="filter.store === 'AMAZON'" selected-bg-color="bg-primary"
            @click="selectStore('AMAZON')">
            Amazon
          </CatalogFilterBrandButton>
          <CatalogFilterBrandButton :selected="filter.store === 'MERCADO_LIVRE'" selected-bg-color="bg-primary"
            @click="selectStore('MERCADO_LIVRE')">
            Mercado Livre
          </CatalogFilterBrandButton>
        </div>
      </template>
    </InputGroup>

    <Divider />
    <div class="flex items-center *:flex-1 flex-wrap gap-2">
      <Button variant="neutral" class="min-w-[160px]" @click="resetFilters()">
        <Icon icon="rotate-left" />
        Resetar filtros
      </Button>
      <Button @click="submitFilters()" class="min-w-[160px]" variant="primary">
        <Icon icon="check" />
        Concluído
      </Button>
    </div>
  </div>
</template>
