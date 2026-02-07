<script setup lang="ts">
useSeoMeta({
	title: 'Калькулятор таможенных платежей',
	keywords: 'калькулятор растаможки автомобилей таможенный калькулятор авто расчет таможенных платежей при ввозе автомобиля',
	description: 'Онлайн сервис, позволяющий произвести расчет таможенных платежей и утилизационного сбора при ввозе из-за границы и растаможке автомобилей для физических и юридических лиц на сайте www.alta.ru',
	ogTitle: 'НОВАБРОКЕР. Калькулятор таможенных платежей',
	ogDescription: 'НОВАБРОКЕР. Расчет таможенных платежей за любые типы тс онлайн',
	ogUrl: 'https://xn--80acboyohdrd.xn--p1ai/tamozhennyy_kalkulyator',
});

const toast = useToast()

const isLoading = ref(false);
const computeResults = ref<TKSResponse | null>(null)
const stepperValue = ref<0 | 1>(0)
const formData = ref<IFormValues | null>(null)

const items = [
	{ slot: 'form', title: 'Введите данные по авто',},
	{ slot: 'result', title: 'Результат рассчета'},
]

const getData = async (data: IFormValues) => {
	try {
		isLoading.value = true
		return await $fetch('/api/getvalues', {
			method: 'POST',
			body: data,
		});
	} catch (e) {
		console.log(e)
	} finally {
		isLoading.value = false
	}
}

const handleSubmit = async (data: IFormValues) => {
	const response = await getData(data)
	if (!response || 'error' in response) {
		toast.add({
			title: 'Упс, что-то пошло не так',
			color: 'error',
			progress: true
		})
  
		return 
	}

	formData.value = data
	computeResults.value = response
	stepperValue.value = 1
}



</script>

<template>
    <main>
      <div class="header">
        <h1>Таможенный калькулятор</h1>
        <h2>
          Рассчитайте стоймость ввоза вашего автомобиля, без регистраций и заявок
        </h2>
      </div>
      <UStepper class="stepper" disabled :items="items" :model-value="stepperValue">
        <template #form>
          <CalculatorForm ref="form" :is-loading="isLoading" @submit="handleSubmit"/>
        </template>
        <template #result>
          <CalculatorResult :input="formData" :result="computeResults" @back="() => stepperValue = 0"/>
        </template>
      </UStepper>
    </main>
</template>

<style lang="css" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;

  h2 {
    font-size: 1.3rem;
    color: var(--light-grey);
    text-align: center;

    @media screen and (max-width: 440px) {
      font-size: 1rem;
    }
  }

  h1 {
    font-size: 4rem;
    color: var(--warm-beige);
    text-align: center;

    @media screen and (max-width: 868px) {
      font-size: 3rem;
      line-height: 50px;
    }

    @media screen and (max-width: 440px) {
      font-size: 2rem;
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - var(--header-height));
  width: 100%;
  background-color: var(--dark-forest-green);
  margin-top: var(--header-height);
  padding: 48px 32px;
  @media screen and (max-width: 868px) {
    padding: 16px 16px;
  }
}

.stepper {
  max-width: 100%;
}
</style>