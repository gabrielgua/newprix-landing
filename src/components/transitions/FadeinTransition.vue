<script setup lang="ts">
import { Transition } from 'vue';

</script>

<template>
  <Transition name="fade-in" mode="out-in">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-in-enter-active {
  transition: all 200ms ease-in-out;
}

.fade-in-leave-active {
  transition: all 100ms ease-in-out;
}

.fade-in-enter-from,
.fade-in-leave-to {
  opacity: 0;
  scale: .9;
}
</style>
