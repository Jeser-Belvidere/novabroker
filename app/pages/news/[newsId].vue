<script setup lang="ts">
import type { INews } from "~/types/news";

const route = useRoute();
const idFromParams: string = route?.params?.newsId as string;

console.log(idFromParams);

if (
  !idFromParams ||
  typeof idFromParams !== "string" ||
  isNaN(parseInt(idFromParams))
) {
  navigateTo("/news");
}

const parsedNumber = parseInt(idFromParams);

const newsFeed = getNewsFeed();

const currentNews: INews | undefined = newsFeed[parsedNumber - 1];

if (!currentNews) {
  navigateTo("/news");
}

useHead({
  title: `NOVABROKER - ${currentNews?.title}`,
  meta: [
    {
      name: "title",
      content: `NOVABROKER - новости ВЭД - ${currentNews?.title}`,
    },
    {
      name: "keywords",
      content:
        "ВЭД, новости, Таможенный брокер, Сертификация, Новаброкер, Novabroker",
    },
  ],
});
useSeoMeta({
  title: `NOVABROKER - новости ВЭД - ${currentNews?.title}`,
  description: `НОВАБРОКЕР. ${currentNews?.description}`,
  ogTitle: `НОВАБРОКЕР. ${currentNews?.title}`,
  ogDescription: `НОВАБРОКЕР. ${currentNews?.description}`,
});
</script>

<template>
  <section>
    <div class="breadcrumbs margin-bottom">
      <nuxt-link class="breadcrumbs" to="/news">{{ "< Назад" }}</nuxt-link>
    </div>
    <h1 class="margin-bottom">{{ currentNews?.title }}</h1>
    <div
      class="image margin-bottom"
      :style="`background-image: url(${currentNews?.imgSrc})`"
    ></div>
    <div class="image-subtitle margin-bottom">{{ currentNews?.date }}</div>
    <div class="content">
      <div
        v-for="(text, index) in currentNews?.texts"
        :key="index"
        class="margin-bottom"
      >
        <h2>{{ text.heading }}</h2>
        <p>{{ text.paragraph }}</p>
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
  @media screen and (max-width: 440px) {
    font-size: 0.8rem;
  }
}

h1 {
  font-size: 4rem;
  color: var(--black);
  @media screen and (max-width: 440px) {
    font-size: 2rem;
  }
}

.image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
}

.image-subtitle {
  font-size: 1rem;
  color: var(--black);
}

.margin-bottom {
  margin-bottom: 16px;
}

h2 {
  font-size: 1.5rem;
}
p {
  font-size: 1.3rem;
}
</style>
