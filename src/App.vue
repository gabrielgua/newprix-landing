<script setup lang="ts">
import { onMounted } from 'vue';
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue';
import { useBrandStore } from './stores/brand-store';

const { loadBrands } = useBrandStore();

onMounted(() => {
  loadBrands();
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
