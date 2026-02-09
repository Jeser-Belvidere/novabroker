<script setup lang="ts">
const openYandex = () => {
	window.open('https://yandex.ru/maps/-/CHxum8Zx', '_blank');
};

const openVK = () => {
	window.open('https://vk.com/club232237455', '_blank');
};

const openMax = () => {
	window.open('https://vk.com/club232237455', '_blank');
}
</script>

<template>
  <main>
    <div class="container">
      <div class="card-wrapper">
        <div class="header">
          <h1>Наши контакты</h1>
          <p>
            Мы всегда на связи, чтобы ответить на ваши вопросы и предложить
            лучшее решение для Вас!
          </p>
        </div>
        <div class="content">
          <div class="content-block">
            <div class="block-title">Менеджеры по работе с клиентами</div>
            <div class="managers-item bottom-border">
              <div class="managers-item__name">Анна</div>
              <div class="managers-item__contacts">
                <a class="link" href="tel: +79585000286">+7 958 500-02-86</a>
                <a class="link" href="mailto:anna@novabroker.ru">anna@novabroker.ru</a>
              </div>
            </div>
            <div class="managers-item bottom-border">
              <div class="managers-item__name">Елена</div>
              <div class="managers-item__contacts">
                <a class="link" href="tel:+797774095969">+7 977 409-59-69</a>
                <a class="link" href="mailto:diana@novabroker.ru">elenaruban@novabroker.ru</a>
              </div>
            </div>
            <div class="managers-item">
              <div class="managers-item__name">Андрей</div>
              <div class="managers-item__contacts">
                <a class="link" href="tel:+797774095969">+7 958 500-03-45</a>
                <a class="link" href="mailto:diana@novabroker.ru">andrei@novabroker.ru</a>
              </div>
            </div>
          </div>
          <div class="content-block">
            <div class="block-title">Менеджер по просчету автомобилей</div>
            <div class="managers-item">
              <div class="managers-item__name">Михаил</div>
              <div class="managers-item__contacts">
                <a class="link" href="tel:+797774095897">+7 977 409-58-97</a>
                <a class="link" href="mailto:michael@novabroker.ru">michael@novabroker.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- <div class="map-wrapper">
        <h1>Новомосковский таможенный пост</h1>
        <p style="margin-bottom: 16px">
          Данный таможенный пост уполномочен принимать декларации и проводить
          таможенное оформление для участников ВЭД, зарегистрированных в
          следующих административных округах и районах.<br />
        </p>

        <div style="margin-bottom: 22px">
          <h2 style="margin-bottom: 8px">Растаможивание ТС с регистрацией:</h2>
          <p>Москва и Московская область</p>
        </div>

        <div>
          <h2 style="margin-bottom: 8px">
            Утилизационный сбор с регистрацией:
          </h2>
          <div class="list-wrapper">
            <h3>Москва:</h3>
            <ul>
              <li>ЮЗАО (Юго-Западный административный округ)</li>
              <li>ЗАО (Западный административный округ)</li>
              <li>Южный административный округ</li>
            </ul>
            <h3>Московская область:</h3>
            <ul>
              <li>
                Городской округ Видное (включая г. Видное и прилегающие
                территории)
              </li>
              <li>Новомосковский административный округ Москвы (ТиНАО)</li>
            </ul>
          </div>
        </div>

        <CoverageServicesMap />
      </div> -->
      <!--  -->
      <div class="grid-wrapper">
        <div class="items-wrapper">
          <div class="contacts-info__item">
            <UIIcon class="icon" name="map-pin" />
            <div class="item-text">
              <div class="item-text__title">Адрес</div>
              <div class="item-text__description">
                Город Москва, ш. Калужское, км 22-Й, <br>
                дом 10, строение 23, 14 этаж, Офис 1407
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
                <a class="link" href="tel: +79585000286">+7 958 500-02-86</a>
              </div>
            </div>
          </div>
          <div class="contacts-info__item">
            <UIIcon class="icon" name="mail" />
            <div class="item-text">
              <div class="item-text__title">Эл. почта для общих вопросов</div>
              <div class="item-text__description">
                <a class="link" href="mailto:michael@novabroker.ru">
                  info@novabroker.ru</a>
              </div>
            </div>
          </div>
          <div class="contacts-icons">
            <UIIcon name="vk" pointer @click="openVK()" />
            <UIIcon name="yandex-maps" size="lg" pointer @click="openYandex()" />
            <UIIcon name="max" size="lg" pointer @click="openMax()" />
          </div>
        </div>
        <div class="divider" />
        <div class="details-wrapper">
          <div class="title">Реквизиты</div>
          <div class="details-item">
            <div class="details-item__name">Полное название:</div>
            <div class="details-item__description">
              Общество с ограниченой ответственностью "НоваБрокер"
            </div>
          </div>
          <div class="details-item">
            <div class="details-item__name">Краткое название:</div>
            <div class="details-item__description">ООО "НоваБрокер"</div>
          </div>
          <div class="details-item">
            <div class="details-item__name">Английское название:</div>
            <div class="details-item__description">NovaBroker LLC</div>
          </div>
          <div class="details-item">
            <div class="details-item__name">Адрес для корреспонденции:</div>
            <div class="details-item__description">
              108802, Город Москва, вн. тер. г Муниципальный Округ Коммунарка,
              ш. Калужское,<span style="white-space: nowrap"> км 22-Й</span>,
              дом 10, строение 23, 14 этаж, Офис 1407
            </div>
          </div>
          <div class="details-item">
            <div class="details-item__name">ОГРН</div>
            <div class="details-item__description">1247700249356</div>
          </div>
          <div class="details-item">
            <div class="details-item__name">ИНН</div>
            <div class="details-item__description">7751306330</div>
          </div>
          <div class="details-item">
            <div class="details-item__name">КПП</div>
            <div class="details-item__description">775101001</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped>
