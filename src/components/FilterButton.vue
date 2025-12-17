<script setup lang="ts">
defineProps<{
  selected: boolean;
  selectedBgColor?: string
  selectedTextColor?: string
}>();

</script>

<template>

  <div class="px-6 py-3 rounded-full shadow-lg shadow-slate-800/5 font-medium border-2 border-border transition-all"
    :class="selected ? `${selectedBgColor ?? 'bg-primary'} ${selectedTextColor ?? 'text-white'}` : 'bg-bg-base text-text-secondary hover:border-primary hover:text-primary cursor-pointer active:scale-95'">
    <p>
      <slot />
    </p>
  </div>
</template>
