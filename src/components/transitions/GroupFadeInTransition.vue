<template>
  <TransitionGroup name="fade-in" tag="ul">
    <slot />
  </TransitionGroup>
</template>

<style lang="css">
.fade-in-leave-active {
  transition: all 100ms ease;
  position: absolute;

}

.fade-in-enter-active {
  transition: all 300ms ease-in-out;
}

.fade-in-move {
  transition: transform 300ms ease-in-out;
}

.fade-in-leave-to,
.fade-in-enter-from {
  opacity: 0;
  scale: .95;
}
</style>
