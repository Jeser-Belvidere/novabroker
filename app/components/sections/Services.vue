<script lang="ts" setup>
import {
	UIIconsBadgeCheck,
	UIIconsBookOpen,
	UIIconsCardSim,
	UIIconsCarGear,
	UIIconsRubleRounded,
	UIIconsSatteliteFly,
} from '#components';

const services: {
  iconComponent: Component;
  title: string;
  description: string;
  to: string;
}[] = [
	{
		iconComponent: UIIconsBadgeCheck,
		title: 'Сопровождение по растаможке автомобилей',
		description:
      'Пошлины, проверки, договоры - все берем на себя, вам не нужно беспокоиться',
		to: '/services/soprovozhdenie-rastamozhki-avto',
	},
	{
		iconComponent: UIIconsBookOpen,
		title: 'Консультации по таможенному оформлению ТС',
		description: 'Работаем с ТС из любой страны',
		to: '/services/konsultatsii-tamozhnya-ts',
	},

	{
		iconComponent: UIIconsRubleRounded,
		title:
      'Услуги оформления документов для оценки ТС и техническому заключению',
		description:
      'Определите реальную стоимость авто на рынке и защититесь от переплат',
		to: '/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts',
	},
	{
		iconComponent: UIIconsCardSim,
		title: 'Консультирование по оформлению СБКТС и ЭПТС',
		description: 'Быстро. Надежно. С гарантией.',
		to: '/services/sbkts-i-epts',
	},
	{
		iconComponent: UIIconsSatteliteFly,
		title: 'Консультации по установке УВЭОС - ГЛОНАСС',
		description:
      'Ваше надежное плечо в экстренных случаях. Будьте спокойны за местоположение вашего автомобиля',
		to: '/services/uveos-glonass',
	},
	{
		iconComponent: UIIconsCarGear,
		title: 'Помощь в оформлении технического заключения',
		description: 'Будьте уверены в технических характеристиках вашего ТС',
		to: '/services/pomoshch-tekhnicheskoe-zaklyuchenie',
	},
];

const carouselConfig = {
	gap: 30,
	itemsToShow: 1,
	autoPlay: true,
};
</script>

<template>
  <section id="services" class="services">
    <div class="title">
      <p class="title-head">Что мы предлагаем?</p>
      <p class="title-description">
        Консультации по таможенным оформлениям, растаможке, СБКТС, ГЛОНАСС, ЭПТС
        - все под ключ
      </p>
    </div>
    <div v-if="$device.isMobile" class="cards-mobile">
      <Carousel v-bind="carouselConfig">
        <Slide v-for="(service, index) in services" :key="index">
          <nuxt-link :to="service.to" class="card carousel__item">
            <div class="card-image">
              <component :is="service.iconComponent" />
            </div>
            <div class="card-title">{{ service.title }}</div>
            <div class="card-description">{{ service.description }}</div>
          </nuxt-link>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div v-if="$device.isDesktop" class="cards-desktop">
      <nuxt-link
        v-for="service in services"
        :key="service.title"
        :to="service.to"
        class="card"
      >
        <component :is="service.iconComponent" />
        <div class="card-title">{{ service.title }}</div>
        <div class="card-description">{{ service.description }}</div>
      </nuxt-link>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  background-color: var(--light-grey);
  padding: 32px 32px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: var(--black);
  text-align: center;

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
}

.cards-mobile {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.cards-desktop {
  margin-top: 121px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 48px;
  column-gap: 32px;
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 32px;
  border-radius: 10px;
  background-color: var(--white);
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-decoration: none;

  .card-image {
    transition: transform 0.3s ease;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 800;
    text-align: center;
    color: var(--dark-forest-green);
    transition: color 0.3s ease;
  }

  .card-description {
    margin-top: 12px;
    text-align: center;
    color: var(--medium-taupe);
  }
  > * {
    cursor: pointer;
  }
}

@media (hover: hover) {
  .card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 16px 32px rgba(0, 0, 0, 0.1);

    .card-image {
      transform: scale(1.1);
    }

    .card-title {
      color: var(--warm-beige);
    }
  }
}
</style>
