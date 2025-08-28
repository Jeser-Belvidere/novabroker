<script setup lang="ts">
import { ref } from "vue";

const isAgreed = ref<boolean>(
  browserStorage.get<boolean>("agreement") ?? false
);

const handleAgree = () => {
  isAgreed.value = true;
  browserStorage.set("agreement", true);
};

const handleDisagree = () => {
  window.location.href = "https://yandex.ru/"
  
};
</script>

<template>
  <ClientOnly>
    <Teleport to="#teleports">
      <div v-if="!isAgreed" id="agreement">
        <div class="agreement__text">
          Пользуясь сайтом, вы соглашаетесь с использованием cookies и
          <UILink type="secondary" to="/privacy">политикой конфиденциальности</UILink>
        </div>
        <div class="agreement__action">
          <UIButton type="secondary" @click="handleAgree()">Хорошо</UIButton>
          <UIButton type="outline" @click="handleDisagree()">Не согласен</UIButton>
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<style lang="css" scoped>
.agreement__text {
  font-size: 1rem;
  letter-spacing: 1.5px;
  text-align: center;
}

.agreement__action {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 16px;
}

#agreement {
  padding: 10px;
  border: 1px solid var(--warm-beige);
  border-radius: 5px;
  width: 300px;
  max-height: 200px;
  background-color: var(--warm-beige);
  position: fixed;
  bottom: 0;
  left: 50%;
  z-index: 100;
  display: none;
  transform: translate(-50%, -50%);
}

.show {
  display: block !important;
}
</style>
