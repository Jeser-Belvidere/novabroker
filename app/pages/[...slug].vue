<template>
  <section>
    <div class="container">
      <div class="code">404</div>
      <div class="title">Страница не найдена.</div>
      <div>
        <UILink to="/">Вернуться на главную →</UILink>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 32px;
}

.container {
  margin-top: -200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  margin-top: -300px;
    
  }
}

.code {
  font-size: 10rem;
  font-weight: 800;
  color: var(--warm-beige);
  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }
}

.title {
  font-size: 4rem;
  font-weight: 800;
  color: var(--light-grey);
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
}
</style>
