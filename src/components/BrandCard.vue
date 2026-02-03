<script setup lang="ts">
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
    class="flex flex-col shadow-xl rounded-3xl bg-bg-base overflow-hidden hover:-translate-y-2 hover:scale-102 hover:cursor-pointer transition-all group"
    :class="shadowColor">
    <div class="h-46">
      <img :src="imgSrc" class="object-center object-cover h-full w-full " />
    </div>
    <div class="p-4 space-y-4 flex flex-col flex-1">
      <div class="space-y-1">
        <h4 class="font-semibold text-lg transition-colors text-text-primary" :class="hoverColor">
          <slot name="title" />
        </h4>
        <p class="text-sm text-text-secondary font-light">
          <slot name="description" />
        </p>
      </div>
      <Divider class="mt-auto" />
      <div class="flex items-center gap-2 text-sm text-text-primary font-medium" :class="hoverColor">
        <p>Ver Produtos</p>
        <Icon icon="arrow-right" class="text-xs group-hover:translate-x-2 transition-all" />
      </div>
    </div>
  </RouterLink>
</template>
