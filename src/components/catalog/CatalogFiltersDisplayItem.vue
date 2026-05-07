<script setup lang="ts">
import { X } from '@lucide/vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';

defineProps<{
  btnDisabled?: boolean
}>();

defineEmits(['remove'])

</script>

<template>
  <li
    class="flex items-center gap-3 bg-bg-base border border-border p-1 px-1.5 md:p-2 md:px-2.5 rounded-lg md:rounded-xl text-text-primary text-xs">
    <slot />
    <Button v-if="!btnDisabled" variant="neutral-icon" size="xs" @click="$emit('remove')">
      <Icon :icon="X" :size="12" />
    </Button>
  </li>
</template>
