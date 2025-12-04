<script setup lang="ts">
import Icon from './Icon.vue';

defineProps<{ icon: string }>();

</script>

<template>
  <div class="flex gap-4">
    <div class="min-w-10 min-h-10 max-w-10 max-h-10 rounded-full grid place-items-center bg-primary-100">
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
