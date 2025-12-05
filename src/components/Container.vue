<template>
  <div class="container container-custom-width mx-auto transition-all">
    <slot />
  </div>
</template>
<style lang="css">
.container-custom-width {
  width: min(100% - 3rem);
}
</style>
