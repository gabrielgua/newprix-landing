<script setup lang="ts">
import BrandCard from './BrandCard.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import Section from './Section.vue';

export type PartnerBrand = {
  imgSrc: string;
  title: string;
  description: string;
  shadowColor?: string;
  hoverColor?: string;
};

const partnerBrands: PartnerBrand[] = [
  {
    imgSrc: '/images/brands/wap_300x300.png',
    title: 'WAP Limpeza',
    description: 'Tecnologia e praticidade em soluções para limpeza doméstica e profissional.',
    hoverColor: 'group-hover:text-primary-600',
  },
  {
    imgSrc: '/images/brands/nwx_300x300.png',
    title: 'NWX',
    description: 'Proteção auditiva e conforto com design moderno e eficiente.',
    shadowColor: 'shadow-blue-600/10',
    hoverColor: 'group-hover:text-blue-600'
  },
  {
    imgSrc: '/images/brands/alhe_300x300.png',
    title: 'ALHE Cosméticos',
    description: 'Cuidados capilares profissionais com tecnologia de salão.',
    shadowColor: 'shadow-green-900/10',
    hoverColor: 'group-hover:text-green-900'
  },
  {
    imgSrc: '/images/brands/selene_300x300.png',
    title: 'Selene',
    description: 'Moda feminina com conforto, estilo e qualidade para o dia a dia.',
    shadowColor: 'shadow-pink-600/10',
    hoverColor: 'group-hover:text-pink-600'
  },
  {
    imgSrc: '/images/brands/vonder_300x300.png',
    title: 'Vonder',
    description: 'Máquinas e equipamentos com desempenho e durabilidade.',
    shadowColor: 'shadow-yellow-600/10',
    hoverColor: 'group-hover:text-yellow-600'
  }
];

</script>

<template>
  <Section icon="handshake" centered>
    <template #title>Nossos Parceiros</template>
    <template #title-hero>Quem Representamos?</template>
    <template #subtitle>
      Conheça as marcas parceiras que confiam em nossa representação comercial para levar seus produtos ao mercado.
    </template>
    <template #first-column-content>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        <BrandCard v-for="(brand, index) in partnerBrands" :key="index" :imgSrc="brand.imgSrc"
          :shadowColor="brand.shadowColor" :hoverColor="brand.hoverColor">
          <template #title>{{ brand.title }}</template>
          <template #description>{{ brand.description }}</template>
        </BrandCard>
      </div>
      <p class="mt-24 text-sm text-text-secondary text-center">
        Sua marca também quer veder mais?
        <span class="text-primary-400 font-medium">Seja um parceiro <MadimiOneFont>newprix</MadimiOneFont>.</span>
      </p>
    </template>
  </Section>
</template>
