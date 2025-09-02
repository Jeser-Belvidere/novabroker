<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";
const isActive = ref(false);
const menuRef = useTemplateRef("menu");

onClickOutside(menuRef, () => {
  isActive.value = false;
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
        <UILink :to="{ path: '/', hash: '#services' }">Услуги</UILink>
        <UILink :to="{ path: '/', hash: '#advantages' }">Преимущества</UILink>
        <UILink :to="{ path: '/', hash: '#stages' }">Этапы</UILink>
        <UILink :to="{ path: '/', hash: '#reviews' }">Отзывы</UILink>
        <UILink :to="{ path: '/', hash: '#news' }">Новости</UILink>
        <UILink :to="{ path: '/', hash: '#application' }"
          >Оставить заявку</UILink
        >
        <UILink to="/contacts" type="default">Контакты</UILink>
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
  padding: 16px 32px;
  position: absolute;
  bottom: 0;
  width: 130px;
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
</style>
