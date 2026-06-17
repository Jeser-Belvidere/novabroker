<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
const isActive = ref(false);
const menuRef = useTemplateRef('menu');
const servicesOpen = ref(false);

function toggleServices(e: MouseEvent) {
	e.stopPropagation();
	servicesOpen.value = !servicesOpen.value;
}

onClickOutside(menuRef, () => {
	isActive.value = false;
	servicesOpen.value = false;
});
</script>
<template>
  <div ref="menu" @click="isActive = !isActive">
    <svg
      class="ham hamRotate ham"
      :class="isActive ? 'active' : ''"
      viewBox="0 0 100 100"
      width="60"
    >
      <path
        class="line top"
        d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
      />
      <path class="line middle" d="m 30,50 h 40" />
      <path
        class="line bottom"
        d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
      />
    </svg>
    <div v-if="isActive" class="dropdown">
      <div class="dropdown__content">
        <UILink :to="{ path: '/', hash: '#intro' }">Главная</UILink>
        <div class="mobile-services">
          <button class="mobile-services-btn" @click="toggleServices">
            <span>Услуги</span>
            <span class="mobile-services-arrow" :class="{ open: servicesOpen }">></span>
          </button>
          <Transition name="slide">
            <div v-if="servicesOpen" class="mobile-services-links">
              <UILink to="/services/soprovozhdenie-rastamozhki-avto">Сопровождение по растаможке</UILink>
              <UILink to="/services/konsultatsii-tamozhnya-ts">Консультации по таможне ТС</UILink>
              <UILink to="/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts">Оценка ТС и техзаключение</UILink>
              <UILink to="/services/sbkts-i-epts">СБКТС и ЭПТС</UILink>
              <UILink to="/services/uveos-glonass">УВЭОС — ГЛОНАСС</UILink>
              <UILink to="/services/pomoshch-tekhnicheskoe-zaklyuchenie">Техническое заключение</UILink>
            </div>
          </Transition>
        </div>
        <UILink to="/news">Новости</UILink>
        <UILink to="/tamozhennyy_kalkulyator">Таможенный калькулятор</UILink>
        <UILink href="https://customs.gov.ru/recycling-fee">Проверка оплаты утильсбора</UILink>
        <UILink to="/contacts">Контакты</UILink>
        <UILink :to="{ path: '/', hash: '#application' }">Оставить заявку</UILink>
      </div>
    </div>
  </div>
</template>
<style lang="css" scoped>
.ham {
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.hamRotate.active {
  transform: rotate(45deg);
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--warm-beige);
  stroke-width: 4;
  stroke-linecap: round;
}

.ham .top {
  stroke-dasharray: 40 160;
}

.ham .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}

.ham .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}

.ham.active .top {
  stroke-dashoffset: -64px;
}

.ham.active .middle {
  transform: rotate(90deg);
}

.ham.active .bottom {
  stroke-dashoffset: -64px;
}

.dropdown {
  padding: 16px 16px;
  position: absolute;
  bottom: 0;
  width: 240px;
  border: 1px solid var(--warm-beige);
  background-color: var(--dark-forest-green);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  z-index: 10;
  transform: translate(-70%, 100%);
}
.dropdown__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.mobile-services {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  border-left: 1px solid var(--warm-beige);
}

.mobile-services-btn {
  background: none;
  border: none;
  color: var(--warm-beige);
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  font-weight: 700;
  opacity: 0.8;
}

.mobile-services-arrow {
  transition: transform 0.2s ease;
  font-size: 0.8rem;
}

.mobile-services-arrow.open {
  transform: rotate(90deg);
}

.mobile-services-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 8px;
  padding-bottom: 4px;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.2s ease;
  overflow: hidden;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
