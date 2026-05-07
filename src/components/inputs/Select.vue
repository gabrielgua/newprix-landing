<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps, type BaseInputSizes } from './BaseInput.vue';
import Icon from '../Icon.vue';

withDefaults(defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>(), {
  size: 'md',
  iconEnd: 'chevron-down'
})

const model = defineModel<string | number>();
const selectRef = ref<HTMLInputElement>();

const selectSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'px-3 py-2'],
  ['md', 'px-4 py-3'],
  ['lg', 'px-4.5 py-3.5']
])

defineExpose({ inputRef: selectRef })

</script>

<template>
  <BaseInput :size="size" :inverted="inverted" :icon-start="iconStart" :icon-end="iconEnd">
    <select ref="selectRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit w-full appearance-none" :class="[selectSizeStyles.get(size)]"
      :placeholder="placeholder">
      <slot />
    </select>
  </BaseInput>
</template>
