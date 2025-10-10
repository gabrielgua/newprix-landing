<script setup lang="ts">
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <Container class="my-12">

    <div class="flex items-center justify-between">
      <img src="../assets/images/newprix_landing_hero_blob.png" alt="Hero Green Blob" class="w-[650px]">
      <div class="space-y-6">
        <h2 class="font-semibold text-4xl text-text-primary">
          Conectando <span class="text-primary">negócios</span>. <br>
          Impulsionando <span class="text-primary">resultados</span>.
        </h2>
        <p>
          A <span class="font-semibold text-primary">newprix</span> é o elo entre grandes marcas e revendedores que
          buscam
          qualidade, agilidade e oportunidades.
        </p>
        <button class="bg-secondary text-text-primary-light font-semibold p-6 rounded-full">
          Conheça nosso catálogo
          <Icon icon="arrow-right" />
        </button>
      </div>
    </div>
  </Container>
</template>
