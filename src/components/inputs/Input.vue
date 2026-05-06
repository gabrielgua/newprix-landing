<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps } from './BaseInput.vue';

defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>();

const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement>();


defineExpose({ inputRef })

</script>

<template>
  <BaseInput :size="size" :icon-start="iconStart" :icon-end="iconEnd" :inverted="inverted">
    <input ref="inputRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit" :placeholder="placeholder" />
  </BaseInput>
</template>
