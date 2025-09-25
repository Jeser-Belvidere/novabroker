<script setup lang="ts">
interface IProps {
  heading?: string
  paragraph: string;
}

const props = defineProps<IProps>()
</script>

<template>
  <div>
    <h2 v-if="props.heading">{{ props.heading }}</h2>
    <p>{{ props.paragraph }}</p>
  </div>
</template>

<style lang="css" scoped>
h2 {
  font-size: 1.5rem;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

p {
  font-size: 1.3rem;
  letter-spacing: 2px;
  margin-bottom: 30px;
}
</style>