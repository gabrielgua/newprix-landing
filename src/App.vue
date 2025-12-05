<script setup lang="ts">
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex flex-col min-h-dvh">
    <AnnouncementBar />
    <Header />
    <RouterView />
  </div>
</template>

<style global></style>
