<script setup lang="ts">
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactInfo from '@/components/contact/ContactInfo.vue';
import Icon from '@/components/Icon.vue';
import Section from '@/components/Section.vue';
import FadeinTransition from '@/components/transitions/FadeinTransition.vue';
import { ContactInformation } from '@/constants/constants';
import { useContactStore } from '@/stores/contact.store';

const contactStore = useContactStore();

</script>

<template>
  <Section ref="heroRef" centered class="bg-bg-base py-14!">
    <template #title>Fale conosco</template>
    <template #title-hero>
      <p class="text-5xl">
        Como podemos ajudar?
      </p>
    </template>
    <template #subtitle>
      <p class="max-w-[700px] text-lg">
        Tem alguma dúvida sobre pedidos, parcerias ou produtos? Preencha o formulário abaixo e nossa equipe entrará em
        contato rapidamente.
      </p>
    </template>
  </Section>

  <Section flex-row class="py-14! lg:py-24!" gap="gap-8 lg:gap-12">
    <template #first-column-content>
      <div class="flex flex-col items-center lg:items-start gap-8 lg:gap-12 lg:max-w-[600px]">
        <h2 class="text-2xl font-bold text-text-primary">Informações de Contato</h2>
        <div class="space-y-6">
          <ContactInfo icon="fa-regular fa-envelope">
            <template #title>Email</template>
            <template #primary-info>{{ ContactInformation.contactEmail }}</template>
            <template #description-info>Nossa equipe responde em até 24h.</template>
          </ContactInfo>
          <ContactInfo icon="fa-regular fa-comment">
            <template #title>WhatsApp</template>
            <template #primary-info>{{ ContactInformation.contactPhone }}</template>
            <template #description-info>Segunda a Sexta, das 8h às 18h.</template>
          </ContactInfo>
          <ContactInfo icon="fa-regular fa-compass">
            <template #title>Centro de Distribuição</template>
            <template #primary-info>Curitiba, PR</template>
            <template #description-info>Atendimento apenas digital (E-commerce).</template>
          </ContactInfo>
        </div>

        <div class="bg-secondary/5 border border-secondary/10 rounded-3xl p-6 space-y-3">
          <div class="flex items-center gap-3">
            <Icon icon="circle-info" styles="text-secondary size-6!" />
            <h3 class="font-bold text-secondary-800">Suporte a Pedidos</h3>
          </div>
          <p class="text-sm text-secondary-800 leading-relaxed">
            Se você fez uma compra através da <strong>Amazon</strong> ou <strong>Mercado Livre</strong>, recomendamos
            utilizar o chat da própria plataforma para um atendimento mais ágil sobre rastreio ou devoluções.
          </p>
        </div>
      </div>
    </template>

    <template #second-column-content>
      <div
        class="bg-bg-base rounded-3xl lg:rounded-[2.5rem] p-6 md:p-8 lg:p-10 overflow-hidden border border-border w-full max-h-max">
        <FadeinTransition>
          <div v-if="contactStore.state.submitted" class="py-12 flex flex-col items-center text-center relative z-10">
            <div class="w-20 h-20 bg-green-100 rounded-full grid place-items-center text-primary mb-6">
              <Icon icon="fa-regular fa-check-circle" styles="size-8! " />
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-2">Mensagem Enviada!</h3>
            <p class="text-text-secondary mb-8 max-w-sm">
              Obrigado por entrar em contato, {{ contactStore.form.name }}. Retornaremos no email <strong
                class="text-gray-800">{{ contactStore.form.email }}</strong>
              o mais breve possível.
            </p>
          </div>

          <div v-else-if="contactStore.state.error" class="py-12 flex flex-col items-center text-center relative z-10">
            <div class="w-20 h-20 bg-rose-100 rounded-full grid place-items-center text-rose-500 mb-6">
              <Icon icon="fa-regular fa-xmark-circle" styles="size-8! " />
            </div>
            <h3 class="text-2xl font-bold text-text-primary mb-2">Algo Aconteceu!</h3>
            <p class="text-text-secondary mb-8 max-w-sm">
              Algum erro aconteceu enquanto tentávamos mandar a sua mensagem.
              Por favor, tente novamente mais tarde.
            </p>
          </div>

          <ContactForm v-else />
        </FadeinTransition>
      </div>
    </template>
  </Section>
</template>
