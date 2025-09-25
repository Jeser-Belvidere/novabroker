<script setup lang="ts">
import { UINewsText } from "#components";
import type { INews } from "~/types/news";

const route = useRoute();
const idFromParams: string = route?.params?.newsId as string;

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
    <div class="image margin-bottom" :style="`background-image: url(${currentNews?.imgSrc})`" />
    <div class="image-subtitle margin-bottom">{{ currentNews?.date }}</div>
    <div class="content">
      <div v-for="(newsBlock, index) in currentNews?.newsBlocks" :key="index" class="margin-bottom">
        <UINewsText v-if="newsBlock.tag === 'text'" :heading="newsBlock?.heading" :paragraph="newsBlock.paragraph" />
        <UINewsTable v-if="newsBlock.tag === 'table'" :caption="newsBlock.caption" :columns="newsBlock.columns"
          :data="newsBlock.data" />
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
  width: fit-content;
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
</style>
