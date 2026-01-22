<script setup lang="ts">
interface IProps {
  to?: string | { path: string; hash: string };
  type?: 'primary' | 'secondary' | 'default';
  href?: string;
}
const props = withDefaults(defineProps<IProps>(), {
	type: 'primary',
});
</script>

<template>
  <nuxt-link v-if="props.to" class="link" :class="props.type" :to="props.to">
    <slot />
  </nuxt-link>
  <a v-else class="link" :class="props.type" :href="props.href">
    <slot />
  </a>
</template>

<style lang="css" scoped>
.link {
  color: var(--warm-beige);
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}

.primary {
  color: var(--warm-beige);
}

.secondary {
  color: var(--dark-forest-green);
}

.default {
  color: var(--light-grey);
}
</style>
