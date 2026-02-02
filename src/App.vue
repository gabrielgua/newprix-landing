<script setup lang="ts">
import { onMounted } from 'vue';
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue';
import { useBrandStore } from './stores/brand-store';
import { useProductStore } from './stores/product.store';

const { loadBrands } = useBrandStore();
const { loadProducts } = useProductStore();

onMounted(() => {
  loadBrands();
  loadProducts()
})

</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <AnnouncementBar />
    <Header />
    <RouterView />
  </div>
</template>

<style global></style>
