<script lang="ts" setup>
export type ButtonProps = {
  variant?: ButtonVariant,
  size?: ButtonSize
}

export type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'primary-outlined' | 'neutral-outlined' | 'primary-icon' | 'neutral-icon';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';


withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['secondary', 'bg-secondary text-white'],
  ['neutral', 'bg-bg-base text-text-primary outline-1 outline-slate-200'],
  ['primary-outlined', 'outline-2 outline-primary text-primary bg-transparent'],
  ['neutral-outlined', 'outline-2 outline-bg-text-secondary text-text-primary bg-transparent'],
  ['primary-icon', 'text-primary-800 justify-center p-0! shadow-none!'],
  ['neutral-icon', 'text-text-secondary justify-center p-0! shadow-none!']
])

const buttonSizes = new Map<ButtonSize, string>([
  ['xs', 'p-2 px-3 text-xs gap-3'],
  ['sm', 'p-2 px-3 text-sm gap-3'],
  ['md', 'p-3 px-4 text-sm gap-4'],
  ['lg', 'p-4 px-5 text-base gap-5'],
  ['xl', 'p-5 px-6 text-lg gap-6']
])

</script>

<template>
  <button
    class="flex items-center rounded-full active:scale-[98%] cursor-pointer transition-all shadow-xs hover:scale-101"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>
