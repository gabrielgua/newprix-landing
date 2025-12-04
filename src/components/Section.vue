<script setup lang="ts">
import Container from './Container.vue';
import Icon from './Icon.vue';

defineProps<{ icon?: string, flexRow?: boolean, centered?: boolean }>()

</script>

<template>
  <section class="py-10 lg:py-38 transition-all">
    <Container class="gap-8 flex flex-col [--padding:1.5rem] md:[--padding:2rem] lg:[--padding:3rem] transition-all"
      :class="[{ 'lg:flex-row lg:space-x-24': flexRow }]" margin="var(--padding)">
      <div class="flex flex-col space-y-12" :class="{ 'items-center': centered }">
        <div class="flex flex-col space-y-2" :class="{ 'items-center': centered }">
          <div class="flex items-center gap-4">
            <h5 class="text-base font-semibold uppercase text-primary">
              <slot name="title"></slot>
            </h5>
            <Icon v-if="icon" :icon="icon" class="text-primary" />
          </div>
          <h6 class="text-4xl font-semibold text-text-primary">
            <slot name="title-hero"></slot>
          </h6>
          <p class="text-base text-text-secondary">
            <slot name="subtitle"></slot>
          </p>
        </div>
        <div class="mt-auto" v-if="$slots['first-column-content']">
          <slot name="first-column-content" />
        </div>
      </div>
      <slot name="second-column-content" v-if="$slots['second-column-content']" />
    </Container>
  </section>
</template>
