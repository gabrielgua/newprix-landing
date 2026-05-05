<script setup lang="ts">
import Button from './Button.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import ReviewCard from './ReviewCard.vue';
import Section from './Section.vue';

</script>

<template>
  <Section centered icon="shield-halved" class="bg-gradient-to-b from-bg-muted to-bg-base pt-12! lg:pt-8!">
    <template #header>
      <div
        class="flex flex-col outline-4 outline-white outline-offset-2 items-center justify-between gap-2 mb-12 bg-white px-10 py-8 rounded-4xl border border-primary-100 shadow-xl shadow-primary scale-101 transition-all">
        <span class="text-7xl font-bold">
          <MadimiOneFont>4.9</MadimiOneFont>
        </span>
        <div class="flex items-center gap-1">
          <Icon v-for="_ in 4" icon="star" class="text-lg text-primary" />
          <Icon icon="star-half-stroke" class="text-lg text-primary" />
          <span class="text-xs text-text-secondary">(4.9/5)</span>
        </div>
        <p class="uppercase font-medium text-sm text-text-secondary tracking-wide mt-1">Média de Avaliações</p>
      </div>
    </template>
    <template #title>
      <span class="">Nossa Reputação</span>
    </template>
    <template #title-hero>Aprovado por quem compra</template>
    <template #subtitle>
      <span class="text-text-primary/80">
        A transparência e o compromisso com o cliente são a nossa base. <br />
        Veja o que dizem aqueles que já compraram com a <MadimiOneFont class="font-bold">newprix</MadimiOneFont>:
      </span>
    </template>
    <template #first-column-content>
      <section class="space-y-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ReviewCard plataform="amazon" date="21/10/2025" reviewer-name="Angela Bussolotti">
            "Produto chegou muito antes do prazo. Embalagem impecável e nota fiscal inclusa. Recomendo muito a loja, com
            certeza voltarei a comprar!"
          </ReviewCard>
          <ReviewCard plataform="amazon" date="25/06/2025" reviewer-name="Josiane Barreto">
            "Bem embalado. Já comprei algumas vezes, vale a pena parar alguns minutos para dizer que o produto é
            excelente, minha casa é toda de porcelanato brilhante 😩 e tudo mancha, mas encontrei esse queridinho aí que
            salvou minha vida, além de limpar fica um espelho! 10 de 10."
          </ReviewCard>
          <ReviewCard plataform="mercado-livre" date="19/10/2025" reviewer-name="Maísa Rodrigues">
            "Produto entregue antes do prazo previsto e muito bem embalado."
          </ReviewCard>
        </div>
        <div class="flex justify-center">
          <a href="https://www.amazon.com.br/sp?ie=UTF8&seller=A3GLKJ180I7O3M" target="_blank"
            class="inline-block w-full lg:w-auto">
            <Button variant="primary" class="justify-center w-full lg:w-auto" size="lg">
              Ver mais avaliações
              <Icon icon="arrow-up-right-from-square" class="-mt-0.5" />
            </Button>
          </a>
        </div>
      </section>
    </template>
  </Section>

</template>
