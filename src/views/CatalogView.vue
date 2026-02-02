<script setup lang="ts">
import CatalogFilter from '@/components/catalog/CatalogFilter.vue';
import CatalogListing from '@/components/catalog/CatalogListing.vue';
import CatalogListingHeader from '@/components/catalog/CatalogListingHeader.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';


</script>

<template>
  <Section centered class="bg-bg-muted py-24!">
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
  <Section centered class="py-12! bg-bg-base">
    <template #first-column-content>
      <CatalogFilter />
    </template>
  </Section>

  <Section class="py-0! bg-bg-base">
    <template #first-column-content>
      <div class="flex flex-col space-y-6 transition-all">
        <CatalogListingHeader />
        <div class="flex items-end justify-between gap-3">
          <div class="flex items-center gap-2">
            <p class="text-text-primary font-semibold text-xl">
              Produtos
            </p>
            <p class="text-text-secondary/80 font-normal text-lg">
              (15)
            </p>
          </div>
          <div class="flex items-center gap-4 ml-auto">
            <p class="text-text-secondary/80">Ordernar por: </p>
            <select
              class="bg-bg-base border border-border rounded-lg p-2 pe-4 ps-2 outline-none focus:border-primary focus:ring-2 focus:ring-primary transition-all">
              <option value="name-a-z">Nome: A-Z</option>
              <option value="name-z-a">Nome: Z-A</option>
              <option value="price-low-high">Preço: menor para o maior</option>
              <option value="price-high-low">Preço: maior para o menor</option>
              <option value="newest">Novidades</option>
            </select>
          </div>
          <div class="flex items-center gap-4">
            <p class="text-text-secondary/80">Pesquisar: </p>
            <div
              class="flex items-center gap-4 bg-bg-base border border-border rounded-lg p-2 ps-4 outline-none focus-within:border-primary focus-within:ring-2 focus-within:ring-primary transition-all">
              <Icon icon="magnifying-glass" class="text-text-secondary text-xs" />
              <input type="text" class="w-full outline-none" placeholder="Buscar por produtos..." />
            </div>
          </div>
        </div>
        <Divider />
        <CatalogListing />
      </div>
    </template>
  </Section>
</template>
