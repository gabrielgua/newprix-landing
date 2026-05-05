<script setup lang="ts">
import { ContactInformation } from '@/constants/constants';
import Container from './Container.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';
import HeaderLink from './HeaderLink.vue';

</script>

<template>
  <footer class="bg-bg-base pt-8 pb-5 border-t border-border text-text-secondary text-sm">
    <Container class="space-y-5">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 place-items-start">
        <div class="md:col-span-2">
          <Logo />
          <p class="text-text-secondary leading-relaxed max-w-sm my-6 text-left">
            O elo entre grandes marcas e o seu dia a dia. Produtos originais com envio rápido e garantia de procedência
            nos maiores marketplaces do país.
          </p>

          <div class="flex gap-3">
            <RouterLink to="/home"
              class="size-10 rounded-full bg-bg-muted border-border grid place-items-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
              <Icon icon="fa-brands fa-instagram" styles="size-4!" />
            </RouterLink>
            <RouterLink to="/home"
              class="size-10 rounded-full bg-bg-muted border-border grid place-items-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
              <Icon icon="fa-brands fa-facebook" styles="size-4!" />
            </RouterLink>
            <RouterLink to="/home"
              class="size-10 rounded-full bg-bg-muted border-border grid place-items-center text-text-secondary hover:bg-primary hover:text-white transition-all duration-300">
              <Icon icon="fa-brands fa-linkedin" styles="size-4!" />
            </RouterLink>
          </div>
        </div>

        <nav>
          <h4 class="font-bold text-text-primary mb-5">Navegação</h4>
          <ul class="space-y-3">
            <li>
              <HeaderLink to="/home" class="text-sm">Home</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/catalog" class="text-sm">Catálogo</HeaderLink>
            </li>
            <li>
              <HeaderLink to="/contact" class="text-sm">Contato</HeaderLink>
            </li>
          </ul>
        </nav>

        <div>
          <h4 class="font-bold text-text-primary mb-5">Atendimento</h4>
          <ul class="space-y-4 text-sm text-text-secondary">
            <li class="flex items-center gap-3">
              <Icon icon="fa-regular fa-envelope" styles="size-4! text-primary" />
              {{ ContactInformation.contactEmail }}
            </li>
            <li class="flex items-center gap-3">
              <Icon icon="fa-regular fa-comment" styles="size-4! text-primary" />
              {{ ContactInformation.contactPhone }}
            </li>
          </ul>
        </div>
      </div>

      <Divider />

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
        <p>&copy; 2026 Newprix. Todos os direitos reservados.</p>

        <p class="flex items-center gap-1">
          Made with <span class="text-rose-500 text-sm leading-none animate-pulse">❤️</span> by
          <a href="https://github.com/gabrielgua" target="_blank" rel="noopener noreferrer"
            class="font-bold text-gray-800 hover:text-brand-green hover:underline transition-colors ml-0.5">
            gabrielgua
          </a>
        </p>
      </div>
    </Container>
  </footer>
</template>
