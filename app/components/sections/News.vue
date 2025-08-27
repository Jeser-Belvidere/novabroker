<script setup lang="ts">
const feed = getNewsFeed();

const lastThreeNews = feed.slice(feed.length - 3, feed.length).reverse();
</script>

<template>
  <section id="news">
    <div class="title">
      <p class="title-head">Новости и обновления</p>
      <p class="title-description">
        Оформление, сертификация, законодательство - все по делу
      </p>
    </div>
    <div class="grid">
      <div
        v-for="(news, index) in lastThreeNews"
        :key="index"
        :class="`card card-${index + 1}`"
      >
        <nuxt-link class="first-card" :to="`/news/${news.listIndex}`">
          <div class="card-image">
            <img :src="news.imgSrc" loading="lazy" :alt="news.title" />
          </div>
          <div class="card-info">
            <div class="card-title">{{ news.title }}</div>
            <div class="card-date">{{ news.date }}</div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <div class="all-news-button">
      <UILink to="/news">Читать больше новостей →</UILink>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  height: 100%;
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

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 12px;
  margin-top: 40px;
  margin-bottom: 40px;
  @media screen and (max-width: 440px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
  }
}

.card {
  position: relative;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  .card-image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: brightness(0.7);
      border-radius: 16px;
    }
  }
  .card-info {
    position: absolute;
    bottom: 32px;
    left: 32px;
    .card-title {
      font-size: 2rem;
      color: var(--white);
      margin-bottom: 5px;
      @media screen and (max-width: 440px) {
        font-size: 1.5rem;
      }
    }
    .card-date {
      font-size: 0.9rem;
      color: var(--medium-taupe);
    }
  }
}

.all-news-button {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--black);
}

.card-1 {
  grid-area: 1 / 1 / 3 / 3;
  @media screen and (max-width: 440px) {
    grid-area: auto;
  }
}

.card-2 {
  grid-area: 1 / 3 / 2 / 4;
  @media screen and (max-width: 440px) {
    grid-area: auto;
  }
}

.card-3 {
  grid-area: 2 / 3 / 3 / 4;
  @media screen and (max-width: 440px) {
    grid-area: auto;
  }
}
</style>
