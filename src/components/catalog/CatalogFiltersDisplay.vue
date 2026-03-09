<script setup lang="ts">
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import CatalogFiltersDisplayItem from './CatalogFiltersDisplayItem.vue';

</script>

<template>
  <div class="text-sm border-y py-4 border-border flex items-center gap-4 justify-between">
    <div class="flex items-center gap-4">
      <p>Filtros: </p>
      <ul class="flex items-center gap-2">
        <CatalogFiltersDisplayItem>
          "pesquisa teste"
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem>
          Vonder
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem>
          Moda
        </CatalogFiltersDisplayItem>
        <CatalogFiltersDisplayItem>
          Proteção
        </CatalogFiltersDisplayItem>
      </ul>
      <Button variant="neutral-icon" size="xs">
        <Icon icon="rotate-left" class="text-xs" />
        Resetar filtros
      </Button>
    </div>

    <div class="flex items-center gap-2 text-text-primary">
      <p class="font-light">
        (15)
      </p>
      <p class="font-semibold">
        Resultados
      </p>
    </div>
  </div>
</template>
