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
  transition: all 200ms ease;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  scale: .9;
}
</style>
