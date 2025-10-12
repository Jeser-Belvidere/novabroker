<script setup lang="ts">
import type { TCurrencyData } from '~~/server/utils/CurrencyStorage'

const { data, error } = await useFetch('/api/currency')

const currencies = ref<TCurrencyData>({} as TCurrencyData)

if (data.value) {
  currencies.value = data.value
}

</script>
<template>
  <header class="header">
    <div class="header-content">
      <nuxt-link class="header-content__logo" to="/">NOVABROKER</nuxt-link>
      <div class="header-content__links">
        <UILink :to="{ path: '/', hash: '#services' }">Услуги</UILink>
        <UILink :to="{ path: '/', hash: '#advantages' }">Преимущества</UILink>
        <UILink :to="{ path: '/', hash: '#stages' }">Этапы</UILink>
        <UILink :to="{ path: '/', hash: '#reviews' }">Отзывы</UILink>
        <UILink :to="{ path: '/', hash: '#news' }">Новости</UILink>
        <UILink :to="{ path: '/', hash: '#application' }">Оставить заявку</UILink>
      </div>
      <div class="header-content__contacts">
        <UILink to="/contacts" type="default">Контакты</UILink>
      </div>
      <div class="mobile-menu">
        <UIMenu />
      </div>
    </div>
    <div v-if="!error" class="header-currency">
      <div class="header-currency__content">
        $: <span>{{ currencies?.USD?.value }}</span> |
        ¥: <span>{{ currencies?.CNY?.value }}</span> |
        €: <span>{{ currencies?.EUR?.value }}</span>
      </div>
    </div>
  </header>
</template>
<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: var(--header-height);
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100% !important;
  background-color: var(--dark-forest-green);
  padding: 6px 32px;

  @media screen and (max-width: 868px) {
    height: var(--header-height-mobile);
    flex-direction: column-reverse;
  }
}

.header-currency {
  color: var(--warm-beige);
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;

  @media screen and (max-width: 868px) {
    top: 10px;
  }
}

.header-currency__content {
  span {
    color: var(--light-grey);
  }
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.header-content__logo {
  color: var(--warm-beige);
  font-size: 1.6rem;
  letter-spacing: 4px;
  text-decoration: none;

  @media screen and (max-width: 852px) {
    font-size: 1.4rem;
  }
}

.header-content__links {
  font-size: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 10px 24px;
  border-radius: 100px;
  color: var(--light-grey);
  background-color: rgba(108, 108, 108, 0.102);

  @media screen and (max-width: 970px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 852px) {
    display: none;
  }
}

.header-content__contacts {
  font-size: 1.2rem;
  padding: 16px 24px;
  border-radius: 100px;
  color: var(--light-grey);
  background-color: rgba(108, 108, 108, 0.102);

  @media screen and (max-width: 970px) {
    font-size: 1rem;
  }

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
