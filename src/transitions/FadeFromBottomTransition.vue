<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-from-bottom" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-bottom-enter-active,
.fade-from-bottom-leave-active {
  transition: all 0.3s ease-in-out;
}

.fade-from-bottom-enter-from,
.fade-from-bottom-leave-to {
  opacity: 0;
  transform: translateY(15px);
}

.fade-from-bottom-enter-to,
.fade-from-bottom-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
