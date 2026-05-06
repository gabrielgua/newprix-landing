<script setup lang="ts">

const props = defineProps<Product>();


import type { Product } from '@/types/product';
import Button from '../Button.vue';
import Divider from '../Divider.vue';
import Icon from '../Icon.vue';



</script>

<template>
  <div
    class="bg-bg-base rounded-2xl p-3 lg:rounded-3xl lg:p-4 group border border-border/50 shadow-slate-800/5 overflow-hidden hover:shadow-xl hover:border-primary-300 transition-all flex flex-col">
    <div
      class="w-full aspect-square relative min-h-[160px] max-h[160px] md:min-h-[250px] md:max-h-[300px] flex items-center justify-center">
      <img :src="props.img" :alt="`Imagem do produto ${props.name}`"
        class="h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-2xl" />
      <span
        class="uppercase absolute top-0 left-0 bg-white text-primary text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-1 rounded-lg border border-border">
        {{ props.brand.label }}
      </span>
      <span v-if="props.new"
        class="uppercase absolute top-0 right-0 bg-pink-400 text-white text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-1 rounded-lg flex items-center gap-1">
        <Icon icon="star" />
        Novo
      </span>
    </div>
    <div class="flex flex-col gap-2 flex-grow mt-2 sm:mt-4">
      <h2 class="text-primary-400 text-[10px] md:text-xs font-semibold mb-1 uppercase">{{ props.category.label }}</h2>
      <h3
        class="text-text-primary font-semibold text-sm lg:text-lg md:mb-2 line-clamp-3 md:line-clamp-4 lg:line-clamp-5 leading-5">
        {{ props.name }}
      </h3>
      <p class="hidden md:block text-text-secondary text-xs line-clamp-2 md:line-clamp-3 lg:line-clamp-4 mt-auto">
        {{ description }}
      </p>
      <Divider class="hidden md:block" />
      <div>
        <a :href="props.link" target="blank" class="hidden md:block">
          <Button v-if="props.store === 'AMAZON'" variant="dark" class="w-full justify-between">
            Ver na Amazon
            <Icon icon="arrow-up-right-from-square" />
          </Button>
          <Button v-else variant="neutral" class="w-full justify-between bg-accent-200! text-accent-800!">
            Ver no Mercado Livre
            <Icon icon="arrow-up-right-from-square" />
          </Button>
        </a>

        <a :href="props.link" target="blank" class="block md:hidden">
          <Button v-if="props.store === 'AMAZON'" variant="dark" size="xs" class="w-full justify-between">
            Ver na Amazon
            <Icon icon="arrow-up-right-from-square" />
          </Button>
          <Button v-else variant="neutral" size="xs" class="w-full justify-between bg-accent-200! text-accent-800!">
            Ver no ML
            <Icon icon="arrow-up-right-from-square" />
          </Button>
        </a>
      </div>
    </div>
  </div>
</template>
