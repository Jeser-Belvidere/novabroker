<script setup lang="ts">
interface IProps {
  type?: "primary" | "secondary";
  href?: "_self" | "_blank" | "_parent" | "_top";
  loading?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  type: "primary",
  href: undefined,
  loading: false,
});
</script>

<template>
  <button class="button" :class="props.type">
    <slot />
  </button>
</template>

<style lang="css" scoped>
.button {
  background-color: var(--warm-beige);
  color: var(--dark-green);
  border: 1px solid var(--warm-beige);
  padding: 12px;
  border-radius: 8px;
  font-size: 1rem;
  letter-spacing: 1.5px;
}

.secondary {
  background-color: var(--dark-forest-green);
  color: var(--warm-beige);
  border-color: var(--dark-green);
} 

.primary {
  background-color: var(--warm-beige);
  color: var(--dark-green);
}
</style>
