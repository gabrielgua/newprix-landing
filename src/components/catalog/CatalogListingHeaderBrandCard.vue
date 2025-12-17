<script setup lang="ts">
defineProps<{
  brandName: string;
  imgSrc: string;
  color?: string;
}>();
</script>


<template>
  <div class="flex items-center gap-6 transition-all">
    <div class="size-30 group transition-all">
      <img :src="imgSrc" :alt="`${brandName} Logo`"
        class="object-cover object-center size-full rounded-4xl shadow group-hover:scale-105 transition-all" />
    </div>
    <p class="text-text-primary text-left text-3xl font-semibold">
      Produtos <br>
      <span class="text-5xl" :class="color ? color : 'text-primary'">
        <slot />
      </span>
    </p>
  </div>
</template>
