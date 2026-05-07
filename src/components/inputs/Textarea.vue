<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps, type BaseInputSizes } from './BaseInput.vue';

withDefaults(defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>(), {
  size: 'md',
})

const model = defineModel<string | number>();
const textareaRef = ref<HTMLInputElement>();

const textareaSizeStyles = new Map<BaseInputSizes, string>([
  ['sm', 'px-2'],
  ['md', 'px-3'],
  ['lg', 'px-3.5']
])

defineExpose({ inputRef: textareaRef })

</script>

<template>
  <BaseInput>
    <textarea ref="textareaRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit w-full" :class="textareaSizeStyles.get(size)"
      :placeholder="placeholder" />
  </BaseInput>
</template>
