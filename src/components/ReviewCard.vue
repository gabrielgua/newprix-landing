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
    class="relative flex flex-col p-6 gap-6 rounded-3xl bg-bg-base border border-border ring-2 ring-primary/15 overflow-hidden transition-all duration-300 max-h-max">

    <Icon icon="quote-left" class="absolute top-2 right-2 text-6xl text-text-primary/5 pointer-events-none" />

    <div class="flex items-center gap-2 relative z-10">
      <div class="flex items-center gap-1">
        <Icon icon="star" v-for="_ in 5" :key="_" class="text-base text-primary" />
        <span class="text-xs text-text-secondary/70 ml-1">(5.0/5)</span>
      </div>
      <span class="text-text-secondary/30 text-[10px]">•</span>
      <span class="text-xs font-medium text-text-secondary/60 italic">{{ date }}</span>
    </div>

    <p class="text-text-secondary leading-relaxed relative z-10 flex-grow italic">
      <slot />
    </p>

    <Divider class="opacity-50" />

    <div class="flex items-center gap-4 relative z-10">

      <div
        class="size-12 flex-shrink-0 grid place-items-center bg-text-primary/10 rounded-full overflow-hidden border border-border">
        <span class="text-text-primary font-bold text-base">{{ getInitials(reviewerName) }}</span>
      </div>

      <div class="flex flex-col justify-center">
        <h5 class="font-bold text-text-primary text-base leading-tight">{{ reviewerName }}</h5>

        <div class="flex items-center flex-wrap gap-1.5 mt-1.5">
          <div class="flex items-center gap-1 text-xs text-primary font-semibold uppercase tracking-wide">
            <span>Compra verificada</span>
            <Icon icon="check-circle" />
          </div>

          <span class="text-text-secondary/30 text-xs">•</span>

          <span class="inline-flex items-center gap-1 text-xs font-medium text-text-secondary/70">
            via
            <strong class="text-text-primary/80 font-bold">
              {{ plataform === 'amazon' ? 'Amazon' : 'Mercado Livre' }}
            </strong>
          </span>
        </div>
      </div>

    </div>
  </div>
</template>
