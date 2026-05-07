<script lang="ts" setup>
import type { LucideIcon, LucideProps } from '@lucide/vue';

withDefaults(defineProps<{
  icon: LucideIcon,
  size?: number,
  color?: string,
}>(), {
  size: 18
})
</script>

<template>
  <component :is="icon" :size="size" :color="color" />
</template>
