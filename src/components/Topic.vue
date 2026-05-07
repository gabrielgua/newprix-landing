<script setup lang="ts">
import type { LucideIcon } from '@lucide/vue';
import Icon from './Icon.vue';

defineProps<{ icon: LucideIcon }>();

</script>

<template>
  <div class="flex gap-4">
    <div class="min-w-12 min-h-12 max-w-12 max-h-12 rounded-2xl grid place-items-center bg-primary-100">
      <Icon :icon="icon" :size="20" class="text-primary-600" />
    </div>
    <div>
      <h3 class="font-semibold text-text-primary text-lg">
        <slot name="title" />
      </h3>
      <p class="text-text-secondary font-light">
        <slot name="description" />
      </p>
    </div>
  </div>
</template>
