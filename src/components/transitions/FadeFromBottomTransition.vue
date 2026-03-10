<template>
  <Transition mode="out-in" name="fade-from-bottom">
    <slot />
  </Transition>
</template>

<style scoped>
.fade-from-bottom-enter-active,
.fade-from-bottom-leave-active {
  transition: all 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fade-from-bottom-enter-from,
.fade-from-bottom-leave-to {
  transform: translateY(10%);
  opacity: 0;
}
</style>
