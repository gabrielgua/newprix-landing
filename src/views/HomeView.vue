<script setup lang="ts">
import Container from '@/components/Container.vue';
import Hero from '@/components/Hero.vue'
import Icon from '@/components/Icon.vue';
</script>

<template>
  <Hero />
  <div class="relative -z-1">
    <svg class="absolute -bottom-20 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="var(--color-blue-50)"
        d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
  </div>
  <section class="py-16 bg-bg-secondary">
    <Container class="space-y-8">
      <div>
        <div class="space-y-2">
          <div class="size-14 bg-bg-base grid place-items-center rounded-full shadow">
            <Icon icon="handshake" class="text-primary text-xl" />
          </div>
          <h2 class="text-2xl font-semibold text-primary">Quem representamos?</h2>
        </div>
        <p class="mt-4 text-base text-text-primary">
          Representamos uma variedade de marcas renomadas que compartilham nosso compromisso com a qualidade e a
          inovação.
        </p>
      </div>
      <div class="grid grid-cols-4 gap-12">
        <div v-for="_ of [1, 2, 3, 4]" class="shadow rounded-2xl space-y-4 p-4 bg-bg-base">
          <img src="https://placehold.co/400x400" alt="Marca 1" class="object-cover rounded-xl" />
          <h4>Marca 1</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ut velit, rem a modi similique officia?
            Quaerat amet obcaecati velit dolorem dolores.
          </p>
        </div>

      </div>
    </Container>
  </section>
</template>
<style scoped>
/* .section-divider {
  position: relative;
  width: 100%;
  height: 160px;
  background: #ffffff;
  overflow: hidden;
}

.section-divider::before {
  content: "";
  position: absolute;
  top: 40%;
  left: 0;
  width: 120%;
  height: 200%;
  background: radial-gradient(circle at 25% 60%, rgba(34, 197, 94, 0.3) 0%, transparent 60%),
    radial-gradient(circle at 75% 40%, rgba(16, 185, 129, 0.25) 0%, transparent 60%),
    linear-gradient(to bottom, #ffffff 0%, #f3f8fe 100%);
  border-radius: 50% 50% 0 0;
  transform: translateY(-50%) scale(1.4);
} */
</style>
