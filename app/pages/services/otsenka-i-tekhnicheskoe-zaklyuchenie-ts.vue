<script setup lang="ts">
useHead({
	title: 'Оценка ТС и техническое заключение — НОВАБРОКЕР',
	meta: [
		{
			name: 'keywords',
			content:
        'оценка транспортного средства, техническое заключение на авто, оформление документов для оценки ТС, экспертиза автомобиля, независимая оценка авто Москва',
		},
	],
});
useSeoMeta({
	title:
    'Услуги оформления документов для оценки ТС и техническому заключению — НОВАБРОКЕР',
	ogTitle: 'НОВАБРОКЕР. Оценка ТС и техническое заключение',
	description:
    'Оформление документов для оценки ТС и технического заключения. Подготовка необходимого пакета документов для растаможки, постановки на учет, продажи и страхования автомобиля.',
	ogDescription:
    'НОВАБРОКЕР. Услуги оформления документов для оценки транспортного средства и получения технического заключения.',
	ogUrl:
    'https://xn--80acboyohdrd.xn--p1ai/services/otsenka-i-tekhnicheskoe-zaklyuchenie-ts',
});
</script>

<template>
  <main>
    <section class="breadcrumbs">
      <nuxt-link to="/">{{ "< Главная" }}</nuxt-link>
      <span class="separator">/</span>
      <span class="current">Оценка ТС и техническое заключение</span>
    </section>

    <section class="hero">
      <h1>
        Услуги оформления документов для оценки ТС и технического заключения
      </h1>
      <p class="hero-subtitle">
        Оформление документов для оценки транспортного средства и получения
        технического заключения — важный этап при ввозе автомобиля, постановке
        на учет, продаже, страховании или прохождении таможенного оформления.
        Компания НоваБрокер оказывает профессиональные услуги по подготовке и
        сопровождению оформления документов для оценки ТС и технического
        заключения в соответствии с действующими требованиями законодательства.
      </p>
      <p class="hero-subtitle">
        Мы помогаем быстро подготовить необходимый пакет документов, проверить
        корректность данных и избежать ошибок, которые могут привести к отказу в
        оформлении или задержкам при регистрации автомобиля.
      </p>
    </section>

    <section class="content">
      <div class="text-block">
        <h2>Что входит в услугу</h2>
        <ul>
          <li>Подготовка документов для оценки транспортного средства</li>
          <li>Помощь в получении технического заключения</li>
          <li>Проверка VIN-номера и характеристик автомобиля</li>
          <li>Сбор и оформление сопроводительной документации</li>
          <li>Консультации по требованиям к оформлению ТС</li>
          <li>Подготовка документов для таможенного оформления автомобиля</li>
          <li>Проверка соответствия автомобиля техническим нормам</li>
          <li>Сопровождение на всех этапах оформления</li>
        </ul>
      </div>

      <div class="text-block">
        <h2>Для чего требуется оценка ТС и техническое заключение</h2>
        <p>
          Документы для оценки транспортного средства и техническое заключение
          могут потребоваться в различных ситуациях:
        </p>
        <ul>
          <li>При растаможке автомобиля</li>
          <li>Для постановки автомобиля на учет</li>
          <li>При оформлении ЭПТС и СБКТС</li>
          <li>Для подтверждения технического состояния автомобиля</li>
          <li>При расчете таможенной стоимости</li>
          <li>Для сделок купли-продажи и страхования</li>
          <li>При внесении изменений в конструкцию ТС</li>
        </ul>
        <p>
          Правильно оформленные документы позволяют ускорить прохождение
          процедур и снизить риск дополнительных проверок со стороны
          контролирующих органов.
        </p>
        <p>
          Наши специалисты работают с легковыми автомобилями, электромобилями,
          коммерческим транспортом и техникой, ввезенной из Китая, Кореи,
          Японии, Европы, США и других стран.
        </p>
      </div>

      <div class="text-block">
        <h2>Почему выбирают НоваБрокер</h2>
        <p>
          Компания НоваБрокер помогает клиентам оперативно оформить документы
          для оценки ТС и технического заключения без лишней бюрократии и
          сложностей. Мы внимательно проверяем все данные и сопровождаем клиента
          на каждом этапе оформления.
        </p>
        <ul>
          <li>Оперативная подготовка документов</li>
          <li>Соответствие актуальным требованиям законодательства</li>
          <li>Опыт работы с импортными автомобилями</li>
          <li>Полное сопровождение процесса</li>
          <li>Консультации по всем вопросам оформления</li>
          <li>Минимизация ошибок и задержек</li>
        </ul>
      </div>

      <div class="cta">
        <h2>Обратитесь в НоваБрокер</h2>
        <p>
          Получите профессиональную помощь в оформлении документов для оценки
          транспортного средства и технического заключения. Мы поможем быстро
          подготовить все необходимые документы и пройти процедуры без лишних
          затрат времени и нервов.
        </p>
        <a class="phone" href="tel:+74957783050">+7 495 778-30-50</a>
      </div>
    </section>
  </main>
</template>

<style lang="css" scoped>
main {
  width: 100%;
  min-height: 100vh;
  padding: 32px;
  background-color: var(--light-grey);
  margin-top: var(--header-height);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    padding: 16px;
  }
}

.breadcrumbs {
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  font-size: 1rem;
  color: var(--medium-taupe);

  a {
    text-decoration: none;
    color: var(--dark-forest-green);

    &:hover {
      text-decoration: underline;
    }
  }

  .separator {
    color: var(--medium-taupe);
  }

  .current {
    color: var(--medium-taupe);
  }
}

.hero {
  max-width: 1200px;
  width: 100%;
  text-align: center;
  margin-bottom: 48px;

  h1 {
    font-size: 3.5rem;
    color: var(--dark-forest-green);
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .hero-subtitle {
    font-size: 1.3rem;
    color: var(--medium-taupe);

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
}

.content {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.text-block {
  background-color: var(--white);
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
  h2 {
    font-size: 2rem;
    color: var(--dark-forest-green);
    margin-bottom: 16px;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--warm-beige);
      margin-top: 4px;
      border-radius: 2px;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font-size: 1.5rem;
    color: var(--dark-forest-green);
    margin-bottom: 12px;
    margin-top: 24px;

    @media screen and (max-width: 768px) {
      font-size: 1.25rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--black);
    line-height: 1.6;
    margin-bottom: 16px;
    text-indent: 2em;
    text-align: left;
  }

  ul {
    list-style-type: disc;
    padding-left: 24px;
    width: fit-content;
    margin: 0 auto;
    text-align: left;

    li {
      font-size: 1.1rem;
      color: var(--black);
      line-height: 1.8;
    }
  }
}

.cta {
  background-color: var(--white);
  border-radius: 10px;
  padding: 40px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  h2 {
    font-size: 2rem;
    color: var(--dark-forest-green);
    margin-bottom: 12px;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    color: var(--medium-taupe);
    margin-bottom: 16px;
  }

  .phone {
    font-size: 1.8rem;
    color: var(--warm-beige);
    text-decoration: none;
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }
}
</style>
