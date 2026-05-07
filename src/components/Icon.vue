<script lang="ts" setup>
import { CircleHelp, type LucideIcon } from '@lucide/vue';

withDefaults(defineProps<{
  icon?: LucideIcon,
  size?: number,
}>(), {
  icon: CircleHelp,
  size: 18
})
</script>

<template>
  <component :is="icon" :size="size" v-bind="$attrs" />
</template>
