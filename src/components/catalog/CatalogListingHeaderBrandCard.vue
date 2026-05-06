<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>


<template>
  <div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 transition-all">
    <slot name="img" v-if="$slots['img']"></slot>
    <p class="text-text-primary text-center md:text-left text-base md:text-xl font-semibold">
      Produtos <br>
      <span class="text-2xl md:text-3xl" :class="color ? color : 'text-primary'">
        <slot />
      </span>
    </p>
  </div>
</template>
