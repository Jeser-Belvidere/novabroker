<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import bmwX6Svg from '~/assets/icons/BMWX6.svg?raw'
import { openMax, openVK } from '~/utils/mediaLinks'

// interface IContactOption {
// 	icon: 'whatsapp' | 'phone' | 'mail'
// 	label: string
// 	href: string
// }

// const contactOptions: IContactOption[] = [
// 	{
// 		icon: 'whatsapp',
// 		label: 'Написать в WhatsApp',
// 		href: 'https://wa.me/79585000286',
// 	},
// 	{
// 		icon: 'phone',
// 		label: '+7 495 778-30-50',
// 		href: 'tel:+74957783050',
// 	},
// 	{
// 		icon: 'mail',
// 		label: 'anna@novabroker.ru',
// 		href: 'mailto:anna@novabroker.ru',
// 	},
// ]

const isVisible = ref(true)

const closeModal = () => {
	isVisible.value = false
}

const onKeydown = (event: KeyboardEvent) => {
	if (event.key === 'Escape') {
		closeModal()
	}
}

const handleAfterLeave = () => {
	document.body.style.overflow = ''
	document.getElementById('consultation-modal-root')?.remove()
}

onMounted(() => {
	window.addEventListener('keydown', onKeydown)
	document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
	window.removeEventListener('keydown', onKeydown)
	document.body.style.overflow = ''
})
</script>

<template>
	<Transition name="consultation" @after-leave="handleAfterLeave">
		<div v-if="isVisible" class="consultation-modal">
			<div class="consultation-modal__backdrop" @click="closeModal()" />
			<div
				class="consultation-modal__card"
				role="dialog"
				aria-modal="true"
				aria-label="Напишите нам, и мы с радостью проконсультируем вас"
			>
				<button
					class="consultation-modal__close"
					type="button"
					aria-label="Закрыть"
					@click="closeModal()"
				>
					×
				</button>
				<div class="consultation-modal__left">
					<h2 class="consultation-modal__title">
						Напишите нам, и мы с радостью проконсультируем вас
					</h2>
					<p class="consultation-modal__description">
						Мы всегда на связи, чтобы ответить на ваши вопросы и помочь
						рассчитать стоимость растаможки автомобиля.
					</p>
					<div class="contact-card">
						<div class="contact-card__tag">Мы на связи</div>
						<div class="contact-card__row">
							<!-- <template
								v-for="(option, index) in contactOptions"
								:key="option.href"
							>
								<div v-if="index > 0" class="contact-card__separator" />
								<a
									class="contact-button"
									:href="option.href"
									:aria-label="option.label"
									target="_blank"
									:rel="
										option.icon === 'whatsapp'
											? 'noopener noreferrer'
											: undefined
									"
								>
									<span
										class="contact-button__icon"
										:class="`contact-button__icon--${option.icon}`"
									/>
								</a>
							</template> -->
							<a
								class="contact-button"
								href="mailto:anna@novabroker.ru"
								aria-label="Написать на почту"
								target="_blank"
							>
								<span class="contact-button__icon contact-button__icon--mail" />
							</a>
							<div class="contact-card__separator" />
							<button
								class="contact-button"
								type="button"
								aria-label="Написать в VK"
								@click="openVK()"
							>
								<span class="contact-button__icon contact-button__icon--vk" />
							</button>
							<div class="contact-card__separator" />
							<button
								class="contact-button"
								type="button"
								aria-label="Написать в MAX"
								@click="openMax()"
							>
								<span class="contact-button__icon contact-button__icon--max" />
							</button>
						</div>
						<div class="contact-card__row">
							<a
								class="contact-button"
								href="tel:+74957783050"
								aria-label="Позвонить нам"
							>
								<span
									class="contact-button__icon contact-button__icon--phone"
								/>
							</a>
						</div>
					</div>
				</div>
				<div class="consultation-modal__right">
					<!-- Документы в левом углу правой части: ручка пишет строки -->
					<div class="papers-stage">
						<svg
							class="papers__svg"
							viewBox="0 0 220 160"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<g class="papers__back">
								<rect x="72" y="16" width="92" height="118" rx="8" />
							</g>
							<g class="papers__front">
								<path
									d="M52 30 h62 l24 24 v72 a8 8 0 0 1 -8 8 h-70 a8 8 0 0 1 -8 -8 v-88 a8 8 0 0 1 8 -8 z"
								/>
								<path d="M114 30 v24 h24" />
								<line
									class="papers__line papers__line--1"
									pathLength="1"
									x1="66"
									y1="66"
									x2="124"
									y2="66"
								/>
								<line
									class="papers__line papers__line--2"
									pathLength="1"
									x1="66"
									y1="82"
									x2="134"
									y2="82"
								/>
								<line
									class="papers__line papers__line--3"
									pathLength="1"
									x1="66"
									y1="98"
									x2="112"
									y2="98"
								/>
							</g>
							<g class="papers__pen">
								<path d="M0 0 l14 -5 l-3.5 10.5 z" />
								<path d="M10.5 5 L34 -18" />
							</g>
						</svg>
					</div>
					<!-- BMW X6: заезд справа, остановка с миганием фар, отъезд влево, бесконечный цикл -->
					<div class="car-stage">
						<div class="car">
							<!-- eslint-disable-next-line vue/no-v-html -->
							<div class="car__art" v-html="bmwX6Svg" />
							<span class="car__cone" />
							<span class="car__headlight" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>

