<script lang="ts" setup>
export type ButtonProps = {
  variant?: ButtonVariant,
  size?: ButtonSize,
  disabled?: boolean
}

export type ButtonVariant = 'neutral' | 'primary' | 'secondary' | 'dark' | 'primary-outlined' | 'neutral-outlined' | 'primary-ghost' | 'neutral-ghost' | 'neutral-icon';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xs-icon' | 'sm-icon' | 'md-icon' | 'lg-icon';


withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'md'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['primary', 'bg-primary text-white'],
  ['secondary', 'bg-secondary text-white'],
  ['neutral', 'bg-bg-base text-text-primary outline-1 outline-slate-200'],
  ['dark', 'bg-zinc-800 text-white'],
  ['primary-outlined', 'outline outline-primary text-primary bg-transparent'],
  ['neutral-outlined', 'outline outline-border text-text-primary bg-transparent'],
  ['primary-ghost', 'text-primary bg-transparent hover:bg-primary/5 shadow-none!'],
  ['neutral-ghost', 'text-text-primary bg-transparent hover:bg-border/20 shadow-none!'],
  ['neutral-icon', 'text-text-primary bg-transparent p-0! hover:bg-transparent! shadow-none!']
])

const buttonSizes = new Map<ButtonSize, string>([
  ['xs', 'p-2 px-3 text-xs gap-3'],
  ['sm', 'p-2 px-3 text-sm gap-3'],
  ['md', 'p-3 px-4 text-sm gap-4'],
  ['lg', 'p-4 px-5 text-base gap-5'],
  ['xl', 'p-5 px-6 text-lg gap-6'],
  ['xs-icon', 'size-8! text-xs grid place-items-center rounded-lg!'],
  ['sm-icon', 'size-9! text-sm grid place-items-center rounded-xl!'],
  ['md-icon', 'size-10! grid place-items-center rounded-xl!'],
  ['lg-icon', 'size-11! grid place-items-center rounded-xl!']
])

</script>

<template>
  <button
    class="flex items-center rounded-full active:scale-[98%] cursor-pointer transition-all shadow-xs hover:scale-101"
    :class="[buttonStyles.get(variant), buttonSizes.get(size), { 'pointer-events-none opacity-70': disabled }]"
    :disabled="disabled">
    <slot />
  </button>
</template>
