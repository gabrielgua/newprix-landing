<script setup lang="ts">
import { computed, ref } from 'vue';
import Button from '../Button.vue';
import Icon from '../Icon.vue';
import Input from '../inputs/Input.vue';
import InputGroup from '../inputs/InputGroup.vue';
import Select from '../inputs/Select.vue';
import Textarea from '../inputs/Textarea.vue';
import { useContactStore } from '@/stores/contact.store';


const contactStore = useContactStore();
const loading = computed(() => contactStore.state.submitting)

defineEmits(['submit'])

</script>

<template>
  <form @submit.prevent="contactStore.submit()" class="space-y-6">
    <h2 class="text-2xl font-bold text-text-primary mb-6">Envie uma Mensagem</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

      <InputGroup for="name">
        <template #label>Nome Completo</template>
        <template #input>
          <Input id="name" type="text" v-model="contactStore.form.name" required placeholder="João da Silva." />
        </template>
      </InputGroup>

      <InputGroup for="email">
        <template #label>Email</template>
        <template #input>
          <Input id="email" type="email" v-model="contactStore.form.email" required placeholder="seu@email.com" />
        </template>
      </InputGroup>
    </div>

    <InputGroup for="subject">
      <template #label>Assunto</template>
      <template #input>
        <Select id="subject" v-model="contactStore.form.subject" required>
          <option value="" disabled selected>Selecione um motivo...</option>
          <option value="duvida">Dúvida sobre o Produto</option>
          <option value="pedido">Problema com Pedido</option>
          <option value="parceria">Seja um Parceiro (B2B)</option>
          <option value="outro">Outro assunto</option>
        </Select>
      </template>
    </InputGroup>

    <InputGroup for="message">
      <template #label>Mensagem</template>
      <template #input>
        <Textarea id="message" type="text" v-model="contactStore.form.message" rows="5" required
          placeholder="Escreva sua mensagem aqui..." />
      </template>
    </InputGroup>

    <Button size="lg" class="w-full justify-center" :disabled="loading">
      {{ loading ? 'Enviando...' : 'Enviar Mensagem' }}
      <Icon v-if="loading" icon="spinner" styles="size-5! animate-spin" />
      <Icon v-else icon="fa-regular fa-paper-plane" styles="size-5!" />
    </Button>
  </form>
</template>
