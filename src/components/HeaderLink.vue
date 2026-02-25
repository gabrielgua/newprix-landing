<script lang="ts" setup>
import Icon from './Icon.vue';

defineProps<{ to: string; disabled?: boolean, icon?: string }>()
defineEmits(['clicked'])
</script>

<template>
  <RouterLink @click="$emit('clicked')" v-slot="{ navigate }" :to="to"
    active-class="font-bold text-primary! underline decoration-2"
    class="bg-transparent text-text-secondary hover:underline underline-offset-3 active:scale-95 cursor-pointer transition-all text-base"
    :class="{ 'opacity-20 no-underline! cursor-not-allowed! active:scale-100!': disabled }">
    <span @click="disabled ? $event.preventDefault() : navigate()" class="flex items-center gap-4">
      <Icon v-if="icon" :icon="icon" class="text-sm" />
      <slot />
    </span>
  </RouterLink>
</template>
