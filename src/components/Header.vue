<script setup lang="ts">
import { useScrollLock } from '@/composables/useScrollLock';
import FadeinTransition from '@/transitions/FadeinTransition.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';
import Container from './Container.vue';
import HeaderLink from './HeaderLink.vue';
import HeaderLinks from './HeaderLinks.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';
import MobileBottomModal from './MobileBottomModal.vue';
import MadimiOneFont from './MadimiOneFont.vue';

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 250;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});


const showMobileHeader = ref(false);
useScrollLock(showMobileHeader); //TODO when resizing to bigger screen sizes the scroll lock remains active
const toggleHeaderMobile = () => showMobileHeader.value = !showMobileHeader.value;


</script>

<template>
  <header class="sticky top-0 z-50 transition-all"
    :class="scrolled ? 'py-4! lg:py-6! space-y-3 md:space-y-0 bg-bg-base' : 'bg-bg-secondary  py-6! lg:py-8! space-y-6 md:space-y-0 text-normal'">
    <Container class="flex items-center justify-between ">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <HeaderLinks class="hidden md:flex" />
      <Button @click="toggleHeaderMobile" variant="neutral-icon" class="md:hidden">
        <FadeinTransition>
          <Icon v-if="showMobileHeader" icon="xmark" size="lg" class="text-primary-500" />
          <Icon v-else icon="bars" size="lg" class="text-primary-500" />
        </FadeinTransition>
      </Button>
    </Container>

    <MobileBottomModal title="Menu" :show="showMobileHeader" @on-close="toggleHeaderMobile">
      <ul class="divide-y divide-border">
        <li class="pb-4">
          <HeaderLink to="/home" icon="house" class="w-full text-sm" @clicked="toggleHeaderMobile">Home</HeaderLink>
        </li>
        <li class="py-4">
          <HeaderLink to="/catalog" icon="tags" class="w-full text-sm" @clicked="toggleHeaderMobile">
            Catálogo
          </HeaderLink>
        </li>
        <li class="py-4">
          <HeaderLink to="/contact" icon="paper-plane" class="w-full text-sm" @clicked="toggleHeaderMobile">
            Contato
          </HeaderLink>
        </li>
      </ul>
      <div class="border-t border-border bottom-0 left-0 fixed w-full bg-bg-secondary p-4">
        <p class="text-center text-sm text-text-secondary">&copy; 2026 <MadimiOneFont>newprix</MadimiOneFont>. Todos os
          direitos reservados. </p>
      </div>
    </MobileBottomModal>

  </header>



</template>
