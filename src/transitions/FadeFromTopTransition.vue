<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-from-top" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-top-enter-active {
  transition: all 0.4s ease-out;
}

.fade-from-top-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-from-top-enter-from,
.fade-from-top-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
