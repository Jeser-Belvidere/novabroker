<script setup lang="ts">
useHead({
	title: 'Помощь в оформлении технического заключения — НОВАБРОКЕР',
	meta: [
		{
			name: 'keywords',
			content:
        'техническое заключение на автомобиль, помощь в оформлении техзаключения, экспертиза ТС, диагностика автомобиля для таможни, техническая экспертиза транспортного средства Москва',
		},
	],
});
useSeoMeta({
	title: 'Помощь в оформлении технического заключения — НОВАБРОКЕР',
	ogTitle: 'НОВАБРОКЕР. Помощь в оформлении технического заключения',
	description:
    'Помощь в оформлении технического заключения. Подготовка документов для таможенного оформления, получения СБКТС и ЭПТС, постановки на учет и внесения изменений в конструкцию ТС.',
	ogDescription:
    'НОВАБРОКЕР. Профессиональная помощь в оформлении технического заключения для автомобилей.',
	ogUrl:
    'https://xn--80acboyohdrd.xn--p1ai/services/pomoshch-tekhnicheskoe-zaklyuchenie',
});
</script>

<template>
  <main>
    <section class="breadcrumbs">
      <nuxt-link to="/">{{ "< Главная" }}</nuxt-link>
      <span class="separator">/</span>
      <span class="current">Помощь в оформлении технического заключения</span>
    </section>

    <section class="hero">
      <h1>Помощь в оформлении технического заключения</h1>
      <p class="hero-subtitle">
        Техническое заключение — один из важных документов при оформлении
        транспортного средства, прохождении таможенных процедур, внесении
        изменений в конструкцию автомобиля и постановке ТС на учет. Ошибки в
        документах или несоответствие требованиям могут привести к отказу в
        оформлении и дополнительным расходам. Компания НоваБрокер оказывает
        профессиональную помощь в оформлении технического заключения и
        сопровождает клиентов на всех этапах подготовки документов.
      </p>
      <p class="hero-subtitle">
        Мы помогаем физическим и юридическим лицам быстро оформить техническое
        заключение для автомобилей, ввезенных из Китая, Кореи, Японии, Европы,
        США и других стран.
      </p>
    </section>

    <section class="content">
      <div class="text-block">
        <h2>Что такое техническое заключение</h2>
        <p>
          Техническое заключение — это документ, подтверждающий соответствие
          транспортного средства установленным техническим требованиям и нормам
          безопасности. Правильно оформленное техническое заключение позволяет ускорить
          процесс оформления автомобиля и избежать дополнительных проверок со
          стороны контролирующих органов. Специалисты НоваБрокер помогут заранее определить возможные сложности
          и подготовить документы без ошибок и задержек. Документ может потребоваться при:
        </p>
        <ul>
          <li>Таможенном оформлении автомобиля</li>
          <li>Получении СБКТС и ЭПТС</li>
          <li>Постановке транспортного средства на учет</li>
          <li>Внесении изменений в конструкцию автомобиля</li>
          <li>Оформлении переоборудования ТС</li>
          <li>Проверке технических характеристик автомобиля</li>
        </ul>
      </div>

      <div class="text-block">
        <h2>Что входит в услугу</h2>
        <ul>
          <li>Консультации по оформлению технического заключения</li>
          <li>Проверка документов и характеристик автомобиля</li>
          <li>Подготовка полного пакета документов</li>
          <li>Помощь во взаимодействии с лабораторией</li>
          <li>Проверка соответствия требованиям законодательства</li>
          <li>Сопровождение на всех этапах оформления</li>
          <li>Консультации по срокам и стоимости оформления</li>
        </ul>
      </div>

      <div class="text-block">
        <h2>Почему выбирают НоваБрокер</h2>
        <ul>
          <li>Опыт работы с импортными автомобилями любых категорий</li>
          <li>Актуальная информация по требованиям законодательства</li>
          <li>Помощь в подготовке документов «под ключ»</li>
          <li>Снижение риска отказов и дополнительных расходов</li>
          <li>Полное сопровождение клиента</li>
          <li>Оперативное оформление документов</li>
        </ul>
      </div>

      <div class="cta">
        <h2>Обратитесь в НоваБрокер</h2>
        <p>
          Получите помощь в оформлении технического заключения и
          профессиональное сопровождение при подготовке документов для вашего
          автомобиля.
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
      content: '';
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
