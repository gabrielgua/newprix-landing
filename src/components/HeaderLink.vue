<script lang="ts" setup>
defineProps<{ to: string; disabled?: boolean }>()
</script>

<template>
  <RouterLink v-slot="{ navigate }" :to="to" active-class="font-bold text-primary! underline decoration-2"
    class="bg-transparent text-text-secondary hover:underline underline-offset-3 flex items-center gap-4 active:scale-95 cursor-pointer transition-all"
    :class="{ 'opacity-20 no-underline! cursor-not-allowed! active:scale-100!': disabled }">
    <span @click="disabled ? $event.preventDefault() : navigate()">
      <slot />
    </span>
  </RouterLink>
</template>
