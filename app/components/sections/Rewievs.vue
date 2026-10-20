<script setup lang="ts">
const slides = [
	{
		name: 'Анжелика Копылова',
		date: '1 сентября 2025',
		rank: 5,
		text: 'Всегда на связи , оперативно отвечают на заявленные вопросы , большой штат сотрудников. Все быстро и удобно',
	},
	{
		name: 'Оксана Веденеева',
		date: '4 сентября 2025',
		rank: 5,
		text: 'Отличная компания. Сопроводили растоможку авто. Четко и быстро. Спасибо.',
	},
	{
		name: 'roland.shalmiev',
		date: '24 июля 2025',
		rank: 5,
		text: 'Весь процесс занял 1 день. Никаких внезапных доплат, как пугали на форумах. Адекватные эвакуаторщики – это круто: машину пригнали прямо на СВХ. Буду советовать вас!',
	},
	{
		name: 'ЕВГЕНИЙ Гура',
		date: '14 октября 2025',
		rank: 5,
		text: 'Все четко по делу. достаточно быстро и без головных болей.',
	},
	{
		name: 'Елена Рубан',
		date: '22 сентября 2025',
		rank: 5,
		text: 'Благодарю за оперативность, чёткость и поддержку',
	},
	{
		name: 'Антон Скачков',
		date: '1 сентября 2025',
		rank: 5,
		text: 'Отличная Компания,все четко и быстро 👍Рекомендую',
	},
	{
		name: 'Виталий Н.',
		date: '27 октября 2025',
		rank: 5,
		text: 'Всё отлично, надёжные продавцы👍',
	},
]

const carouselConfig = {
	gap: 30,
	itemsToShow: 1,
}
</script>
<template>
	<section id="reviews">
		<div class="title">
			<p class="title-head">Отзывы клиентов</p>
			<p class="title-description">
				Реальные мнения наших клиентов, без прикрас
			</p>
		</div>
		<div class="reviews-container">
			<div class="yandex-container">
				<div
					style="width: 620px; height: 740px; overflow: hidden"
					class="reviews-yandex"
				>
					<iframe
						same-site="none"
						class="lazy-loaded"
						style="
							width: 100%;
							height: 100%;
							border: 2px solid #dabb8d;
							border-radius: 8px;
							box-sizing: border-box;
						"
						data-lazy-type="iframe"
						data-src="https://yandex.ru/maps-reviews-widget/87403020516?comments"
						src="https://yandex.ru/maps-reviews-widget/87403020516?comments"
					/>
				</div>
			</div>

			<Carousel v-bind="carouselConfig" style="max-width: 100%">
				<Slide v-for="(slide, index) in slides" :key="index">
					<div class="card carousel__item">
						<div class="card-head">
							<div class="card-head__name">{{ slide.name }}</div>
							<div class="card-head__date">{{ slide.date }}</div>
						</div>
						<div class="card-rank">
							<UIIcon v-for="i in slide.rank" :key="i" name="star" size="sm" />
						</div>
						<div class="card-text">
							{{ slide.text }}
						</div>
					</div>
				</Slide>
				<template #addons>
					<Pagination />
					<Navigation />
				</template>
			</Carousel>
		</div>
	</section>
</template>
<style lang="css" scoped>
section {
	height: 100%;
	background-color: var(--dark-forest-green);
	padding: 32px 32px;
}

.title {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	text-align: center;

	.title-head {
		color: var(--warm-beige);
		font-size: 4rem;

		@media screen and (max-width: 768px) {
			font-size: 2rem;
		}
	}

	.title-description {
		color: var(--light-grey);
		font-size: 1.5rem;

		@media screen and (max-width: 768px) {
			font-size: 1rem;
		}
	}
}

.reviews-container {
	display: grid;
	grid-template-columns: 50% 50%;
	padding: 0 32px;

	@media screen and (max-width: 868px) {
		display: flex;
		flex-direction: column;
		padding: 0;
	}
}

.card {
	background-color: #0d3b2e;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 32px;
	transition: all 0.4s ease-in-out;
	gap: 10px;
	border-radius: 10px;

	@media screen and (max-width: 868px) {
		padding: 16px;
	}

	.card-head {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: self-start;

		.card-head__name {
			font-size: 1.5rem;
			color: var(--white);
		}

		.card-head__date {
			font-size: 0.9rem;
			color: #827667;
		}
	}

	.card-rank {
		width: 100%;
		display: flex;
		flex-direction: row;
		color: var(--warm-beige);
	}

	.card-text {
		color: var(--warm-ligth);
		letter-spacing: 2px;
	}
}

.yandex-container {
	display: flex;
	justify-content: center;
}

.reviews-yandex {
	width: 100%;
	/* margin-top: 48px; */
	transform: scale(0.9);

	@media screen and (max-width: 868px) {
		left: 0;
		transform: scale(0.8);
	}
}
</style>
