<script setup lang="ts">
defineProps<{ margin?: string }>();
</script>
<template>
  <div class="container-custom mx-auto transition-all" :style="{ '--margin': margin }">
    <slot />
  </div>
</template>
<style lang="css">
.container-custom {
  --margin: 1rem;
  width: min(1536px, 100% - calc(var(--margin) * 2));
}
</style>
