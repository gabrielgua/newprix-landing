<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-in" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-in-enter-active,
.fade-in-leave-active {
  transition: all 0.150s ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  scale: .9;
}

.fade-in-enter-to,
.fade-in-leave-from {
  opacity: 1;
  scale: 1.1;
}
</style>
