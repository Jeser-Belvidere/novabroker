<script setup lang="ts">
const slides = [
  {
    name: "Александр Е.",
    date: "30 апреля 2025",
    rank: 5,
    text: `Такого профессионального подхода к своему делу я не встречал давно. 
        Все быстро, четко, оперативно. Огромное спасибо Вячеславу за дополнительные консультации.`,
  },
  {
    name: "Сергей Д.",
    date: "16 февраля 2025",
    rank: 5,
    text: `Помогли с таможенным оформлением партии автомобилей, учли все нюансы законодательства. 
    Экономия времени и денег налицо. Планирую продолжать сотрудничество.`,
  },
  {
    name: "Рамзан А.",
    date: "12 ноября 2024",
    rank: 5,
    text: `С этой компанией ВЭД стал проще. Консультировали по экспорту в Азию, всё разложили по полочкам, помогли с документами. 
    Профессионализм и надёжность на высоте, рекомендую всем!`,
  },
  {
    name: "Мила Р.",
    date: "29 сентября 2024",
    rank: 5,
    text: `Компания помогла с оформлением импортных контрактов и сертификацией.
     Всё сделали оперативно, без лишних сложностей. Понравился индивидуальный подход и знание дела.`,
  },
  {
    name: "Михаил К.",
    date: "20 августа 2024",
    rank: 5,
    text: `Обратился за консультацией по оптимизации ВЭД-процессов. 
    Получил чёткие рекомендации и поддержку на всех этапах. Профессионалы, которые реально знают своё дело.`,
  },
];

const carouselConfig = {
  gap: 30,
  itemsToShow: 1,
};
</script>
<template>
  <section id="rewievs" class="rewievs">
    <div class="title">
      <p class="title-head">Отзывы клиентов</p>
      <p class="title-description">
        Реальные мнения наших клиентов, без прикрас
      </p>
    </div>
    <div class="reviews-container">
      <div class="yandex-container">
        <div
          style="width: 620px; height: 740px; overflow: hidden"
          class="reviews-yandex"
        >
          <iframe
            same-site="none"
            class="lazy-loaded"
            style="
              width: 100%;
              height: 100%;
              border: 2px solid #dabb8d;
              border-radius: 8px;
              box-sizing: border-box;
            "
            data-lazy-type="iframe"
            data-src="https://yandex.ru/maps-reviews-widget/87403020516?comments"
            src="https://yandex.ru/maps-reviews-widget/87403020516?comments"
          />
        </div>
      </div>

      <Carousel v-bind="carouselConfig" style="max-width: 100%">
        <Slide v-for="(slide, index) in slides" :key="index">
          <div class="card carousel__item">
            <div class="card-head">
              <div class="card-head__name">{{ slide.name }}</div>
              <div class="card-head__date">{{ slide.date }}</div>
            </div>
            <div class="card-rank">
              <UIIcon v-for="i in slide.rank" :key="i" name="star" size="sm" />
            </div>
            <div class="card-text">
              {{ slide.text }}
            </div>
          </div>
        </Slide>
        <template #addons>
          <Pagination />
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style lang="css" scoped>
section {
  height: 100%;
  background-color: var(--dark-forest-green);
  padding: 32px 32px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;

  .title-head {
    color: var(--warm-beige);
    font-size: 4rem;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .title-description {
    color: var(--light-grey);
    font-size: 1.5rem;
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}

.reviews-container {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 0 32px;
  @media screen and (max-width: 868px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}

.card {
  background-color: #0d3b2e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  transition: all 0.4s ease-in-out;
  gap: 10px;
  border-radius: 10px;
  @media screen and (max-width: 868px) {
    padding: 16px;
  }

  .card-head {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: self-start;

    .card-head__name {
      font-size: 1.5rem;
      color: var(--white);
    }

    .card-head__date {
      font-size: 0.9rem;
      color: #827667;
    }
  }

  .card-rank {
    width: 100%;
    display: flex;
    flex-direction: row;
    color: var(--warm-beige);
  }

  .card-text {
    color: var(--warm-ligth);
    letter-spacing: 2px;
  }
}

.yandex-container {
  display: flex;
  justify-content: center;
}

.reviews-yandex {
  width: 100%;
  /* margin-top: 48px; */
  transform: scale(0.9);
  @media screen and (max-width: 868px) {
    left: 0;
    transform: scale(0.8);
  }
}
</style>
