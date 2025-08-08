<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {});
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style lang="css">
#loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  display: block;
  background-color: var(--dark-forest-green);
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
