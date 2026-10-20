<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import bmwX6Svg from '~/assets/icons/BMWX6.svg?raw'
import { openMax, openVK } from '~/utils/mediaLinks'

const isVisible = ref(true)

/* Эмуляция набора вопроса: текст печатается и стирается по символу */
const TYPED_PHRASES = [
	'Здравствуйте, сколько стоит растаможка BMWX6?',
	'Сколько будет стоить установка ГЛОНАСС?',
	'У меня застряла машина на таможне, что делать?',
	'Какие документы нужны для растаможки?',
	'Мне срочно требуется оценка ТС и техническое заключение!',
]

const TYPE_DELAY_MS = 75
const ERASE_DELAY_MS = 40
const PAUSE_AFTER_TYPED_MS = 1600
const PAUSE_AFTER_ERASED_MS = 800

const typedText = ref('')

let typingSession = 0
let traceObserver: ResizeObserver | null = null

/* Светящиеся трассы: пути строятся по реальным координатам кнопок */
const TRACE_SIDES = ['left', 'top', 'bottom', 'right'] as const
const TRACE_PAD = 4
const TRACE_CORNER_RADIUS = 7

const contactCardRef = ref<HTMLElement | null>(null)
const tracePaths = ref<string[]>([])
const traceViewBox = ref('0 0 350 170')

type IPoint = [number, number]

const buildTracePath = (
	edge: IPoint,
	start: IPoint,
	corners: IPoint[],
	radius: number,
) => {
	const points: IPoint[] = [start, ...corners, start]
	let d = `M ${edge[0]} ${edge[1]} L ${start[0]} ${start[1]}`

	for (let i = 1; i < points.length - 1; i++) {
		const prev = points[i - 1]
		const current = points[i]
		const next = points[i + 1]
		if (!prev || !current || !next) continue

		const [px, py] = prev
		const [cx, cy] = current
		const [nx, ny] = next
		const inLen = Math.hypot(cx - px, cy - py) || 1
		const outLen = Math.hypot(nx - cx, ny - cy) || 1
		const r = Math.min(radius, inLen / 2, outLen / 2)

		d += ` L ${cx - ((cx - px) / inLen) * r} ${cy - ((cy - py) / inLen) * r}`
		d += ` Q ${cx} ${cy} ${cx + ((nx - cx) / outLen) * r} ${cy + ((ny - cy) / outLen) * r}`
	}

	return d
}

const recalcTraces = () => {
	const card = contactCardRef.value
	if (!card) return

	traceViewBox.value = `0 0 ${card.clientWidth} ${card.clientHeight}`

	const icons = [
		card.querySelector('.contact-button__icon--vk'),
		card.querySelector('.contact-button__icon--max'),
		card.querySelector('.contact-button__icon--phone'),
		card.querySelector('.contact-button__icon--mail'),
	]

	tracePaths.value = icons.map((icon, index) => {
		const button = icon?.parentElement
		if (!button) return ''

		// offsetLeft/offsetTop не зависят от transform, поэтому анимация
		// появления карточки (scale) не искажает координаты кнопок
		let bx = 0
		let by = 0
		let node: HTMLElement | null = button
		while (node && node !== card) {
			bx += node.offsetLeft
			by += node.offsetTop
			node = node.offsetParent as HTMLElement | null
		}
		if (node !== card) return ''

		const lx = bx - TRACE_PAD
		const ly = by - TRACE_PAD
		const lw = button.offsetWidth + TRACE_PAD * 2
		const lh = button.offsetHeight + TRACE_PAD * 2
		const x2 = lx + lw
		const y2 = ly + lh
		const cx = lx + lw / 2
		const cy = ly + lh / 2

		const loops: Record<
			(typeof TRACE_SIDES)[number],
			{ edge: IPoint; start: IPoint; corners: IPoint[] }
		> = {
			left: {
				edge: [0, cy],
				start: [lx, cy],
				corners: [
					[lx, ly],
					[x2, ly],
					[x2, y2],
					[lx, y2],
				],
			},
			top: {
				edge: [cx, 0],
				start: [cx, ly],
				corners: [
					[x2, ly],
					[x2, y2],
					[lx, y2],
					[lx, ly],
				],
			},
			bottom: {
				edge: [cx, card.clientHeight],
				start: [cx, y2],
				corners: [
					[lx, y2],
					[lx, ly],
					[x2, ly],
					[x2, y2],
				],
			},
			right: {
				edge: [card.clientWidth, cy],
				start: [x2, cy],
				corners: [
					[x2, y2],
					[lx, y2],
					[lx, ly],
					[x2, ly],
				],
			},
		}

		const side = TRACE_SIDES[index]
		if (!side) return ''

		const { edge, start, corners } = loops[side]
		return buildTracePath(edge, start, corners, TRACE_CORNER_RADIUS)
	})
}

