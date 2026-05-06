<script setup lang="ts">
import { useBrandStore } from '@/stores/brand-store';
import BrandCard from './BrandCard.vue';
import BrandCardMobile from './BrandCardMobile.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import Section from './Section.vue';
import { computed } from 'vue';

const brandStore = useBrandStore()
const brands = computed(() => brandStore.brands)

</script>

<template>
  <Section icon="handshake" centered class="bg-white pb-20">
    <template #title>Nossos Parceiros</template>
    <template #title-hero>Quem Representamos?</template>
    <template #subtitle>
      Conheça as marcas parceiras que confiam em nossa representação comercial para levar seus produtos ao mercado.
    </template>
    <template #first-column-content>
      <div class="grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">

        <BrandCard v-for="(brand, index) in brands" :key="index" class="hidden md:block" :imgSrc="brand.logoSrc!"
          :shadowColor="brand.shadowColor" :hoverColor="brand.hoverColor" :value="brand.value">
          <template #title>{{ brand.fullName }}</template>
          <template #description>{{ brand.description }}</template>
        </BrandCard>

        <BrandCardMobile v-for="(brand, index) in brands" :key="index" , class="block md:hidden"
          :imgSrc="brand.logoSrc!" :shadowColor="brand.shadowColor" :hoverColor="brand.hoverColor" :value="brand.value">
          <template #title>{{ brand.fullName }}</template>
          <template #description>{{ brand.description }}</template>
        </BrandCardMobile>
      </div>
      <div class="mt-12 md:mt-24 text-sm text-text-secondary text-center">
        <span>Sua marca também quer veder mais?</span> <br />
        <RouterLink to="/contact" class="text-primary-400 font-medium hover:underline cursor-pointer">
          Seja um parceiro <MadimiOneFont class="text-text-secondary">newprix</MadimiOneFont>.
        </RouterLink>
      </div>
    </template>
  </Section>
</template>
