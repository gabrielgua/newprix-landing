<script setup lang="ts">
import AnnouncementBar from './components/AnnouncementBar.vue';
import Header from './components/Header.vue'
</script>

<template>
  <AnnouncementBar />
  <Header />
  <RouterView />
</template>

<style global></style>
