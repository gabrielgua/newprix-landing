<script setup lang="ts">
import { ref } from 'vue';
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

const show = ref(true);

const closeBar = () => {
  show.value = false;
};
</script>

<template>
  <Transition name="slide-fade" mode="out-in">
    <div class="bg-bg-secondary transition-all" v-if="show">
      <Container margin="var(--padding)"
        class="flex items-center gap-6 text-sm [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all">
        <img src="../assets/images/colors.png" alt="Earplugs Colors"
          class="h-[60px] w-[120px] object-cover object-top -ms-2" />
        <p>
          <span class="font-semibold">Lançamento! </span>
          <span class="font-semibold text-secondary font-[Madimi_One]">NWX</span> Protetores Auriculares Antirruído.
        </p>
        <Button variant="secondary" size="xs">
          Confira já!
          <Icon icon="arrow-right" />
        </Button>
        <Button @click="closeBar()" variant="neutral" size="xs" class="size-8 p-0! grid place-items-center ml-auto">
          <Icon icon="xmark" />
        </Button>
      </Container>
    </div>
  </Transition>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 150ms ease;
}

.slide-fade-leave-active {
  transition: all 150ms ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
