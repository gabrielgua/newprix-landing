<script setup lang="ts">
import Button from '../Button.vue';
import Icon from '../Icon.vue';

defineEmits(['remove'])

</script>

<template>
  <li class="flex items-center gap-3 bg-bg-base border border-border p-2 px-2.5 rounded-xl text-text-primary text-xs">
    <p>
      <slot />
    </p>
    <Button variant="neutral-icon" size="xs" @click="$emit('remove')">
      <Icon icon="xmark" />
    </Button>
  </li>
</template>
