<script setup lang="ts">
defineProps<{
  brandName: string;
  color?: string;
}>();
</script>


<template>
  <div class="flex items-center gap-6 transition-all">
    <slot name="img" v-if="$slots['img']"></slot>
    <p class="text-text-primary text-left text-2xl font-semibold">
      Mostrando <br>
      <span class="text-5xl" :class="color ? color : 'text-primary'">
        <slot />
      </span>
    </p>
  </div>
</template>
