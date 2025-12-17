<script setup lang="ts">
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Divider from '@/components/Divider.vue';
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

  <Section class="pt-0! pb-18!">
    <template #first-column-content>
      <div class="flex flex-col space-y-12 transition-all">
        <CatalogListingHeader />
        <Divider />
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