<style lang="css" scoped>
.consultation-modal {
	position: fixed;
	inset: 0;
	z-index: 150;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 16px;
	animation: backdrop-in 0.3s ease both;
}

.consultation-modal__backdrop {
	position: absolute;
	inset: 0;
	background-color: rgba(4, 40, 29, 0.82);
	backdrop-filter: blur(4px);
}

.consultation-modal__card {
	position: relative;
	display: flex;
	overflow: hidden;
	width: min(92vw, 760px);
	border: 1px solid var(--dark-green);
	border-radius: 14px;
	box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
	animation: card-in 0.35s ease-out;
}

.consultation-modal__left {
	display: flex;
	flex: 1.15;
	flex-direction: column;
	gap: 12px;
	padding: 28px;
	background-color: var(--warm-ligth);
}

.consultation-modal__right {
	position: relative;
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	gap: 8px;
	padding: 20px 0;
	overflow: hidden;
	background-color: var(--warm-beige);
}

.consultation-modal__close {
	position: absolute;
	top: 8px;
	right: 12px;
	z-index: 3;
	border: none;
	background-color: transparent;
	color: var(--dark-green);
	font-size: 1.6rem;
	line-height: 1;
	cursor: pointer;
	transition:
		transform 0.2s ease,
		color 0.2s ease;
}

.consultation-modal__close:hover {
	transform: rotate(90deg) scale(1.1);
	color: var(--dark-forest-green);
}

.consultation-modal__title {
	margin: 0;
	max-width: 430px;
	color: var(--dark-green);
	font-size: clamp(1.1rem, 2vw, 1.35rem);
	font-weight: 700;
	letter-spacing: 1.5px;
	line-height: 1.35;
}

.consultation-modal__description {
	margin: 0;
	color: rgba(4, 40, 29, 0.8);
	font-size: 0.95rem;
	letter-spacing: 1px;
	line-height: 1.5;
}

/* --- Карточка с кнопками контактов --- */

.contact-card {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: 12px;
	padding: 16px;
	border: 1px solid rgba(4, 40, 29, 0.18);
	border-radius: 12px;
	background-color: var(--white);
}

.contact-card__tag {
	align-self: flex-start;
	padding: 4px 10px;
	border: 1px solid rgba(4, 40, 29, 0.25);
	border-radius: 8px;
	background-color: rgba(218, 187, 141, 0.25);
	color: var(--dark-green);
	font-size: 0.8rem;
	letter-spacing: 1px;
}

.contact-card__row {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 14px;
	width: 100%;
}

.contact-card__separator {
	flex-shrink: 0;
	width: 1px;
	height: 30px;
	background-color: rgba(4, 40, 29, 0.15);
}

/* --- Кнопки-иконки с эффектом "выстрела" при наведении --- */

.contact-button {
	position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 46px;
	border: 1px solid var(--dark-green);
	border-radius: 10px;
	background-color: var(--dark-forest-green);
	cursor: pointer;
	transition:
		background-color 0.25s ease,
		border-color 0.25s ease,
		transform 0.2s ease,
		box-shadow 0.25s ease;
}

/* вспышка выстрела */
.contact-button:hover {
	border-color: var(--dark-forest-green);
	background-color: var(--dark-green);
	transform: translateY(-2px);
	box-shadow: 0 6px 18px rgba(4, 40, 29, 0.45);
	animation: muzzle-flash 0.45s ease-out;
}

/* блик, пролетающий по кнопке, как отблеск выстрела */
.contact-button::after {
	content: '';
	position: absolute;
	top: -20%;
	bottom: -20%;
	left: 0;
	width: 45%;
	transform: translateX(-160%) skewX(-20deg);
	background: linear-gradient(
		100deg,
		transparent,
		rgba(255, 250, 232, 0.75),
		transparent
	);
}

