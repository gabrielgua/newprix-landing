<script setup lang="ts">
import type { LucideIcon } from '@lucide/vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

defineProps<{ icon?: LucideIcon, flexRow?: boolean, centered?: boolean, gap?: string }>()

</script>

<template>
  <section class="py-10 lg:py-38">
    <Container class="flex flex-col transition-all" :class="[{ 'lg:flex-row': flexRow }, gap ? gap : 'gap-8']">
      <div class="flex flex-col space-y-12" :class="{ 'items-center': centered }">
        <div class="flex flex-col space-y-2" :class="{ 'items-center text-center': centered }"
          v-if="$slots['title'] || $slots['title-hero'] || $slots['header'] || $slots['subtitle']">
          <slot name="header" />
          <div class="flex items-center gap-4" v-if="$slots['title']">
            <h5 class="text-base font-semibold uppercase text-primary">
              <slot name="title"></slot>
            </h5>
            <Icon v-if="icon" :icon="icon" :size="24" class="text-primary" />
          </div>
          <h6 class="text-3xl md:text-4xl font-semibold text-text-primary" v-if="$slots['title-hero']">
            <slot name="title-hero" />
          </h6>
          <p class="text-sm md:text-base text-text-secondary" v-if="$slots['subtitle']">
            <slot name="subtitle" />
          </p>
        </div>
        <div v-if="$slots['first-column-content']">
          <slot name="first-column-content" />
        </div>
      </div>
      <slot name="second-column-content" v-if="$slots['second-column-content']" />
    </Container>
  </section>
</template>
