<script lang="ts" setup>
defineProps<{ icon: string; styles?: string }>()
</script>

<template>
  <ficon :icon="icon" :class="styles" />
</template>
