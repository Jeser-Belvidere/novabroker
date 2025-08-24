<script setup lang="ts"></script>
<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-content__logo">NOVABROKER</div>
      <div class="footer-content__links">
        <UILink type="default" href="/#intro">Главная</UILink>
        <UILink type="default" href="/#services">Услуги</UILink>
        <UILink type="default" href="/#advantages">Преимущества</UILink>
        <UILink type="default" href="/#stages">Этапы</UILink>
        <UILink type="default" href="/#rewievs">Отзывы</UILink>
        <UILink type="default" href="/">Новости</UILink>
      </div>
      <div class="footer-content__llc">
        <div>ООО "Новаброкер", {{ new Date().getFullYear() }}</div>
        <div class="footer-content__llc__info">
          <div>ОГРН 1247700249356</div>
          <div>ИНН 7751306330</div>
          <div>КПП 775101001</div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="css" scoped>
footer {
  position: relative;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: var(--footer-height);
  z-index: 1;
  width: 100% !important;
  background-color: var(--black);
  padding: 16px 32px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  @media screen and (max-width: 868px) {
    flex-direction: column;
    gap:8px;
  }
}

.footer-content__logo {
  color: var(--warm-beige);
  font-size: 1.2rem;
  letter-spacing: 4px;
}

.footer-content__links {
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 16px 24px;
  border-radius: 100px;
  color: var(--light-grey);
  background-color: rgba(108, 108, 108, 0.102);
  @media screen and (max-width: 852px) {
    display: none;
  }
}

.footer-content__llc {
  color: var(--warm-beige);
}

.footer-content__llc__info {
  margin-top: 6px;
  font-size: 0.7rem;
  color: #878583;
}
</style>
