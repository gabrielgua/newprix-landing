<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from './BaseInput.vue';

defineProps<{
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
  <BaseInput>
    <input ref="inputRef" :id="id" :required="required" :disabled="disabled" v-bind="$attrs" v-model="model"
      class="outline-none bg-inherit text-inherit px-4 py-3 w-full" :placeholder="placeholder" />
  </BaseInput>
</template>
