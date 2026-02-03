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
  value: string;
};

const partnerBrands: PartnerBrand[] = [
  {
    imgSrc: '/images/brands/wap_300x300.png',
    title: 'WAP Limpeza',
    description: 'Tecnologia e praticidade em soluções para limpeza doméstica e profissional.',
    hoverColor: 'group-hover:text-primary-600',
    value: 'wap',
  },
  {
    imgSrc: '/images/brands/nwx_300x300.png',
    title: 'NWX',
    description: 'Proteção auditiva e conforto com design moderno e eficiente.',
    shadowColor: 'shadow-blue-600/10',
    hoverColor: 'group-hover:text-blue-600',
    value: 'nwx',
  },
  {
    imgSrc: '/images/brands/alhe_300x300.png',
    title: 'ALHE Cosméticos',
    description: 'Cuidados capilares profissionais com tecnologia de salão.',
    shadowColor: 'shadow-green-900/10',
    hoverColor: 'group-hover:text-green-900',
    value: 'alhe',
  },
  {
    imgSrc: '/images/brands/selene_300x300.png',
    title: 'Selene',
    description: 'Moda feminina com conforto, estilo e qualidade para o dia a dia.',
    shadowColor: 'shadow-pink-600/10',
    hoverColor: 'group-hover:text-pink-600',
    value: 'selene',
  },
  {
    imgSrc: '/images/brands/vonder_300x300.png',
    title: 'Vonder',
    description: 'Máquinas e equipamentos com desempenho e durabilidade.',
    shadowColor: 'shadow-yellow-600/10',
    hoverColor: 'group-hover:text-yellow-600',
    value: 'vonder'
  }
];

</script>

<template>
  <Section icon="handshake" centered class="bg-white pb-20">
    <template #title>Nossos Parceiros</template>
    <template #title-hero>Quem Representamos?</template>
    <template #subtitle>
      Conheça as marcas parceiras que confiam em nossa representação comercial para levar seus produtos ao mercado.
    </template>
    <template #first-column-content>
      <div class="grid gap-6 lg:gap-8 grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ">

        <BrandCard v-for="(brand, index) in partnerBrands" :key="index" :imgSrc="brand.imgSrc"
          :shadowColor="brand.shadowColor" :hoverColor="brand.hoverColor" :value="brand.value">
          <template #title>{{ brand.title }}</template>
          <template #description>{{ brand.description }}</template>
        </BrandCard>
      </div>
      <div class="mt-24 text-sm text-text-secondary text-center">
        <span>Sua marca também quer veder mais?</span> <br />
        <a class="text-primary-400 font-medium hover:underline cursor-pointer">
          Seja um parceiro newprix.
        </a>
      </div>
    </template>
  </Section>
</template>
