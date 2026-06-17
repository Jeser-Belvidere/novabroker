<script setup lang="ts">
import type { TCurrencyData } from '~~/server/utils/CurrencyStorage'
import { onClickOutside } from '@vueuse/core'

const { data, error } = await useFetch('/api/currency')

const currencies = ref<TCurrencyData>({} as TCurrencyData)

if (data.value) {
	currencies.value = data.value
}

const servicesOpen = ref(false)
const servicesRef = useTemplateRef('servicesRef')

function toggleServices() {
	servicesOpen.value = !servicesOpen.value
}

function closeServices() {
	servicesOpen.value = false
}

onClickOutside(servicesRef, () => {
	servicesOpen.value = false
})

</script>
<template>
  <header class="header">
    <div class="header-content">
      <nuxt-link class="header-content__logo" to="/">NOVABROKER</nuxt-link>
      <div class="header-content__links">
        <UILink to="/">Главная</UILink>
        <div ref="servicesRef" class="services-dropdown">
          <button class="services-btn" :class="{ active: servicesOpen }" @click="toggleServices"><span class="services-btn-text">Услуги</span> <span class="services-arrow" :class="{ open: servicesOpen }">></span></button>
          <Transition name="fade">
            <div v-if="servicesOpen" class="services-menu">
              <UILink to="/services/soprovozhdenie-rastamozhki-avto" @click="closeServices">Сопровождение по растаможке</UILink>
              <UILink to="/services/konsultatsii-tamozhnya-ts" @click="closeServices">Консультации по таможне ТС</UILink>
              <UILink to="/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts" @click="closeServices">Оценка ТС и техзаключение</UILink>
              <UILink to="/services/sbkts-i-epts" @click="closeServices">СБКТС и ЭПТС</UILink>
              <UILink to="/services/uveos-glonass" @click="closeServices">УВЭОС — ГЛОНАСС</UILink>
              <UILink to="/services/pomoshch-tekhnicheskoe-zaklyuchenie" @click="closeServices">Техническое заключение</UILink>
            </div>
          </Transition>
        </div>
        <UILink to="/news">Новости</UILink>
        <UILink to="/tamozhennyy_kalkulyator">Таможенный калькулятор</UILink>
        <UILink href="https://customs.gov.ru/recycling-fee">Проверка оплаты утильсбора</UILink>
        <UILink to="/contacts">Контакты</UILink>
      </div>
      <div class="header-content__contacts">
        <UILink :to="{ path: '/', hash: '#application' }" type="default">Оставить заявку</UILink>
      </div>
      <div class="mobile-menu">
        <UIMenu />
      </div>
    </div>
    <div v-if="!error" class="header-currency">
      <div class="header-currency__content">
        $: <span>{{ currencies?.USD?.value }} <span :class="currencies?.USD.diff"/> </span> |
        €: <span>{{ currencies?.EUR?.value }} <span :class="currencies?.EUR.diff"/></span> |
        ¥: <span>{{ currencies?.CNY?.value }} <span :class="currencies?.CNY.diff"/></span> |
        ₩: <span>{{ currencies?.KRW?.value }} <span :class="currencies?.KRW.diff"/></span>
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
  gap: 6px;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
}

.header-content__logo {
  cursor: pointer;
  color: var(--warm-beige);
  font-size: 1.6rem;
  letter-spacing: 4px;
  text-decoration: none;

  @media screen and (max-width: 852px) {
    font-size: 1.4rem;
  }
}

.header-content__links {
  text-align: center;
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

  @media screen and (max-width: 1232px) {
    display: none;
  }
}

.services-dropdown {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.services-btn {
  background: none;
  border: none;
  color: var(--warm-beige);
  font-size: inherit;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
}

.services-btn-text:hover {
  text-decoration: underline;
  cursor: pointer;
}

.services-arrow {
  display: inline-block;
  font-size: 0.7rem;
  transition: transform 0.2s ease;
  text-decoration: none;
}

.services-arrow.open {
  transform: rotate(90deg);
}

.services-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px;
  border-radius: 8px;
  background-color: var(--dark-forest-green);
  border: 1px solid var(--warm-beige);
  white-space: nowrap;
  z-index: 20;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.header-content__contacts {
  font-size: 1.2rem;
  padding: 10px 24px;
  border-radius: 100px;
  color: var(--light-grey);
  background-color: rgba(108, 108, 108, 0.102);

  @media screen and (max-width: 970px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 1232px) {
    display: none;
  }
}

.mobile-menu {
  @media screen and (min-width: 1232px) {
    display: none;
  }
}

.bigger::after {
  content: '↑';
  color: green;
}

.smaller::after {
  content: '↓';
  color: red;
}

.equal::after {
  content: '＝';
  color: white;
}
</style>
