<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps, type BaseInputSizes } from './BaseInput.vue';
import { ChevronDown } from '@lucide/vue';

withDefaults(defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>(), {
  size: 'md'
})

const model = defineModel<string | number>();
const selectRef = ref<HTMLInputElement>();

const selectSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'p-2'],
  ['md', 'p-3'],
  ['lg', 'p-3.5']
])

defineExpose({ selectRef })

</script>

<template>
  <BaseInput :size="size" :icon-start="iconStart" :icon-end="ChevronDown" :inverted="inverted">
    <select ref="selecRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit w-full appearance-none" :class="[selectSizeStyles.get(size)]"
      :placeholder="placeholder">
      <slot />
    </select>
  </BaseInput>
</template>
