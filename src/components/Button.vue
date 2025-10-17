<script lang="ts" setup>
export type ButtonProps = {
  variant?: ButtonVariant,
  size?: ButtonSize
}

export type ButtonVariant = 'neutral' | 'primary' | 'secondary';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';


withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['secondary', 'bg-secondary text-white'],
  ['neutral', 'bg-bg-secondary text-text-primary']
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
  <button class="flex items-center rounded-full active:scale-[98%] cursor-pointer transition-all shadow-xs"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>
