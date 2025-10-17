<script setup lang="ts">
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue'
</script>

<template>
  <div class="sticky top-0 z-10">
    <AnnouncementBar />
    <Header />
  </div>
  <RouterView />
</template>

<style global></style>