.contact-button:hover::after {
	animation: muzzle-sweep 0.5s ease-out;
}

.contact-button:active {
	transform: translateY(0);
}

.contact-button:focus-visible {
	outline: 2px solid var(--dark-forest-green);
	outline-offset: 2px;
}

.contact-button__icon {
	cursor: pointer;
	width: 24px;
	height: 24px;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

.contact-button__icon--whatsapp {
	background-image: url('~/assets/icons/whatsapp.svg');
}

.contact-button__icon--phone {
	background-image: url('~/assets/icons/phone.svg');
}

.contact-button__icon--mail {
	background-image: url('~/assets/icons/mail.svg');
}

.contact-button__icon--vk {
	background-image: url('~/assets/icons/vk.svg');
}

.contact-button__icon--max {
	background-image: url('~/assets/icons/max.svg');
}

@keyframes muzzle-flash {
	0% {
		box-shadow:
			0 6px 18px rgba(4, 40, 29, 0.45),
			0 0 0 0 rgba(255, 250, 232, 0.85);
	}
	100% {
		box-shadow:
			0 6px 18px rgba(4, 40, 29, 0.45),
			0 0 0 14px rgba(255, 250, 232, 0);
	}
}

@keyframes muzzle-sweep {
	to {
		transform: translateX(340%) skewX(-20deg);
	}
}

/* --- Документы с пишущей ручкой --- */

.papers-stage {
	position: relative;
	z-index: 1;
	display: flex;
	justify-content: flex-start;
}

.papers__svg {
	width: min(190px, 72%);
	height: auto;
	overflow: visible;
}

.papers__back rect,
.papers__front path {
	stroke: rgba(4, 40, 29, 0.85);
	stroke-width: 2.5;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
}

.papers__line {
	stroke: rgba(4, 40, 29, 0.7);
	stroke-width: 2.5;
	stroke-linecap: round;
	stroke-dasharray: 1;
	stroke-dashoffset: 1;
}

.papers__line--1 {
	animation: write-line-1 9s linear infinite;
}

.papers__line--2 {
	animation: write-line-2 9s linear infinite;
}

.papers__line--3 {
	animation: write-line-3 9s linear infinite;
}

.papers__front {
	animation: paper-shift 9s linear infinite;
}

.papers__back {
	animation: paper-shift-back 9s linear infinite;
}

.papers__pen {
	stroke: rgba(4, 40, 29, 0.9);
	stroke-width: 2.5;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	animation: pen-write 9s linear infinite;
}

@keyframes write-line-1 {
	0% {
		stroke-dashoffset: 1;
	}
	24% {
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dashoffset: 0;
	}
}

@keyframes write-line-2 {
	0%,
	30% {
		stroke-dashoffset: 1;
	}
	54% {
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dashoffset: 0;
	}
}

@keyframes write-line-3 {
	0%,
	60% {
		stroke-dashoffset: 1;
	}
	82% {
		stroke-dashoffset: 0;
	}
	100% {
		stroke-dashoffset: 0;
	}
}

/* лист сдвигается под ручкой на каждой новой строке */
@keyframes paper-shift {
	0%,
	24% {
		transform: translate(0, 0);
	}
	30% {
		transform: translate(3px, 1px);
	}
	54% {
		transform: translate(0, 0);
	}
	60% {
		transform: translate(-3px, 1px);
	}
	82%,
	100% {
		transform: translate(0, 0);
	}
}

@keyframes paper-shift-back {
	0%,
	24% {
		transform: translate(0, 0);
	}
	30% {
		transform: translate(-2px, 0);
	}
	54% {
		transform: translate(0, 0);
	}
	60% {
		transform: translate(2px, 0);
	}
	82%,
	100% {
		transform: translate(0, 0);
	}
}

/* ручка пишет строки, затем отрывается от бумаги */
@keyframes pen-write {
	0% {
		transform: translate(66px, 66px);
		opacity: 0;
	}
	4% {
		opacity: 1;
	}
	24% {
		transform: translate(124px, 66px);
	}
	30% {
		transform: translate(66px, 82px);
	}
	54% {
		transform: translate(134px, 82px);
	}
	60% {
		transform: translate(66px, 98px);
	}
	82% {
		transform: translate(112px, 98px);
	}
	90%,
	100% {
		transform: translate(150px, 48px);
		opacity: 0;
	}
}

/* --- BMW X6: заезд справа, остановка, отъезд влево --- */

.car-stage {
	position: relative;
	z-index: 1;
	height: 120px;
	overflow: hidden;
}

.car {
	position: absolute;
	top: -6px;
	right: 100%;
	width: min(300px, 94%);
	/* заезд за правый край, остановка в центре, отъезд за левый край — по кругу */
	animation: car-ride 5s linear infinite;
}

.car__art {
	width: 100%;
}

.car__art :deep(svg) {
	display: block;
	width: 100%;
	height: auto;
}

/* колёса — две последние группы в BMWX6.svg */
.car :deep(svg > g:nth-of-type(2)),
.car :deep(svg > g:nth-of-type(3)) {
	transform-box: fill-box;
	transform-origin: center;
	/* колёса крутятся в движении и замирают на остановке */
	animation: wheel-roll 5s linear infinite;
}

/* фары: свечение и световой конус поверх контурного кузова */
.car__headlight {
	position: absolute;
	right: 7.5%;
	top: 37.5%;
	width: 3%;
	height: 5%;
	border-radius: 50%;
	background-color: #fff3c4;
	backdrop-filter: blur(100px);
	animation: headlight-blink 5s linear infinite;
	transform: rotate(20deg);
}

.car__cone {
	position: absolute;
	right: -31%;
	top: 38%;
	width: 40%;
	height: 22%;
	background: linear-gradient(
		145deg,
		rgba(255, 243, 196, 0.75),
		rgba(255, 243, 196, 0)
	);
	clip-path: polygon(100% 0%, 0 0, 0 20%, 100% 100%);
	animation: headlight-cone 5s linear infinite;
}

@keyframes car-ride {
	0% {
		right: 100%;
		opacity: 0;
		animation-timing-function: ease-out;
	}
	7% {
		opacity: 1;
	}
	26%,
	62% {
		right: 50%;
		/* transform: translateX(50%); */
	}
	62% {
		right: 50%;
		animation-timing-function: ease-in;
	}
	96% {
		right: -100%;
		opacity: 1;
	}
	100% {
		right: -108%;
		opacity: 0;
	}
}

@keyframes headlight-blink {
	0%,
	26% {
		opacity: 0.35;
	}
	27%,
	32% {
		opacity: 1;
	}
	33%,
	37% {
		opacity: 0.2;
	}
	38%,
	42% {
		opacity: 1;
	}
	43%,
	47% {
		opacity: 0.2;
	}
	48%,
	61% {
		opacity: 1;
	}
	62% {
		opacity: 0.35;
	}
	64%,
	100% {
		opacity: 1;
	}
}

@keyframes headlight-cone {
	0%,
	26% {
		opacity: 0;
	}
	27%,
	32% {
		opacity: 0.7;
	}
	33%,
	37% {
		opacity: 0;
	}
	38%,
	42% {
		opacity: 0.7;
	}
	43%,
	47% {
		opacity: 0;
	}
	48%,
	61% {
		opacity: 0.7;
	}
	62% {
		opacity: 0;
	}
	64%,
	100% {
		opacity: 0.7;
	}
}

@keyframes wheel-roll {
	0% {
		transform: rotate(0deg);
		animation-timing-function: ease-out;
	}
	26%,
	62% {
		transform: rotate(620deg);
	}
	62% {
		animation-timing-function: ease-in;
	}
	100% {
		transform: rotate(1240deg);
	}
}

/* --- Появление и закрытие модального окна --- */

@keyframes backdrop-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes card-in {
	from {
		transform: translateY(24px) scale(0.96);
	}
	to {
		transform: translateY(0) scale(1);
	}
}

.consultation-leave-active {
	transition: opacity 0.25s ease;
}

.consultation-leave-to {
	opacity: 0;
}

@media (max-width: 700px) {
	.consultation-modal__card {
		flex-direction: column;
		max-height: 92vh;
		overflow-y: auto;
	}

	.consultation-modal__right {
		min-height: 300px;
	}
}

@media (prefers-reduced-motion: reduce) {
	.car,
	.car :deep(svg > g:nth-of-type(2)),
	.car :deep(svg > g:nth-of-type(3)),
	.car__headlight,
	.car__cone,
	.papers__line,
	.papers__front,
	.papers__back,
	.papers__pen,
	.consultation-modal,
	.consultation-modal__card {
		animation: none;
	}

	.papers__line {
		stroke-dashoffset: 0;
	}

	.papers__pen {
		transform: translate(150px, 48px);
	}

	.car {
		left: 50%;
		transform: translateX(-50%);
	}

	.car__headlight,
	.car__cone {
		opacity: 1;
	}
}
</style>
