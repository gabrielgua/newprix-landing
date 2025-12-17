<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-from-bottom" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-bottom-enter-active {
  transition: all 0.4s ease-out;
}

.fade-from-bottom-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-from-bottom-enter-from,
.fade-from-bottom-leave-to {
  opacity: 0;
}

.fade-from-bottom-enter-from {
  transform: translateX(20px);
}

.fade-from-bottom-leave-to {
  transform: translateX(-20px);
}
</style>
