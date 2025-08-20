<template>
  <Teleport to="#teleports">
    <div id="loader">
      <div class="gradient-text">NOVABROKER</div>
      <UISpinner />
    </div>
  </Teleport>
</template>

<style lang="css" scoped>
#loader {
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 100;
  height: 110vh;
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

.gradient-text {
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  background: linear-gradient(
    45deg,
    var(--medium-taupe),
    var(--warm-beige),
    var(--warm-ligth),
    var(--warm-beige)
  );
  background-size: 400% 400%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 2s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
