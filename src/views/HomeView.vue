<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import Hero from '@/components/Hero.vue';
import PartnersSection from '@/components/PartnersSection.vue';




</script>

<template>
  <Hero />
  <div class="relative -bottom-10 -z-1">
    <svg class="absolute bottom-0 left-0 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="var(--color-white)"
        d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,160C1120,171,1280,181,1360,186.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z">
      </path>
    </svg>
  </div>
  <AboutSection />
  <PartnersSection />

</template>
