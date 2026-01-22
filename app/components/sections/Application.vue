<script setup lang="ts">
import type { Map } from 'maplibre-gl';
import { ref } from 'vue';

const currentTab = ref(0);
const isLoading = ref(false);
const isModalVisible = ref(false);

const name = ref('');
const phone = ref('');
const mail = ref('');
const isAgreed = ref(false);

const { isMobile } = useDevice();
let mapLibre = null;
let map: null | Map = null;

if (!isMobile) {
	mapLibre = await import('maplibre-gl');
	await import('maplibre-gl/dist/maplibre-gl.css');
}
const nuxtApp = useNuxtApp();
const INIT_BOUNDS: [number, number] = [37.4607, 55.596511];
const INIT_ZOOM: number = 10;
const INIT_PITCH: number = 45;
const MARKER_BOUNDS: [number, number] = [37.464374, 55.596406];

const renderMap = () => {
	try {
		if (mapLibre) {
			map = new mapLibre.Map({
				container: 'map',
				style:
          'https://api.maptiler.com/maps/0198bf23-3d83-729f-99dc-d37e37873f52/style.json?key=g3yRB9He8W6xRCD6CgML',
				center: INIT_BOUNDS,
				zoom: INIT_ZOOM,
				pitch: INIT_PITCH,
			});

			const marker = new mapLibre.Marker({ color: '#dabb8d' });
			marker.setLngLat(MARKER_BOUNDS);
			marker.addTo(map);
		}
	} catch (error) {
		console.log(error);
	}
};
//TODO: поправить повторный рендер при транзишенах
nuxtApp.hook('page:finish', () => {
	renderMap();
});

nuxtApp.hook('page:transition:finish', () => {
	if (!map) {
		renderMap();
	}
});

const openYandex = () => {
	window.open('https://yandex.ru/maps/-/CHxum8Zx', '_blank');
};

const openVK = () => {
	window.open('https://vk.com/club232237455', '_blank');
};

async function handleFormSubmit() {
	try {
		isLoading.value = true;
		await $fetch('/api/mail', {
			method: 'POST',
			body: {
				name: name.value,
				phone: phone.value,
				mail: mail.value,
			},
		});
		name.value = '';
		phone.value = '';
		mail.value = '';
		isModalVisible.value = true;
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(() => {
			isLoading.value = false;
		}, 1000);
	}
}
</script>
<template>
  <section id="application">
    <div class="contacts-container">
      <div class="contacts-head">
        <div class="contacts-head__title">Связаться с нами</div>
        <div class="contacts-head__description">
          Свяжитесь с нами любым удобным для вас способом - <br>
          мы ответим быстро
        </div>
      </div>
      <div class="carousel-wrapper">
        <Carousel v-model="currentTab" :mouse-drag="false" :touch-drag="false">
          <Slide class="carousel__slide">
            <!-- ITEMS -->
            <div class="items-wrapper">
              <div class="contacts-info__item">
                <UIIcon class="icon" name="map-pin" />
                <div class="item-text">
                  <div class="item-text__title">Адрес</div>
                  <div class="item-text__description">
                    Город Москва,ш. Калужское, км 22-Й, <br>
                    дом 10, строение 23
                  </div>
                </div>
              </div>

              <div class="contacts-info__item">
                <UIIcon class="icon" name="clock" />
                <div class="item-text">
                  <div class="item-text__title">График работы</div>
                  <div class="item-text__description">
                    с 8:00 по 20:00 <br>
                    Без выходных
                  </div>
                </div>
              </div>

              <div class="contacts-info__item">
                <UIIcon class="icon" name="phone" />
                <div class="item-text">
                  <div class="item-text__title">Телефон</div>
                  <div class="item-text__description">
                    <a href="tel:+79585000286">+7 958 500-02-86</a>
                  </div>
                </div>
              </div>
              <div class="contacts-icons">
                <UIIcon name="vk" pointer @click="openVK()" />
                <UIIcon name="yandex-maps" size="lg" pointer @click="openYandex()" />
              </div>
              <div>
                <button @click.prevent="currentTab = 1">Оставить заявку</button>
              </div>
            </div>
          </Slide>
          <!-- FORM -->
          <Slide class="carousel__slide">
            <form @submit.prevent="handleFormSubmit()">
              <div class="form-wrapper">
                <div class="form-title">Оставьте заявку</div>
                <div class="form-content">
                  <input v-model="name" :disabled="isLoading" required name="name" type="text" placeholder="Имя">
                  <input v-model="phone" :disabled="isLoading" required name="phone" type="tel" placeholder="Телефон">
                  <input v-model="mail" :disabled="isLoading" required name="mail" type="email" placeholder="Почта">
                </div>
                <div class="form-checkbox">
                  <input id="scales" v-model="isAgreed" class="form-checkbox__input" type="checkbox" name="scales">
                  <label class="form-checkbox__label" for="scales">Согласен на
                    <UILink to="/personaldata">обработку персональных данных</UILink>
                    и с
                    <UILink to="/privacy">политикой обработки персональных данных</UILink>
                  </label>
                </div>
                <div class="form-actions">
                  <button @click.prevent="currentTab = 0">Назад</button>
                  <button :disabled="!isAgreed || !mail || !name || !phone" type="submit">
                    <div>
                      <div v-if="isLoading" style="
                          width: 100%;
                          display: flex;
                          justify-content: center;
                          align-items: center;
                        ">
                        <UISpinner />
                      </div>

                      <div v-else>Отправить</div>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </Slide>
        </Carousel>
      </div>
    </div>
    <div id="map" class="map" :class="{ 'map-mobile': isMobile }" />
    <dialog v-if="isModalVisible" class="dialog">
      <div class="dialog-wrapper">
        <div class="dialog-title">Спасибо за заявку</div>
        <div class="dialog-description">
          Мы свяжемся с вами в ближайшее время
        </div>
        <button @click.prevent="isModalVisible = false">Закрыть</button>
      </div>
    </dialog>
  </section>
