<script setup lang="ts">
import Divider from './Divider.vue';
import Icon from './Icon.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import Section from './Section.vue';
import Topic from './Topic.vue';


</script>

<template>
  <Section icon="feather-pointed" flex-row>
    <template #title>Nossa Hístoria</template>
    <template #title-hero>
      Conectando você às <span class="text-primary">melhores marcas</span> com total segurança.
    </template>
    <template #subtitle>
      A <MadimiOneFont class="text-primary text-lg">newprix</MadimiOneFont> é a sua parceira de confiança no digital.
      Atuamos
      diretamente nos
      maiores marketplaces do mundo, como
      <span class="font-semibold">Amazon</span> e <span class="font-semibold">Mercado Livre</span>, garantindo que
      produtos
      originais cheguem até você com a rapidez e a garantia que você
      merece.
    </template>
    <template #first-column-content>
      <div class="space-y-8">
        <div class="grid lg:grid-cols-2 gap-8 transition-all">
          <Topic icon="martini-glass-empty">
            <template #title>Produtos de Qualidade</template>
            <template #description>
              Produtos 100% originais, e de qualidade garantida.
            </template>
          </Topic>
          <Topic icon="fa-regular fa-star">
            <template #title>Marcas Premium</template>
            <template #description>
              Trabalhamos apenas com marcas de excelência.
            </template>
          </Topic>
          <Topic icon="shield-halved">
            <template #title>Compra Segura</template>
            <template #description>
              Garantia Amazon e Mercado Livre de segurança.
            </template>
          </Topic>
          <Topic icon="fa-regular fa-comment">
            <template #title>Suporte Ativo</template>
            <template #description>
              Atendimento rápido para tirar todas as suas dúvidas.
            </template>
          </Topic>
        </div>
        <Divider />
        <div class="flex flex-items-center justify-between gap-8">
          <div>
            <MadimiOneFont>
              <h4 class="text-3xl font-bold text-text-primary">+ 1</h4>
            </MadimiOneFont>
            <p class="text-text-secondary font-light">Ano de História</p>
          </div>
          <div>
            <MadimiOneFont>
              <h4 class="text-3xl font-bold text-text-primary">+ 5k</h4>
            </MadimiOneFont>
            <p class="text-text-secondary font-light">Pedidos Concluídos</p>
          </div>
          <div>
            <MadimiOneFont>
              <h4 class="text-3xl font-bold text-text-primary">100 %</h4>
            </MadimiOneFont>
            <p class="text-text-secondary font-light">Cobertura Nacional</p>
          </div>
        </div>
      </div>
    </template>

    <template #second-column-content>
      <div class="relative aspect-[4/5] lg:aspect-[4/3] lg:max-w-2xl">
        <div class="grid place-items-center w-full h-full rounded-4xl shadow-lg overflow-hidden mx-auto transition-all">
          <img src="@/assets/images/about_us.jpg" alt="About us image"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          <div
            class="absolute left-6 right-6 bottom-6 rounded-2xl flex items-center gap-5 p-5 z-10 bg-bg-secondary border-l-4 border-l-primary shadow-md">
            <div class="size-14 grid place-items-center bg-primary-200 rounded-full">
              <Icon icon="fa-regular fa-circle-check" class="text-2xl text-primary-600" />
            </div>
            <div>
              <h5 class="text-lg font-semibold text-text-primary">Satisfação Garantida</h5>
              <p class="text-text-secondary text-sm">Nosso compromisso é oferecer a melhor experiência de compra
                possível.</p>
            </div>
          </div>
        </div>
        <div class="absolute -z-10 -top-10 -right-10 size-32 bg-primary-400 rounded-full blur-xl opacity-30"></div>
        <div class="absolute -z-10 -bottom-10 -left-10 size-32 bg-primary rounded-full blur-xl opacity-30"></div>
      </div>
    </template>
  </Section>
</template>
