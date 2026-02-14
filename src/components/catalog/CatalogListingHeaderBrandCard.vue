<script setup lang="ts">
defineProps<{
  color?: string;
}>();
</script>


<template>
  <div class="flex items-center gap-6 transition-all">
    <slot name="img" v-if="$slots['img']"></slot>
    <p class="text-text-primary text-left text-xl font-semibold">
      Produtos <br>
      <span class="text-3xl" :class="color ? color : 'text-primary'">
        <slot />
      </span>
    </p>
  </div>
</template>