main {
  margin-top: var(--header-height);
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.divider {
  width: 1px;
  height: 100%;
  background-color: var(--warm-beige);

  @media screen and (max-width: 440px) {
    height: 1px;
    width: 100%;
  }
}

.link {
  text-decoration: none;
  color: var(--light-grey);

  &:hover {
    text-decoration: underline;
  }
}

.bottom-border {
  border-bottom: 1px solid var(--warm-beige);
}

.container {
  margin: 16px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

.card-wrapper {
  padding: 16px 32px;
  border-radius: 8px;
  gap: 8px;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  p {
    font-size: 1.3rem;
    color: var(--light-grey);
    text-align: center;

    @media screen and (max-width: 440px) {
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 4rem;
    color: var(--warm-beige);

    @media screen and (max-width: 440px) {
      font-size: 2rem;
    }
  }
}

.map-wrapper {
  display: flex;
  flex-direction: column;
  color: var(--warm-beige);
  width: 100%;
  text-align: center;
  align-items: center;

  h2 {
    font-size: 1.4rem;
    margin-bottom: 16px;

    @media screen and (max-width: 440px) {
      font-size: 1.5rem;
    }
  }

  .list-wrapper {
    width: fit-content;
    text-align: left;

    ul {
      list-style-type: none;
      list-style-position: inside;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 10px;

      @media screen and (max-width: 440px) {
        font-size: 1rem;
      }
    }

    li {
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: var(--light-grey);

      @media screen and (max-width: 440px) {
        font-size: 1rem;
      }
    }
  }

  h1 {
    font-size: 1.7rem;
    text-align: center;

    @media screen and (max-width: 440px) {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  p {
    font-size: 1.3rem;
    color: var(--light-grey);
    text-align: center;
    text-wrap: pretty;
    max-width: 800px;

    @media screen and (max-width: 440px) {
      font-size: 1rem;
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  color: var(--warm-beige);
}

.content-block {
  display: flex;
  flex-direction: column;
  gap: 10px;

  .block-title {
    font-size: 1.6rem;
    text-align: center;

    @media screen and (max-width: 440px) {
      font-size: 1.2rem;
      width: 100%;
    }
  }

  @media screen and (max-width: 440px) {
    width: 100%;
  }
}

.managers-item {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  padding-bottom: 10px;
  font-size: 1.1rem;
  color: var(--light-grey);

  .managers-item__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .managers-item__contacts {
    color: var(--light-grey);
    min-width: 160px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }

  @media screen and (max-width: 440px) {
    font-size: 1rem;
    width: 100%;
  }
}

.grid-wrapper {
  margin-left: 12px;
  margin-right: 12px;
  padding: 16px 32px;
  border: 1px solid var(--warm-beige);
  border-radius: 8px;
  gap: 8px;
  display: grid;
  grid-template-columns: 1fr 1px 1fr;

  @media screen and (max-width: 440px) {
    display: flex;
    flex-direction: column;
  }
}

.items-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
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

      @media screen and (max-width: 440px) {
        font-size: 1.2rem;
      }
    }

    .item-text__description {
      font-size: 1.1rem;
      color: var(--light-grey);
      text-wrap: balance;

      @media screen and (max-width: 440px) {
        font-size: 1rem;
      }
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

.details-wrapper {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 16px;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--warm-beige);
  }

  .details-item {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .details-item__name {
      font-size: 1.3rem;
      color: var(--warm-beige);

      @media screen and (max-width: 440px) {
        font-size: 1.2rem;
      }
    }

    .details-item__description {
      font-size: 1.1rem;
      color: var(--light-grey);
      text-wrap: balance;

      @media screen and (max-width: 440px) {
        font-size: 1rem;
      }
    }
  }
}
</style>
