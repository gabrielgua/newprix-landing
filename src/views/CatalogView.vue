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
        <div class="flex items-end justify-between gap-3">
          <div
            class="flex items-center gap-4 bg-bg-base ps-4 rounded-2xl border border-border shadow-lg focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all w-120">
            <Icon icon="magnifying-glass" class="text-sm text-text-secondary" />
            <input type="text" class="outline-none pe-4 py-2.5 w-full" placeholder="Buscar por produtos..." />
          </div>
          <p class="text-text-secondary/80">Mostrando todos os 15 produtos disponíveis</p>
        </div>
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
