<script setup lang="ts">
import { ArrowRight } from '@lucide/vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';

defineProps<{
  imgSrc: string;
  shadowColor?: string
  hoverColor?: string,
  value: string
}>();

</script>


<template>
  <RouterLink :to="`/catalog?brand=${value}`"
    class="flex shadow-xl rounded-3xl bg-bg-base overflow-hidden transition-all group" :class="shadowColor">
    <div class="w-28! h-full">
      <img :src="imgSrc" class="object-center object-cover h-full w-full " />
    </div>
    <div class="p-3 space-y-3 flex flex-col flex-1">
      <div class="space-y-1">
        <h4 class="font-semibold text-base text-text-primary transition-colors " :class="hoverColor">
          <slot name="title" />
        </h4>
        <p class="text-sm text-text-secondary font-light line-clamp-2">
          <slot name="description" />
        </p>
      </div>
      <Divider class="mt-auto" />
      <div class="flex items-center justify gap-2 text-xs text-text-primary font-medium" :class="hoverColor">
        <p>Ver Produtos</p>
        <Icon :icon="ArrowRight" :size="14" class="group-hover:translate-x-2 transition-all" />
      </div>
    </div>
  </RouterLink>
</template>
