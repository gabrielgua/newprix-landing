<script lang="ts" setup>

defineProps<{
  inputId: string
}>();
</script>

<template>
  <div class="space-y-2">
    <label :for="inputId" class="block text-sm font-medium text-text-primary"
      :class="{ 'flex items-center gap-2': $slots['label-icon'] }">
      <template v-if="$slots['label-icon']">
        <slot name="label-icon" />
      </template>
      <slot name="label" />
    </label>
    <!-- input goes here -->
    <slot name="input" />
  </div>
</template>
