<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-from-right" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-right-enter-active {
  transition: all 0.4s ease-out;
}

.fade-from-right-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-from-right-enter-from,
.fade-from-right-leave-to {
  opacity: 0;
}

.fade-from-right-enter-from {
  transform: translateX(20px);
}

.fade-from-right-leave-to {
  transform: translateX(-20px);
}
</style>