</template>
<style lang="css" scoped>
section {
  position: relative;
  height: 100%;
}

.contacts-container {
  filter: drop-shadow(0px 0px 50px rgb(5, 51, 38));

  position: absolute;
  border-radius: 12px;
  top: 32px;
  margin-left: 32px;
  margin-right: 32px;

  display: flex;
  flex-direction: column;
  max-width: 600px;
  gap: 50px;
  z-index: 2;

  @media screen and (max-width: 440px) {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
  }
}

.contacts-head {
  background-color: rgba(5, 51, 38, 0.652);
  box-shadow: 0px 0px 50px rgb(5, 51, 38);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--warm-beige);
  margin-top: 16px;
  text-align: center;

  @media screen and (max-width: 768px) {
    background-color: rgba(255, 255, 255, 0);
    box-shadow: none;
  }

  .contacts-head__title {
    font-size: 4rem;
    color: var(--warm-beige);

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .contacts-head__description {
    font-size: 1.5rem;
    color: var(--light-grey);

    @media screen and (max-width: 768px) {
      font-size: 1rem;
      margin-left: 5%;
      margin-right: 5%;
      width: 90%;
    }
  }
}

.carousel-wrapper {
  background-color: rgb(5, 51, 38);
  filter: drop-shadow(0px 0px 50px rgb(5, 51, 38));
  border: 1px solid var(--warm-beige);
  border-radius: 12px;
  padding: 32px 32px;
  max-width: 500px;

  @media screen and (max-width: 868px) {
    max-width: 450px;
  }

  @media screen and (max-width: 440px) {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    padding: 16px 16px;
    background-color: rgba(5, 51, 38, 0.6);
  }
}

.items-wrapper {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contacts-info__item {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 32px;

  .item-text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .item-text__title {
      font-size: 1.3rem;
      color: var(--warm-beige);
    }

    .item-text__description {
      font-size: 1.1rem;
      color: var(--light-grey);
    }
  }

  @media screen and (max-width: 440px) {
    display: grid;
    grid-template-columns: 40px 1fr;
  }
}

.contacts-icons {
  display: flex;
  flex-direction: row;
  gap: 64px;
  justify-content: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 32px;

  .form-title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: var(--warm-beige);
  }

  .form-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .form-actions {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

.form-checkbox {
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: center;
  color: var(--light-grey);

  .form-checkbox__input {
    background-color: aquamarine;
    accent-color: var(--warm-beige);
    height: 20px;
    border: solid 2px var(--warm-beige);
    color: var(--warm-beige);
    border: 1px solid #ffffff;
  }

  .form-checkbox__label {
    color: var(--light-grey);
    font-size: 0.8rem;
  }
}

.map {
  min-height: 800px;
  z-index: 1;
}

.map-mobile {
  background-image: url("~/assets/images/map-mobile.webp");
  background-size: cover;
  filter: blur(2px);
}

button {
  font-weight: 400px;
  height: 40px;
  width: 100%;
  /* min-width: 140px; */
  font-size: 1.5rem;
  color: var(--dark-forest-green);
  background-color: var(--warm-beige);
  border: solid 1px var(--warm-beige);
  border-radius: 8px;
  padding: 0px 20px;
  filter: drop-shadow(0px 2px 8px rgba(5, 51, 38, 0.15));
  z-index: 5;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: var(--dark-forest-green);
    color: var(--warm-beige);
  }

  &:disabled {
    font-weight: 400px;
    background-color: var(--medium-taupe);
    color: var(--dark-forest-green);
    cursor: not-allowed;
  }

  @media screen and (max-width: 440px) {
    font-size: 1.1rem;
    padding: 0px 4px;
    /* min-width: 100px; */
  }
}

input {
  width: 100%;
  height: 40px;
  font-size: 1.5rem;
  color: var(--dark-forest-green);
  background-color: var(--warm-beige);
  border: solid 1px var(--warm-beige);
  border-radius: 8px;
  padding: 10px;
  filter: drop-shadow(0px 2px 8px rgba(5, 51, 38, 0.15));
  z-index: 5;
}

a {
  color: var(--light-grey);
  text-decoration: none;
}

.carousel__slide {
  display: block;
}

.dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 51, 38, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  .dialog-wrapper {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: var(--dark-green);
    border-radius: 12px;
    padding: 32px;
    color: var(--warm-beige);
    border: solid 2px var(--warm-beige);

    @media screen and (max-width: 440px) {
      margin-left: 10%;
      margin-right: 10%;
      width: 80%;
    }
  }

  .dialog-title {
    font-size: 2rem;
    text-align: center;
  }

  .dialog-description {
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>
