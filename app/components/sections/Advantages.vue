<script setup lang="ts">
const advantagesFirstGrid: {
  icon: TIconNames;
  title: string;
  description: string;
}[] = [
	{
		icon: 'person-check',
		title: 'Индивидуальный подход',
		description:
        'Персональный менеджер сопровождает сделку от заявки до результата',
	},
	{
		icon: 'auto-towing',
		title: 'Полный сервис под ключ',
		description: 'Берём на себя всё: документы, оформление, доставка',
	},
	{
		icon: 'fust-track',
		title: 'Проверенная логистика',
		description: 'Надёжная транспортировка по Москве и МО',
	},
];

const advantageSecondGrid: {
  icon: TIconNames;
  title: string;
  description: string;
}[] = [
	{
		icon: 'experiment',
		title: 'Организация прохождения испытательной лаборатории',
		description:
        'Всё в одном месте — не нужно искать и ждать сторонние сервисы',
	},
	{
		icon: 'balance',
		title: 'Прозрачность и честность',
		description: '100% результат без скрытых платежей',
	},
	{
		icon: 'inventory',
		title: 'Прямые контракты',
		description: 'Работаем без посредников. Экономим бюджет и время',
	},
];

const carouselConfig = {
	gap: 30,
	itemsToShow: 1,
};
</script>

<template>
  <section id="advantages">
    <div class="title">
      <p class="title-head">Наши преимущества</p>
      <p class="title-description">
        6 причин, по которым с нами удобно, быстро и безопасно
      </p>
    </div>
    <div v-if="$device.isMobile" class="cards-mobile">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(advantage, index) in [
          ...advantagesFirstGrid,
          ...advantageSecondGrid,
        ]" :key="index" class="carousel__slide">
          <div class="card carousel__item">
            <div class="card-image">
              <UIIcon :name="advantage.icon" />
            </div>
            <div class="card-title">{{ advantage.title }}</div>
            <div class="card-description">{{ advantage.description }}</div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div v-if="$device.isDesktopOrTablet" class="cards-desktop first">
      <div v-for="(advantage, index) in advantagesFirstGrid" :key="index" class="card">
        <div class="card-image">
          <UIIcon :name="advantage.icon" />
        </div>
        <div class="card-title">{{ advantage.title }}</div>
        <div class="card-description">{{ advantage.description }}</div>
      </div>
    </div>
    <div class="cards-divider" />
    <div class="cards-desktop second">
      <div v-for="(advantage, index) in advantageSecondGrid" :key="index" class="card">
        <UIIcon :name="advantage.icon" />
        <div class="card-title">{{ advantage.title }}</div>
        <div class="card-description">{{ advantage.description }}</div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  height: 100%;
  background-color: var(--dark-forest-green);
  padding: 48px 32px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--warm-beige);
  text-align: center;
}

.title-head {
  font-size: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
}

.title-description {
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
}

.cards-divider {
  border-bottom: 2px dashed var(--warm-beige);

  @media screen and (max-width: 768px) {
    border-bottom: none;
  }
}

.cards-mobile {
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
}

.first {
  margin-top: 121px;
  margin-bottom: 16px;
  grid-template-columns: 27% 32% 41%;
}

.second {
  margin-top: 16px;
  margin-bottom: 22px;
  grid-template-columns: 39% 32% 28%;
}

.cards-desktop {
  display: grid;
  row-gap: 48px;
  column-gap: 16px;

  &>div:nth-child(-n + 2) {
    border-right: 2px dashed var(--warm-beige);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  transition: all 0.4s ease-in-out;

  .card-title {
    font-size: 1.25rem;
    font-weight: 1000;
    text-align: center;
    color: var(--white);
  }

  .card-description {
    font-weight: 200;
    margin-top: 12px;
    text-align: center;
    color: var(--light-grey);
  }
}

.carousel__slide {
  background-color: #0d3b2e;
  border-radius: 10px;
}
</style>
