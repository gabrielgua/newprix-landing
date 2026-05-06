<script lang="ts" setup>
import Icon from '../Icon.vue';


export type BaseInputSizes = 'sm' | 'md' | 'lg';

export type BaseInputProps = {
  size?: 'sm' | 'md',
  inverted?: boolean,
  iconStart?: string,
  iconEnd?: string
}

withDefaults(defineProps<BaseInputProps>(), {
  size: 'md'
})

const buttonSizesStyles = new Map<BaseInputSizes, string>([
  ['sm', 'rounded-xl px-3 py-2 text-[13px] gap-2'],
  ['md', 'rounded-2xl px-4 py-3 text-sm gap-3 '],
  ['lg', 'rounded-2xl px-4.5 py-3.5 text-base gap-3.5']
])

</script>

<template>
  <div
    class="flex items-center w-full rounded-2xl border border-border  text-text-secondary focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all duration-200 overflow-hidden"
    :class="[inverted ? 'bg-bg-base focus-within:bg-bg-base' : 'bg-bg-muted focus-within:bg-bg-base', buttonSizesStyles.get(size)]">
    <Icon v-if="iconStart" :icon="iconStart" styles="text-text-secondary/50" />
    <slot />
    <Icon v-if="iconEnd" :icon="iconEnd" styles="text-text-secondary/50" />
  </div>

</template>
