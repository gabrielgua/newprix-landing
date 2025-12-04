<script setup lang="ts">
import Button from './Button.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';

defineProps<{
  imgSrc: string;
}>();

</script>


<template>
  <div class="flex flex-col shadow-lg shadow-slate-200 rounded-3xl space-y-4 p-4 bg-bg-base">
    <img :src="imgSrc" class="object-cover rounded-xl" />
    <div class="space-y-1">
      <h4 class="font-semibold">
        <slot name="title" />
      </h4>
      <p class="text-sm text-text-secondary">
        <slot name="description" />
      </p>
    </div>
    <Divider class="mt-auto" />
    <Button variant="neutral" size="sm" class="w-full justify-center text-text-secondary">
      Ver Produtos
      <Icon icon="arrow-right" class="text-xs " />
    </Button>
  </div>
</template>