const wait = (ms: number) =>
	new Promise<void>((resolve) => setTimeout(resolve, ms))

const runTypingLoop = async (session: number) => {
	while (session === typingSession) {
		for (const phrase of TYPED_PHRASES) {
			for (const char of phrase) {
				if (session !== typingSession) return

				typedText.value += char
				await wait(TYPE_DELAY_MS)
			}

			await wait(PAUSE_AFTER_TYPED_MS)

			while (typedText.value.length > 0 && session === typingSession) {
				typedText.value = typedText.value.slice(0, -1)
				await wait(ERASE_DELAY_MS)
			}

			if (session !== typingSession) return

			await wait(PAUSE_AFTER_ERASED_MS)
		}
	}
}

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

	// трассы пересчитываются при любом изменении размера карточки
	traceObserver = new ResizeObserver(recalcTraces)
	if (contactCardRef.value) {
		traceObserver.observe(contactCardRef.value)
	}
	recalcTraces()

	// загрузка веб-шрифтов сдвигает раскладку карточки после монтирования
	document.fonts?.ready.then(recalcTraces)

	// при reduced motion текст показывается целиком, без анимации набора
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		typedText.value = TYPED_PHRASES.at(0) ?? ''
		return
	}

	runTypingLoop(++typingSession)
})

