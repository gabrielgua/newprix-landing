<script lang="ts" setup>

defineProps<{
  for: string
}>();
</script>

<template>
  <div class="space-y-2">
    <label :for="for" class="block text-sm font-medium text-text-primary">
      <slot name="label" />
    </label>
    <!-- input goes here -->
    <slot name="input" />
  </div>
</template>
