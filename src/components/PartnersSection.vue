<script setup lang="ts">
import BrandCard from './BrandCard.vue';
import Section from './Section.vue';

export type PartnerBrand = {
  imgSrc: string;
  title: string;
  description: string;
};

const partnerBrands: PartnerBrand[] = [
  {
    imgSrc: '/images/brands/wap_300x300.png',
    title: 'WAP Limpeza',
    description: 'Tecnologia e praticidade em soluções para limpeza doméstica e profissional.'
  },
  {
    imgSrc: '/images/brands/nwx_300x300.png',
    title: 'NWX',
    description: 'Proteção auditiva e conforto em qualquer ambiente, com design moderno e eficiente.'
  },
  {
    imgSrc: '/images/brands/alhe_300x300.png',
    title: 'ALHE Cosméticos',
    description: 'Cuidados capilares profissionais com tecnologia e performance para resultados de salão.'
  },
  {
    imgSrc: '/images/brands/selene_300x300.png',
    title: 'Selene',
    description: 'Moda feminina com conforto, estilo e qualidade para o dia a dia.'
  },
  {
    imgSrc: '/images/brands/vonder_300x300.png',
    title: 'Vonder',
    description: 'Máquinas, ferramentas e equipamentos com desempenho e durabilidade para uso profissional e doméstico.'
  }
];

</script>

<template>
  <Section icon="handshake" class="bg-bg-secondary">
    <template #title>Quem Representamos?</template>
    <template #subtitle>
      Conheça as marcas parceiras que confiam em nossa representação comercial para levar seus produtos ao mercado.
    </template>
    <template #second-column-content>
      <div class="grid grid-cols-5 gap-4">
        <BrandCard v-for="(brand, index) in partnerBrands" :key="index" :imgSrc="brand.imgSrc">
          <template #title>{{ brand.title }}</template>
          <template #description>{{ brand.description }}</template>
        </BrandCard>
      </div>
    </template>
  </Section>
</template>
