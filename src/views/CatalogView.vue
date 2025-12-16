<script setup lang="ts">
import CatalogFilter from '@/components/CatalogFilter.vue';
import Section from '@/components/Section.vue';


</script>

<template>
  <Section centered class="bg-bg-base rounded-b-[50px] shadow-xl shadow-slate-800/5 py-16!">
    <template #title>Nossa seleção</template>
    <template #title-hero>
      <p class="mb-4 text-5xl max-w-[600px]">
        As melhores marcas,
        prontas para entrega.
      </p>
    </template>
    <template #subtitle>
      <p class="max-w-[600px] text-lg">
        Explore nosso catálogo completo. Produtos originais WAP, Vonder, Selene e muito mais,
        disponíveis na Amazon e Mercado Livre.
      </p>
    </template>
  </Section>
  <Section centered class="py-18!">
    <template #first-column-content>
      <CatalogFilter />
    </template>
  </Section>
</template>
