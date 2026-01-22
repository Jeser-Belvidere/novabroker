<script lang="ts" setup>
interface Props {
  name: TIconNames;
  size?: 'sm' | 'md' | 'lg';
  pointer?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	size: 'md',
});

const className = computed(() => {
	return `${props.name} ${props.size} ${props.pointer ? 'pointer' : ''}`;
});
</script>

<template>
  <div class="icon" :class="className" />
</template>

<style lang="css" scoped>
.sm {
  width: 24px;
  height: 24px;
}

.md {
  width: 48px;
  height: 48px;
}

.lg {
  width: 60px;
  height: 60px;
}

.icon {
  background-size: contain;
  background-repeat: no-repeat;
}

.pointer {
  cursor: pointer;
}

.badge-check {
  background-image: url("~/assets/icons/badge-check.svg");
}

.book-open {
  background-image: url("~/assets/icons/book-open.svg");
}

.car-gear {
  background-image: url("~/assets/icons/car-gear.svg");
}

.card-sim {
  background-image: url("~/assets/icons/card-sim.svg");
}

.inventory {
  background-image: url("~/assets/icons/inventory.svg");
}

.ruble {
  background-image: url("~/assets/icons/ruble.svg");
}

.satellite {
  background-image: url("~/assets/icons/satellite.svg");
}

.experiment {
  background-image: url("~/assets/icons/experiment.svg");
}

.inventory {
  background-image: url("~/assets/icons/inventory.svg");
}

.person-check {
  background-image: url("~/assets/icons/person-check.svg");
}

.fust-track {
  background-image: url("~/assets/icons/fust-track.svg");
}

.balance {
  background-image: url("~/assets/icons/balance.svg");
}

.auto-towing {
  background-image: url("~/assets/icons/auto-towing.svg");
}

.star {
  background-image: url("~/assets/icons/star.svg");
}

.clock {
  background-image: url("~/assets/icons/clock.svg");
}

.map-pin {
  background-image: url("~/assets/icons/map-pin.svg");
}

.phone {
  background-image: url("~/assets/icons/phone.svg");
}

.whatsapp {
  background-image: url("~/assets/icons/whatsapp.svg");
}

.yandex-maps {
  background-image: url("~/assets/icons/yandex-maps.svg");
}

.vk {
  background-image: url("~/assets/icons/vk.svg");
}

.mail {
  background-image: url("~/assets/icons/mail.svg");
}
</style>
