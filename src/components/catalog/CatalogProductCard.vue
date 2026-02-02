<script setup lang="ts">
import Button from '../Button.vue';
import Divider from '../Divider.vue';
import Icon from '../Icon.vue';

</script>

<template>
  <div
    class="bg-bg-base rounded-3xl border border-border/50 shadow-slate-800/5 overflow-hidden hover:shadow-xl hover:border-primary-300 transition-all p-4 flex flex-col">
    <div class="w-full aspect-square relative">
      <img src="https://placehold.co/300x300" alt="Placeholder Image" class="rounded-xl" />
      <span
        class="absolute top-2 left-2 bg-white text-primary text-xs font-semibold px-2 py-1 rounded-lg border border-border">
        BRAND
      </span>
    </div>
    <div class="flex flex-col flex-grow mt-4">
      <h2 class="text-primary-400 text-xs font-semibold">CATEGORIA</h2>
      <h3 class="text-text-primary font-semibold text-lg mb-2">Nome do Produto</h3>
      <p class="text-text-secondary flex-grow text-sm line-clamp-3">
        Descrição breve do produto que destaca suas principais características e benefícios.
      </p>
      <Divider class="my-4" />
      <div class="space-y-2">
        <Button variant="neutral" class="w-full justify-center bg-zinc-800 text-white">
          <Icon icon="shopping-cart" />
          Ver na Amazon
          <Icon icon="arrow-up-right-from-square" class="ms-auto" />
        </Button>
        <Button variant="neutral" class="w-full justify-center bg-accent-200! text-accent-800!">
          <Icon icon="box-open" />
          Ver no Mercado Livre
          <Icon icon="arrow-up-right-from-square" class="ms-auto" />
        </Button>

      </div>
    </div>
  </div>
</template>
