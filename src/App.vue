<script setup lang="ts">
import Button from './components/Button.vue';
import Container from './components/Container.vue';
import Header from './components/Header.vue'
import Icon from './components/Icon.vue';
</script>

<template>
  <div class="bg-bg-secondary">
    <Container margin="var(--padding)"
      class="flex items-center gap-6 text-sm [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all">
      <img src="./assets/images/colors.png" alt="Earplugs Colors"
        class="h-[60px] w-[120px] object-cover object-top -ms-2" />
      <p>
        <span class="font-semibold">Lançamento! </span>
        <span class="font-semibold text-secondary">NWX</span> Protetores Auriculares Antirruído.
      </p>
      <Button variant="secondary" size="xs">
        Confira já!
      </Button>
      <Button variant="neutral" size="xs" class="size-8 p-0! grid place-items-center ml-auto">
        <Icon icon="xmark" />
      </Button>
    </Container>
  </div>
  <Header />
  <RouterView />
</template>

<style global></style>
