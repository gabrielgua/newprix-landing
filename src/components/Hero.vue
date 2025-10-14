<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue'
import Icon from './Icon.vue'
</script>

<template>
  <Container margin="var(--padding)"
    class="my-12 [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all">
    <div class="flex items-center justify-between">
      <img src="../assets/images/newprix_landing_hero_blob.png" alt="Hero Green Blob" class="w-[60%] max-w-[600px]" />
      <div class="space-y-6">
        <h2 class="font-semibold text-4xl text-text-primary">
          Conectando <span class="text-primary">negócios</span>. <br />
          Impulsionando <span class="text-primary">resultados</span>.
        </h2>
        <p>
          A <span class="font-semibold text-primary">newprix</span> é o elo entre grandes marcas e
          revendedores que buscam qualidade, agilidade e oportunidades.
        </p>
        <Button size="xl" class="font-semibold">
          Conheça nosso catálogo
          <Icon icon="arrow-right" />
        </Button>
      </div>
    </div>
  </Container>
</template>
