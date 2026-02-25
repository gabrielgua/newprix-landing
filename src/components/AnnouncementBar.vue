<script setup lang="ts">
import AnnoucementBarMarquee from './AnnoucementBarMarquee.vue';
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>
  <div class="flex flex-col bg-primary-300 transition-all">
    <AnnoucementBarMarquee class="md:hidden" />
    <Container margin="var(--padding)"
      class="flex items-center justify-between gap-3 md:gap-6 text-sm [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all">
      <img src="../assets/images/colors.png" alt="Earplugs Colors"
        class="aspect-[2/1] max-h-[60px] object-cover object-top -ms-2" />
      <p class="hidden md:block">
        <span class="font-semibold">Lançamento! </span>
        <span class="font-bold">NWX</span> Protetores Auriculares Antirruído.
      </p>
      <p class="md:hidden">
        Protetores Auriculares Antirruído NWX.
      </p>
      <RouterLink to="/catalog?brand=nwx" class="ml-auto min-w-max ">
        <Button variant="neutral" size="xs">
          Confira
          <Icon icon="arrow-right" />
        </Button>
      </RouterLink>
    </Container>
  </div>
</template>

<style lang="css" global>
.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 12s linear infinite;
}

.marquee-content {
  flex-shrink: 0;
  white-space: nowrap;
  padding-right: 40px;
  /* spacing between loops */
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}
</style>
