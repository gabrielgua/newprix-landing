<script lang="ts" setup>

defineProps<{
  for: string
}>();
</script>

<template>
  <div class="space-y-2">
    <label :for="for" class="block text-sm font-medium text-text-primary"
      :class="{ 'flex items-center gap-2': $slots['label-icon'] }">
      <slot name="label-icon" v-if="$slots['label-icon']" />
      <slot name="label" />
    </label>
    <!-- input goes here -->
    <slot name="input" />
  </div>
</template>
