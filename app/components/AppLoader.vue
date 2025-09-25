<template>
  <Teleport to="#teleports">
    <div id="loader">
      <div class="loader" />
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

.loader {
  height: 80px;
  aspect-ratio: 1;
  padding: 10px;
  border-radius: 20px;
  box-sizing: border-box;
  position: relative;
  mask: conic-gradient(#000 0 0) content-box exclude, conic-gradient(#000 0 0);
  filter: blur(12px);
  animation: l4-0 1.2s linear infinite alternate;
}
.loader:before {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-conic-gradient(
    #0000 0 5%,
    #0000,
    var(--warm-beige) 20% 50%
  );
  animation: l4-1 1s linear infinite;
}
@keyframes l4-0 {
  to {
    border-radius: 50%;
  }
}
@keyframes l4-1 {
  to {
    rotate: 0.5turn;
  }
}
</style>
