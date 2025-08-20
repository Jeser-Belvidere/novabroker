<template>
  <div class="spinner" />
</template>

<style lang="css" scoped>
.spinner {
  border: 5px solid var(--dark-forest-green);
  border-radius: 50%;
  border-top: 5px solid var(--warm-beige);
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
