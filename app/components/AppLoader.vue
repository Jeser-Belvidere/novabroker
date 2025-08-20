<template>
  <Teleport to="#teleports">
    <div id="loader">
        <UISpinner />
    </div>
  </Teleport>
</template>

<style lang="css" scoped>
#loader {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100vh;
  width: 100vw;
  background-color: var(--dark-forest-green);
}

.fade {
  animation: fade 0.4s linear 1 forwards;
}

@keyframes fade {
  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
