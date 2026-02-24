<script setup lang="ts">
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Divider from '@/components/Divider.vue';
import Section from '@/components/Section.vue';


</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-base py-24!">
    <template #title>Nossa seleção</template>
    <template #title-hero>
      <p class="mb-4 text-6xl max-w-[700px]">
        As melhores marcas,
        <span class="text-primary">um só lugar.</span>
      </p>
    </template>
    <template #subtitle>
      <p class="max-w-[600px] text-lg">
        Explore nosso catálogo completo. Produtos originais WAP, Vonder, Selene e muito mais,
        disponíveis na Amazon e Mercado Livre.
      </p>
    </template>
  </Section>





  <Section class="bg-bg-muted py-8!" flex-row gap="gap-4">
    <template #first-column-content>
      <CatalogFilter />
    </template>
    <template #second-column-content>
      <div class="space-y-4">
        <CatalogListingHeader />
        <Divider />
        <div class="text-sm">
          <div class="flex items-center gap-2 text-text-primary">
            <p class="font-light">
              (15)
            </p>
            <p class="font-semibold">
              Produtos
            </p>
          </div>
        </div>
        <Divider />
        <CatalogListing />
      </div>


    </template>
  </Section>
</template>
