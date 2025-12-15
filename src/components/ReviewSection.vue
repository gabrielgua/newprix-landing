<script setup lang="ts">
import Button from './Button.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import ReviewCard from './ReviewCard.vue';
import Section from './Section.vue';

</script>

<template>
  <Section centered class="bg-primary-300 border-y border-bg-base shadow-xl shadow-black pt-30 rounded-t-[60px]">
    <template #header>
      <div
        class="flex flex-col outline-4 outline-white outline-offset-2 items-center justify-between gap-2 mb-12 bg-white px-10 py-8 rounded-4xl border border-primary-100 shadow-lg hover:shadow-xl shadow-primary hover:-translate-y-1 hover:scale-101 transition-all">
        <p class="uppercase font-medium text-sm text-text-secondary/70">MÉDIA DE AVALIAÇÕES</p>
        <p>
          <span class="text-7xl font-bold">
            <MadimiOneFont>4.9</MadimiOneFont>
          </span>
          <span class="text-text-secondary/70 font-semibold">
            /5
          </span>
        </p>
        <div class="flex items-center gap-1">
          <Icon icon="star" class="text-lg text-primary" />
          <Icon icon="star" class="text-lg text-primary" />
          <Icon icon="star" class="text-lg text-primary" />
          <Icon icon="star" class="text-lg text-primary" />
          <Icon icon="star-half-stroke" class="text-lg text-primary" />

        </div>
      </div>
    </template>
    <template #title-hero>Aprovado por quem compra</template>
    <template #subtitle>
      <span class="text-text-primary/80">
        A transparência e o compromisso com o cliente são a nossa base.
        Veja o que dizem aqueles que já compraram com a Newprix.
      </span>
    </template>
    <template #first-column-content>
      <section class="space-y-8">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ReviewCard plataform="amazon" date="21/10/2025" reviewer-name="Angela Bussolotti">
            "Produto chegou muito antes do prazo. Embalagem impecável e nota fiscal inclusa. Recomendo muito a loja, com
            certeza voltarei a comprar!"
          </ReviewCard>
          <ReviewCard plataform="mercado-livre" date="19/10/2025" reviewer-name="Maísa Rodrigues">
            "Produto entregue antes do prazo previsto e muito bem embalado."
          </ReviewCard>
          <ReviewCard plataform="amazon" date="25/06/2025" reviewer-name="Josiane Barreto">
            "Bem embalado. Já comprei algumas vezes, vale a pena parar alguns minutos para dizer que o produto é
            excelente,
            minha casa é toda de porcelanato brilhante 😩 e tudo mancha, mas encontrei esse queridinho aí que salvou
            minha
            vida, além de limpar fica um espelho! 10 de 10."
          </ReviewCard>
        </div>
        <Divider class="border-slate-950/10" />
        <Button variant="neutral" class="justify-between mx-auto w-full lg:w-auto">
          <a class="text-primary font-medium" href="https://www.amazon.com.br/sp?ie=UTF8&seller=A3GLKJ180I7O3M"
            target="_blank">
            Ver mais avaliações
          </a>
          <Icon icon="arrow-up-right-from-square" class=" text-primary -mt-0.5" />
        </Button>
      </section>
    </template>
  </Section>

</template>
