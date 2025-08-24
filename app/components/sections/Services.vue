<script lang="ts" setup>
const services: { icon: TIconNames; title: string; description: string }[] = [
  {
    icon: "book-open",
    title: "Консультации по таможенному оформлению ТС",
    description: "Работаем с ТС из любой страны",
  },
  {
    icon: "badge-check",
    title: "Сопровождение по растаможке автомобилей",
    description:
      "Пошлины, проверки, договоры - все берем на себя, вам не нужно беспокоиться",
  },
  {
    icon: "ruble",
    title:
      "Услуги по оформлению документов по оценке транспортного средства и техническому заключению",
    description:
      "Определите реальную стоимость авто на рынке и защититесь от переплат",
  },
  {
    icon: "card-sim",
    title: "Консультированию по оформления СБКТС и ЭПТС",
    description: "Быстро. Надежно. С гарантией.",
  },
  {
    icon: "satellite",
    title: "Консультации по установке УВЭОС - ГЛОНАСС",
    description:
      "Ваше надежное плечо в экстренных случаях. Будьте спокойны за местоположение вашего автомобиля",
  },
  {
    icon: "car-gear",
    title: "Помощь в оформлении технического заключения",
    description: "Будьте уверены в технических характеристиках вашего ТС",
  },
];

const carouselConfig = {
  gap: 30,
  itemsToShow: 1,
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
          <div class="card carousel__item">
            <div class="card-image">
              <UIIcon :name="service.icon" />
            </div>
            <div class="card-title">{{ service.title }}</div>
            <div class="card-description">{{ service.description }}</div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
    <div v-if="$device.isDesktop" class="cards-desktop">
      <div v-for="service in services" :key="service.title" class="card">
        <UIIcon :name="service.icon" />
        <div class="card-title">{{ service.title }}</div>
        <div class="card-description">{{ service.description }}</div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  height: 100%;
  background-color: var(--light-grey);
  padding: 48px 32px;
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
  transition: all 0.4s ease-in-out;

  .card-title {
    font-size: 1.25rem;
    font-weight: 800;
    text-align: center;
    color: var(--dark-forest-green);
  }

  .card-description {
    margin-top: 12px;
    text-align: center;
    color: var(--medium-taupe);
  }
}

.card:hover {
  box-shadow: 0px 10px 10px var(--warm-beige);
}
</style>
