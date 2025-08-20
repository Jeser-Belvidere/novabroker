<script setup lang="ts"></script>
<template>
  <header class="header">
    <div class="header-content">
      <div class="header-content__logo">NOVABROKER</div>
      <div class="header-content__links">
        <UILink href="/#intro">Главная</UILink>
        <UILink href="/#services">Услуги</UILink>
        <UILink href="/#advantages">Преимущества</UILink>
        <UILink href="/#stages">Этапы</UILink>
        <UILink href="/#rewievs">Отзывы</UILink>
        <UILink href="/">Новости</UILink>
      </div>
      <div class="header-content__contacts">
        <UILink href="#contacts" type="default">Контакты</UILink>
      </div>
      <div class="mobile-menu">
        <UIMenu />
      </div>
    </div>
  </header>
</template>
<style lang="css" scoped>
.header {
  height: var(--header-height);
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100% !important;
  background-color: var(--dark-forest-green);
  padding: 16px 32px;
  @media screen and (max-width: 852px) {
    padding-top: 16px;
  }
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
}

.header-content__logo {
  color: var(--warm-beige);
  font-size: 1.2rem;
  letter-spacing: 4px;
}

.header-content__links {
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

.header-content__contacts {
  padding: 16px 24px;
  border-radius: 100px;
  color: var(--light-grey);
  background-color: rgba(108, 108, 108, 0.102);
  @media screen and (max-width: 852px) {
    display: none;
  }
}

.mobile-menu {
  @media screen and (min-width: 852px) {
    display: none;
  }
}
</style>
