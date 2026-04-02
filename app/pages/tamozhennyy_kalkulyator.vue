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


const formData = reactive<IFormValues>({
	face: 'nat', 
	cost: '',
	currency: '643',
	age: '3', 
	power: '',
	power_edizm: 'ls',
	volume: '',
	engine_type: 'petrol',
	mass: '',
	offroad: false,
	caravan: false, 
	ts_type: '00_8703', 
	power_hybrid_dvs_edizm: 'ls',
	power_hybrid_electro_edizm: 'ls',
})

const items = [
	{ slot: 'form', title: 'Введите данные по авто',},
	{ slot: 'result', title: 'Результат рассчета'},
]

const getData = async (formData: IFormValues) => {
	try {
		isLoading.value = true
		const { data, error } = await useFetch('/api/getvalues', {
			method: 'POST',
			body: formData
		})

		if (error.value) {
			throw error.value
		}

		return data.value
	} catch (e) {
		return { error: e }
	} finally {
		isLoading.value = false
	}
}

const handleSubmit = async (updatedFormData: IFormValues) => {
	Object.assign(formData, updatedFormData)
  
	const response = await getData(formData)

	if (!response || 'error' in response) {
		toast.add({
			title: 'Упс, что-то пошло не так',
			progress: false,
			ui: {
				root: 'ui-toast-wrapper',
			}
		})
  
		return 
	}

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
          <CalculatorForm ref="form" v-model="formData" :is-loading="isLoading" @submit="handleSubmit"/>
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
    color: var(--black);
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
  background-color: var(--dark-grey);
  margin-top: var(--header-height);
  padding: 48px 32px;
  @media screen and (max-width: 868px) {
    padding: 16px 16px;
  }
  @media screen and (max-width: 468px) {
    padding: 8px 8px;
  }

  --ui-bg-accented: var(--warm-beige);
  --ui-primary: var(--warm-beige);
  --ui-bg: var(--dark-grey);
  --ui-text: var(--black);
  --ui-border-muted: var(--darker-grey);
  --text-xs: 0.77rem;
  --ui-text-inverted: var(--black);

  /* Stepper inactive bg and select menu bg */
  --ui-bg-elevated: var(--light-grey);

  /* Radio buttons and inputs border */
  --ui-border-accented: var(--darker-grey);

  /* Selects and inputs palaceholders */
  --ui-text-highlighted: var(--black);
  --ui-text-dimmed: #ababab;

  --font-weight-medium: 600;
  letter-spacing: 1.5px;
}

.stepper {
  max-width: 100%;
}
</style>