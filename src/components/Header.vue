<script setup lang="ts">
import { useScrollLock } from '@/composables/useScrollLock';
import { Menu, Search } from '@lucide/vue';
import { onMounted, onUnmounted, ref } from 'vue';
import Button from './Button.vue';
import Container from './Container.vue';
import Divider from './Divider.vue';
import HeaderLink from './HeaderLink.vue';
import HeaderLinks from './HeaderLinks.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';
import MadimiOneFont from './MadimiOneFont.vue';
import MobileBottomModal from './MobileBottomModal.vue';
import Input from './inputs/Input.vue';
import InputGroup from './inputs/InputGroup.vue';

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
  <header class="sticky top-0 z-50 transition-all border-b  bg-bg-base/80  backdrop-blur-3xl"
    :class="scrolled ? 'py-4! lg:py-6! space-y-3 md:space-y-0  border-b-border' : 'border-b-transparent py-6! lg:py-8! space-y-6 md:space-y-0 text-normal'">
    <Container class="flex items-center justify-between ">
      <RouterLink to="/">
        <Logo />
      </RouterLink>
      <HeaderLinks class="hidden md:flex" />
      <div class="flex items-center md:hidden">
        <Button @click="toggleHeaderMobile" size="md-icon" variant="primary-ghost">
          <Icon :icon="Menu" />
        </Button>
      </div>
    </Container>

    <MobileBottomModal title="Menu" :show="showMobileHeader" @on-close="toggleHeaderMobile">
      <ul class="space-y-6 my-6">
        <li>
          <InputGroup for="search">
            <template #input>
              <Input id="search" placeholder="Pesquisar por produtos..." :icon-start="Search" />
            </template>
          </InputGroup>
        </li>
        <li>
          <HeaderLink to="/home" class="w-full text-sm" @clicked="toggleHeaderMobile">Home
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/catalog" class="w-full text-sm" @clicked="toggleHeaderMobile">
            Catálogo
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/contact" class="w-full text-sm" @clicked="toggleHeaderMobile">
            Contato
          </HeaderLink>
        </li>
      </ul>
      <Divider />
      <footer class="py-3">
        <p class="text-center text-sm text-text-secondary">
          &copy; 2026 <MadimiOneFont>newprix</MadimiOneFont>. Todos os direitos reservados.
        </p>
      </footer>
    </MobileBottomModal>

  </header>



</template>
