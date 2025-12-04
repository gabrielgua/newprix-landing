<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{ icon: string }>();

</script>

<template>
  <div class="flex gap-4">
    <div class="min-w-12 min-h-12 max-w-12 max-h-12 rounded-2xl grid place-items-center bg-primary-100">
      <Icon :icon="icon" class="text-primary-600 text-xl" />
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
