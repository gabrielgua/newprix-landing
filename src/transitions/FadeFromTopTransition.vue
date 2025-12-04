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
  transition: all 0.150s ease-in;
}

.fade-from-top-enter-from,
.fade-from-top-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
