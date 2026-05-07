<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps, type BaseInputSizes } from './BaseInput.vue';

withDefaults(defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>(), {
  size: 'md'
})

const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement>();

const inputSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'p-2'],
  ['md', 'p-3'],
  ['lg', 'p-3.5']
])

defineExpose({ inputRef })

</script>

<template>
  <BaseInput :size="size" :icon-start="iconStart" :icon-end="iconEnd" :inverted="inverted">
    <input ref="inputRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit w-full" :class="[inputSizeStyles.get(size)]"
      :placeholder="placeholder" />
  </BaseInput>
</template>
