<script setup lang="ts">
import FadeFromBottomTransition from '@/components/transitions/FadeFromBottomTransition.vue';
import FadeTransition from '@/components/transitions/FadeTransition.vue';
import { useScrollLock } from '@/composables/useScrollLock';
import { X } from '@lucide/vue';
import { computed, Teleport } from 'vue';
import Button from './Button.vue';
import Divider from './Divider.vue';
import Icon from './Icon.vue';
import Logo from './Logo.vue';

const props = withDefaults(defineProps<{
  show: boolean,
  title?: string
}>(), {
  show: false
});

const show = computed(() => props.show);
useScrollLock(show);

defineEmits(['on-close', 'on-confirm']);

</script>

<template>
  <Teleport to="body">
    <FadeTransition>
      <div class="fixed inset-0 z-50  bg-black/50" v-show="show" @click.self="$emit('on-close')">
        <FadeFromBottomTransition>
          <div class="absolute bottom-0 left-0 right-0 min-h-[50dvh] bg-white p-4 space-y-4" v-if="show">
            <header class="flex items-center justify-between">
              <p v-if="title" class="text-text-primary text-lg font-medium">{{ title }}</p>
              <Logo v-else />
              <Button @click="$emit('on-close')" variant="neutral-outlined" size="sm-icon">
                <Icon :icon="X" />
              </Button>
            </header>
            <Divider />
            <slot />
          </div>
        </FadeFromBottomTransition>
      </div>
    </FadeTransition>
  </Teleport>
</template>
