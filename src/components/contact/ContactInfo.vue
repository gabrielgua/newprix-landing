<script setup lang="ts">
import type { LucideIcon } from '@lucide/vue';
import Icon from '../Icon.vue';

defineProps<{
  icon: LucideIcon,
}>();
</script>

<template>
  <div class="flex items-start gap-4">
    <div class="size-10 md:size-12 rounded-xl grid place-items-center bg-primary/15 text-primary">
      <Icon :icon="icon" styles="size-4! md:size-6! shrink-0" />
    </div>
    <div>
      <p class="tracking-wider uppercase text-xs md:text-sm font-medium text-text-secondary">
        <slot name="title" />
      </p>
      <p class="text-black text-lg">
        <slot name="primary-info" />
      </p>
      <p class="text-text-secondary text-xs md:text-sm">
        <slot name="description-info" />
      </p>
    </div>
  </div>
</template>
