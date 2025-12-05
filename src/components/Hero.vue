<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue'
import Icon from './Icon.vue'
</script>

<template>
  <section class="relative overflow-hidden transition-all">

    <Container class="py-24 transition-all">
      <div class="flex items-center justify-between transition-all gap-12">
        <img src="../assets/images/newprix_landing_hero_blob.png" alt="Hero Green Blob"
          class="w-[60%] max-w-[600px] hidden xl:block" />
        <div class="space-y-6">
          <h2 class="font-semibold text-6xl text-text-primary">
            Conectando <span class="text-primary">você</span>. <br />
            Impulsionando <span class="text-primary">resultados</span>.
          </h2>
          <p class="text-lg font-light text-text-secondary max-w-lg">
            A <span class="font-semibold text-primary">newprix</span> é o elo entre grandes marcas e
            revendedores que buscam qualidade, agilidade e oportunidades.
          </p>
          <div class="flex flex-col lg:flex-row items-center gap-6">
            <Button size="xl" class="font-semibold w-full justify-between">
              Conheça nosso catálogo
              <Icon icon="bag-shopping" />
            </Button>
            <Button variant="neutral" size="xl" class="font-semibold w-full justify-center">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>
