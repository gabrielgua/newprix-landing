<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';
import Icon from '../Icon.vue';

defineProps<{
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
  <BaseInput class="relative grid place-items-center">
    <select ref="selectRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit px-4 py-3 w-full appearance-none" :placeholder="placeholder">
      <slot />
    </select>
    <Icon icon="angle-down" styles="absolute right-4 z-10 size-4!" />
  </BaseInput>
</template>
