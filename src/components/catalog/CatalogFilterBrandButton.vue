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
    class="px-4 py-2 rounded-xl shadow-lg shadow-slate-800/5 font-medium  transition-all ring-border w-min-content grid place-items-center"
    :class="selected ? `${selectedBgColor ?? 'bg-primary'} ${selectedTextColor ?? 'text-white'} ring-2` : 'ring bg-bg-muted text-text-secondary cursor-pointer active:scale-95 '">
    <p class="text-sm">
      <slot />
    </p>
  </div>
</template>
