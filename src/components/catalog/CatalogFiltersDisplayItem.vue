<script setup lang="ts">
import Button from '../Button.vue';
import Icon from '../Icon.vue';

defineEmits(['remove'])

</script>

<template>
  <li
    class="flex items-center gap-3 bg-bg-base border border-border p-1 px-1.5 md:p-2 md:px-2.5 rounded-lg md:rounded-xl text-text-primary text-[11px] md:text-xs">
    <p>
      <slot />
    </p>
    <Button variant="neutral-icon" size="xs" @click="$emit('remove')">
      <Icon icon="xmark" />
    </Button>
  </li>
</template>
