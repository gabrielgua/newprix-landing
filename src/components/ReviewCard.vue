<script setup lang="ts">
import Divider from './Divider.vue';
import Icon from './Icon.vue';

defineProps<{
  plataform: 'amazon' | 'mercado-livre';
  date: string;
  reviewerName: string;
}>();

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

</script>

<template>
  <div
    class="flex flex-col p-6 gap-6 shadow-lg shadow-primary-300/20 rounded-3xl bg-bg-muted border border-primary-100 overflow-hidden hover:-translate-y-2 hover:scale-102 transition-all even:scale-102 even:-translate-y-2">
    <div class="flex items-center gap-1">
      <Icon icon="star" v-for="_ in 5" class="text-base text-primary" />
      <p class="text-xs text-text-secondary/70 ml-auto">{{ date }}</p>
    </div>
    <p class="text-text-secondary italic">
      <slot />
    </p>
    <Divider class="mt-auto" />
    <div class="flex items-center gap-4">
      <div class="size-12 grid place-items-center bg-slate-200 rounded-full overflow-hidden">
        <span class="text-slate-500 font-semibold text-lg">{{ getInitials(reviewerName) }}</span>
      </div>
      <div class="flex flex-col">
        <h5 class="font-semibold text-text-primary">{{ reviewerName }}</h5>
        <p class="text-sm text-text-secondary">Cliente Verificado</p>
      </div>
      <div v-if="plataform === 'amazon'"
        class="text-xs flex items-center gap-2 p-3 px-4 bg-rose-100 text-rose-500 rounded-full ml-auto">
        <Icon icon="shopping-cart" />
        <span class="">Amazon</span>
      </div>
      <div v-else class="text-xs flex items-center gap-2 p-3 px-4 bg-yellow-100 text-yellow-500 rounded-full ml-auto">
        <Icon icon="shopping-cart" />
        <span class="">Mercado Livre</span>
      </div>
    </div>
  </div>

</template>