onBeforeUnmount(() => {
	typingSession++
	traceObserver?.disconnect()
	traceObserver = null
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
						рассчитать стоимость таможни автомобиля.
					</p>
					<div ref="contactCardRef" class="contact-card">
						<!-- Светящиеся трассы: от края карточки к кнопкам, огибают их и гаснут -->
						<svg
							class="contact-trace"
							:viewBox="traceViewBox"
							preserveAspectRatio="none"
							fill="none"
							aria-hidden="true"
						>
							<g class="contact-trace__base">
								<path
									v-for="(d, index) in tracePaths"
									:key="`trace-base-${index}`"
									:d="d"
								/>
							</g>
							<g class="contact-trace__pulse">
								<path
									v-for="(d, index) in tracePaths"
									:key="`trace-pulse-${index}`"
									class="contact-trace__comet"
									:class="`contact-trace__comet--${index}`"
									pathLength="100"
									:d="d"
								/>
							</g>
						</svg>
						<div class="contact-card__tag">Мы на связи</div>
						<div class="contact-card__row">
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
							<div class="contact-card__separator" />

							<a
								class="contact-button"
								href="mailto:anna@novabroker.ru"
								aria-label="Написать на почту"
								target="_blank"
							>
								<span class="contact-button__icon contact-button__icon--mail" />
							</a>
						</div>
					</div>
				</div>
				<div class="consultation-modal__right">
					<!-- Текстовое окно: эмуляция набора вопроса пользователем -->
					<div class="chat-stage">
						<div class="typebox" aria-hidden="true">
							<span class="typebox__label">Какой ваш вопрос?</span>
							<div class="typebox__field">
								<span v-if="typedText" class="typebox__text">{{
									typedText
								}}</span>
								<span v-else class="typebox__placeholder">
									Спросите нас о чём угодно…
								</span>
								<span class="typebox__caret" />
							</div>
						</div>
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
	@media (max-width: 700px) {
		height: fit-content;
	}
}

.consultation-modal__left {
	display: flex;
	flex: 1.15;
	flex-direction: column;
	gap: 12px;
	padding: 28px;
	background-color: var(--warm-ligth);
	@media (max-width: 700px) {
		gap: 6px;
		padding: 12px;
	}
}

.consultation-modal__right {
	position: relative;
	display: flex;
	flex: 1;
	flex-direction: column;
	gap: 8px;
	padding: 20px 0;
	overflow: hidden;
	background-color: var(--warm-beige);
	@media (max-width: 700px) {
		gap: 6px;
		padding: 10px 0;
	}
}

.consultation-modal__close {
	position: absolute;
	top: 2px;
	right: 12px;
	z-index: 3;
	border: none;
	background-color: transparent;
	color: var(--dark-green);
	font-size: 2rem;
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
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	margin-top: 12px;
	padding: 16px;
	border: 1px solid rgba(4, 40, 29, 0.18);
	border-radius: 12px;
	background-color: var(--white);
	@media (max-width: 700px) {
		gap: 6px;
		padding: 8px;
	}
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

/* --- Светящиеся трассы: от края карточки к кнопкам контактов --- */

.contact-trace {
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
}

/* едва заметные трафареты трасс на фоне карточки */
.contact-trace__base path {
	stroke: rgba(200, 155, 75, 0.22);
	stroke-width: 1.5;
	stroke-linejoin: round;
	fill: none;
}

/* бегущий световой импульс вдоль трассы */
.contact-trace__comet {
	stroke: #c89b4b;
	stroke-width: 2.5;
	stroke-linecap: round;
	stroke-linejoin: round;
	fill: none;
	stroke-dasharray: 14 100;
	stroke-dashoffset: 14;
	filter: drop-shadow(0 0 5px rgba(200, 155, 75, 0.85));
	animation: trace-pulse 3.6s linear infinite;
}

.contact-trace__comet--1 {
	animation-delay: -0.9s;
}

.contact-trace__comet--2 {
	animation-delay: -1.8s;
}

.contact-trace__comet--3 {
	animation-delay: -2.7s;
}

/* импульс входит у края карточки, обегает кнопку и сходит с трассы */
@keyframes trace-pulse {
	0% {
		stroke-dashoffset: 14;
	}
	70%,
	100% {
		stroke-dashoffset: -100;
	}
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

/* --- Текстовое окно с эмуляцией набора вопроса --- */

.chat-stage {
	position: relative;
	top: 10px;
	z-index: 1;
	display: flex;
	justify-content: flex-start;
	@media (max-width: 700px) {
		top: 0;
	}
}

.typebox {
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: 100%;
	margin-left: 16px;
	margin-right: 16px;
	padding: 14px;
	border: 1px solid rgba(149, 150, 150, 0.932);
	border-radius: 12px;
	background-color: var(--white);
	box-shadow: 0 10px 26px rgba(4, 40, 29, 0.18);
	@media (max-width: 700px) {
		width: 100%;
		margin-left: 28px;
		margin-right: 28px;
	}
}

.typebox__label {
	align-self: flex-start;
	padding: 4px 10px;
	border: 1px solid rgba(4, 40, 29, 0.25);
	border-radius: 8px;
	background-color: rgba(218, 187, 141, 0.25);
	color: var(--dark-green);
	font-size: 0.8rem;
	letter-spacing: 1px;
}

.typebox__field {
	min-height: 60px;
	padding: 8px 12px;
	border: 1px solid rgba(4, 40, 29, 0.18);
	border-radius: 8px;
	background-color: var(--warm-ligth);
}

.typebox__text,
.typebox__placeholder {
	color: var(--dark-green);
	font-size: 0.9rem;
	letter-spacing: 0.5px;
	line-height: 1.5;
	word-break: break-word;
}

.typebox__placeholder {
	color: rgba(4, 40, 29, 0.45);
}

/* мигающий курсор следует за последним символом */
.typebox__caret {
	display: inline-block;
	width: 2px;
	height: 1.2em;
	vertical-align: baseline;
	background-color: var(--dark-green);
	animation: caret-blink 1s steps(1) infinite;
}

@keyframes caret-blink {
	50% {
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
	/* 64%, */
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
		opacity: 0.8;
	}
	33%,
	37% {
		opacity: 0;
	}
	38%,
	42% {
		opacity: 0.8;
	}
	43%,
	47% {
		opacity: 0;
	}
	48%,
	61% {
		opacity: 0.8;
	}
	62% {
		opacity: 0;
	}
	/* 64%, */
	100% {
		opacity: 0;
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
	.typebox__caret,
	.contact-trace__comet,
	.consultation-modal,
	.consultation-modal__card {
		animation: none;
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
