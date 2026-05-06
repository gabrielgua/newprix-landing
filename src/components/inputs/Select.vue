<script setup lang="ts">
import { ref } from 'vue';
import BaseInput, { type BaseInputProps } from './BaseInput.vue';
import Icon from '../Icon.vue';

defineProps<BaseInputProps & {
  id: string,
  disabled?: boolean,
  required?: boolean,
  placeholder?: string
}>();

const model = defineModel<string | number>();
const selectRef = ref<HTMLInputElement>();


defineExpose({ inputRef: selectRef })

</script>

<template>
  <BaseInput class="relative grid place-items-center" :size="size" :inverted="inverted" :icon-start="iconStart"
    :icon-end="iconEnd">
    <select ref="selectRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit w-full appearance-none" :placeholder="placeholder">
      <slot />
    </select>
    <Icon icon="angle-down" styles="absolute right-4 z-10 size-4!" />
  </BaseInput>
</template>
