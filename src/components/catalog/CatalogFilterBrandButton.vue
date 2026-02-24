<script setup lang="ts">
defineProps<{
  selected: boolean;
  selectedBgColor?: string
  selectedTextColor?: string,
  borderColor?: string,
  textColor?: string
}>();

//get textColor and BorderColor on HOVER

</script>

<template>

  <div
    class="px-4 py-2 rounded-full shadow-lg shadow-slate-800/5 font-medium border-2 transition-all border-border w-min-content"
    :class="selected ? `${selectedBgColor ?? 'bg-primary'} ${selectedTextColor ?? 'text-white'}` : 'bg-bg-base text-text-secondary cursor-pointer active:scale-95 '">
    <p class="text-sm">
      <slot />
    </p>
  </div>
</template>
