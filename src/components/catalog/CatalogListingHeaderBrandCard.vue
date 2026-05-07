<script setup lang="ts">
import { useCataLogFilterStore } from '@/stores/catalog-filter-store';

defineProps<{
  color?: string;
}>();

const catalogFilterStore = useCataLogFilterStore();
</script>


<template>
  <div class="space-y-4 transition-all">
    <div class="flex items-center gap-4">
      <slot name="img" v-if="$slots['img']"></slot>
      <p class="text-text-primary text-base md:text-xl font-semibold">
        {{ catalogFilterStore.filter.brand?.value !== 'all' ? 'Produtos da Marca' : 'Mostrando' }} <br>
        <span class="text-2xl md:text-3xl" :class="color ? color : 'text-primary'">
          <slot name="brand-name" />
        </span>
      </p>
    </div>
    <p class="col-span-2 text-sm text-text-secondary">
      <slot name="brand-description" />
    </p>
  </div>
</template>
