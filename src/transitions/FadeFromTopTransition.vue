<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-from-top" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-top-enter-active,
.fade-from-top-leave-active {
  transition: all 0.3s ease;
}

.fade-from-top-enter-from,
.fade-from-top-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-from-top-enter-to,
.fade-from-top-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
