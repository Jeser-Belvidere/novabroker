<template>
  <div class="layout">
    <app-header/>
    <slot />
    <app-footer/>
  </div>
</template>
<style lang="css" scoped>
.layout {
  min-height: 100vh;
}
</style>