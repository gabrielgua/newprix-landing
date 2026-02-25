<script setup lang="ts">
import { computed, onMounted } from 'vue';
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue';
import { useBrandStore } from './stores/brand-store';
import { useProductStore } from './stores/product.store';
import { useRoute } from 'vue-router';

const { loadBrands } = useBrandStore();
const { loadProducts } = useProductStore();

onMounted(() => {
  loadBrands();
  loadProducts()
})

const route = useRoute();
const isHomePage = computed(() => route.name === 'home');

</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <AnnouncementBar v-if="isHomePage" />
    <Header />
    <RouterView />
  </div>
</template>

<style global></style>
