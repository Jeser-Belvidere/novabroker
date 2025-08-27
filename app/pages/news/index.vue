<script setup lang="ts">
useHead({
  title: "NOVABROKER - news",
  meta: [
    { name: "title", content: "NOVABROKER - новости ВЭД" },
    {
      name: "keywords",
      content:
        "ВЭД, новости, Таможенный брокер, Сертификация, Новаброкер, Novabroker",
    },
  ],
});
useSeoMeta({
  title: "NOVABROKER - новости ВЭД",
  ogTitle: "НОВАБРОКЕР. Новости ВЭД консалтинга",
  description: "НОВАБРОКЕР. Новости ВЭД консалтинга",
  ogDescription:
    "НОВАБРОКЕР. Оформление, сертификация, законодательство - все новости ВЭД консалтинга",
});

const feed = getNewsFeed();

const lastNews = feed[feed.length - 1];
const restNews = feed.slice(0, feed.length - 1);
</script>

<template>
  <section>
    <div class="breadcrumbs margin-bottom">
      <nuxt-link class="breadcrumbs" to="/">{{ "< Назад" }}</nuxt-link>
    </div>
    <div class="title margin-bottom">
      <div class="title-head">Новости и обновления</div>
      <div class="title-description">
        Оформление, сертификация, законодательство - все по делу
      </div>
    </div>
    <div>
      <div class="first-card margin-bottom">
        <nuxt-link class="first-card" :to="`/news/${lastNews?.listIndex}`">
          <div
            class="card-image"
            :style="`background-image: url(${lastNews?.imgSrc})`"
          ></div>
          <div class="card-info">
            <div class="card-title">{{ lastNews?.title }}</div>
            <div class="card-date">{{ lastNews?.date }}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="grid">
      <div
        v-for="(news, index) in restNews"
        :key="index"
        :class="`card card-${index + 1}`"
      >
        <nuxt-link class="card" :to="`/news/${news.listIndex}`">
          <div
            class="card-image"
            :style="`background-image: url(${news.imgSrc})`"
          ></div>
          <div class="card-info">
            <div class="card-title">{{ news.title }}</div>
            <div class="card-date">{{ news.date }}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  min-height: 100vh;
  background-color: var(--light-grey);
  padding: 32px 32px;
}

.breadcrumbs {
  text-decoration: none;
  font-size: 1.5rem;
  color: var(--black);
  cursor: pointer;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  color: var(--black);
  text-align: center;
  @media screen and (max-width: 868px) {
    align-items: center;
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
}

.grid {
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-around;
}

.first-card {
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 16px;
  width: 100%;
  height: 400px;
  cursor: pointer;
  text-decoration: none;
  .card-image {
    border-radius: inherit;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.7);
  }
  .card-info {
    position: relative;
    display: flex;
    flex-direction: column;
    .card-title {
      font-size: 2rem;
      color: var(--black);
      margin-bottom: 5px;
      @media screen and (max-width: 440px) {
        font-size: 1.5rem;
        color: var(--white);
      }
    }
    .card-date {
      font-size: 0.9rem;
      color: var(--black);
      @media screen and (max-width: 440px) {
        color: var(--white);
      }
    }
    @media screen and (max-width: 440px) {
      position: absolute;
      bottom: 32px;
      left: 32px;
    }
  }
}

.card {
  display: flex;
  position: relative;
  flex-direction: column;
  border-radius: 16px;
  width: 600px;
  height: 400px;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 1300px) {
    width: 350px;
    height: 250px;
  }
  .card-image {
    border-radius: inherit;
    display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    filter: brightness(0.4);
  }
  .card-info {
    position: relative;
    display: flex;
    flex-direction: column;
    .card-title {
      font-size: 2rem;
      color: var(--black);
      margin-bottom: 5px;
      @media screen and (max-width: 440px) {
        font-size: 1.5rem;
        color: var(--white);
      }
    }
    .card-date {
      font-size: 0.9rem;
      color: var(--black);
      @media screen and (max-width: 440px) {
        color: var(--white);
      }
    }
    @media screen and (max-width: 440px) {
      position: absolute;
      bottom: 32px;
      left: 32px;
    }
  }
}

.margin-bottom {
  margin-bottom: 24px;
}
</style>
