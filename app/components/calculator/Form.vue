<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import type { MaskInputOptions } from 'maska'
import { vMaska } from 'maska/vue'
import { 
	AGE_OPTIONS, 
	CHASSIS_TYPES_OPTIONS, 
	CURRENCY_OPTIONS, 
	ENGINE_TYPES_OPTIONS, 
	FACE_TYPES_OPTIONS, 
	POWER_TYPES_OPTIONS, 
	TS_TYPES_OPTIONS, 
	BUS_CAPACITY_OPTIONS, 
	BUS_ECO_CLASS_OPTIONS,
	initialState,
} from './consts'



const props = defineProps<{
    isLoading: boolean
    modelValue: IFormValues
}>()

const emits = defineEmits(['submit', 'update:modelValue'])

const formState = reactive({...props.modelValue})
const formRef = ref()

watch(formState , () => {
	emits('update:modelValue', formState)
})

const onSubmit = (event: FormSubmitEvent<IFormValues>) => {
	emits('submit', event.data)
}

function onReset() {
	formRef.value.clear()
	Object.assign(formState, initialState)
}

const costMask = reactive<MaskInputOptions>({
	mask: '### ### ###',
	reversed: true
})

const volumeMask = reactive<MaskInputOptions>({
	mask: '## ###',
	reversed: true
})

const powerMask = reactive<MaskInputOptions>({
	mask: '# ###',
	reversed: true
})

watch (() => formState.ts_type, () => {
	Object.assign(formState, {...initialState, ts_type: formState.ts_type})
	formRef.value.clear()
})

watch (() => formState.ts_type, () => {
	if (formState.ts_type !== '00_8703') {
		Object.assign(formState, {...formState, face: 'jur'})
	}

	if (formState.ts_type === '09_8716400000' || formState.ts_type === '10_871610') {
		Object.assign(formState, {...formState, engine_type: 'no_engine'})
	} else {
		Object.assign(formState, {...formState, engine_type: 'petrol'})
	}

	if (formState.ts_type === '13_8702') {
		Object.assign(formState, {...formState, buscap: 'gt120'})
	} else {
		Object.assign(formState, {...formState, buscap: undefined})
	}
})

watch (() => formState.engine_type, (newValue, oldValue) => {
	if ((oldValue === 'diesel_electric' || oldValue === 'petrol_electric') && (newValue === 'diesel' || newValue === 'petrol' || newValue === 'electric')) {
		Object.assign(formState, {...formState, volume: '', power: '', power_hybrid_dvs: '', power_hybrid_electro: ''})
    
	}

	if ((oldValue === 'diesel' || oldValue === 'petrol' || oldValue === 'electric') && (newValue === 'diesel_electric' || newValue === 'petrol_electric')) {
		Object.assign(formState, {...formState, volume: '', power: '', power_hybrid_dvs: '', power_hybrid_electro: ''})
    
	}

	if (newValue === 'electric') {
		Object.assign(formState, {...formState, volume: '', power: '', power_hybrid_dvs: '', power_hybrid_electro: ''})
	}
})

watch (() => formState.engine_type, () => {
	if (formState.engine_type !== 'diesel_electric' && formState.engine_type !== 'petrol_electric') {
		Object.assign(formState, {...formState, mdvs_gt_m30ed: false, sequential: false})
	}
})

watch (() => formState.offroad, (newValue) => {
	if (newValue === true) {
		Object.assign(formState, {...formState, caravan: false})
	}
})

watch (() => formState.caravan, (newValue) => {
	if (newValue === true) {
		Object.assign(formState, {...formState, offroad: false})
	}
})



const isEngineTypeDisabled = computed(() => {
	if (
		formState.ts_type === '09_8716400000' || 
    formState.ts_type === '10_871610'
	) {
		Object.assign(formState, {...formState, engine_type: 'no_engine'})
		return true
	} else {
		return false
	}
})

const isMassInputDisabled = computed(() => {
	if (formState.ts_type === '01_8703' 
  || formState.ts_type === '04_8704'
  || formState.ts_type === '00_8704' 
  || formState.ts_type === '05_870410') {
		return false
	} else {
		return true
	}
})

// Масса обязательна для пикапов
const isMassInputRequired = computed(() => {
	if (formState.ts_type === '00_8704' ) {
		return true
	} else {
		return false
	}
})

const isVolumeDisabled = computed(() => {
	if (
		formState.ts_type === '09_8716400000' || 
    formState.ts_type === '10_871610' || 
    formState.ts_type === '11_890399' || 
    formState.ts_type === '12_8903' || 
    formState.engine_type === 'no_engine' || 
    formState.engine_type === 'electric'
	) { 
		return true
	} else {
		return false
	}
})

const isPowerDisabled = computed(() => {
	// выбор мощности невозможнен если выбраны мощности для двигателей с эд и двс 
	if (formState.power_hybrid_dvs || formState.power_hybrid_electro) return true

	if (
		formState.ts_type === '09_8716400000' || 
    formState.ts_type === '10_871610' || 
    formState.ts_type === '11_890399' || 
    formState.ts_type === '12_8903' || 
    formState.ts_type === '13_8702'
	) {
		return true
	} else {
		return false
	}
})

const isHybridEngine = computed(() => {
	if (formState.engine_type === 'diesel_electric' || formState.engine_type === 'petrol_electric') {
		return true
	} else {
		return false
	}
})

</script>

<template>
    <UForm ref="formRef" class="form" :state="formState" :validate-on="['change', 'blur', 'input']" :disabled="props.isLoading" @submit.prevent="onSubmit" @reset="onReset">
        <div class="calculator-container">
          <div class="calculator-row">
            <UFormField v-if="formState.ts_type === '00_8703'" class="text-md" label="Расчитать для:" size="xl" name="face">
              <URadioGroup v-model="formState.face" size="xs" variant="table" orientation="horizontal" :items="FACE_TYPES_OPTIONS" />
            </UFormField>
            <UFormField class="text-md" label="Тип ТС" size="xl" name="age">
              <USelect v-model="formState.ts_type" variant="outline" :ui="{ content: 'min-w-fit' }"  arrow :items="TS_TYPES_OPTIONS" class="w-full"/>
            </UFormField>
            <UFormField class="text-md" label="Возраст ТС" size="xl" name="age">
              <USelect v-model="formState.age"  arrow :items="AGE_OPTIONS" class="w-full"/>
            </UFormField>
          </div>
          <div class="calculator-row">
            <!-- <div class="cost-column"> -->
              <div class="cost-input">
                <UFormField class="text-md" required label="Стоймость" name="price" size="xl" >
                  <UInput v-model="formState.cost" v-maska="costMask" placeholder="стоймость" required variant="outline" min="1" class="text-md w-full"/>
                </UFormField>
                <UFormField class="text-md" label="" size="xl" name="currency">
                  <USelect v-model="formState.currency" required arrow :items="CURRENCY_OPTIONS" />
                </UFormField>
              </div>
              <!-- <UFormField class="text-md" name="pp_152_minpromtorg_cb">
                <UCheckbox v-model="formState.pp_152_minpromtorg_cb"  label="Авто растаможен при ввозе в ЕАЭС"/>
              </UFormField> -->
            <!-- </div> -->
            <UFormField class="text-md" :required="!isVolumeDisabled"  label="Объем двигателя, см3" size="xl" name="volume">
              <UInput v-model="formState.volume" v-maska="volumeMask" placeholder="объем" :required="!isVolumeDisabled" :disabled="isVolumeDisabled" class="text-md w-full"/>
            </UFormField>
            <UFormField class="text-md" label="Тип двигателя" size="xl" name="engineType" :disabled="isEngineTypeDisabled">
              <USelect v-model="formState.engine_type" :ui="{ content: 'min-w-fit' }"  arrow :items="ENGINE_TYPES_OPTIONS" class="w-full" :disabled="isEngineTypeDisabled"/>
            </UFormField>
          </div>
          <!-- <div v-if="formState.pp_152_minpromtorg_cb === true" class="calculator-row_minpromtorg">
            <UFormField class="text-md" :required="formState.pp_152_minpromtorg_cb" label="Руб, ср. стоимость Минпромторга" name="pp_152_minpromtorg_cost" size="lg" >
              <UInput v-model="formState.pp_152_minpromtorg_cost" v-maska="costMask" :required="formState.pp_152_minpromtorg_cb" variant="outline" class="text-md w-full"/>
            </UFormField>
            <UFormField class="text-md" label="Руб, уплачено: там. пошлина" name="pp_152_minpromtorg_poshl" size="lg" >
              <UInput v-model="formState.pp_152_minpromtorg_poshl" v-maska="costMask" variant="outline" min="1" class="text-md w-full"/>
            </UFormField>
            <UFormField class="text-md" label="Руб, уплачено: акциз" name="pp_152_minpromtorg_akciz" size="lg" >
              <UInput v-model="formState.pp_152_minpromtorg_akciz" v-maska="costMask" variant="outline" min="1" class="text-md w-full"/>
            </UFormField>
            <UFormField class="text-md" label="Руб, уплачено: НДС" name="pp_152_minpromtorg_nds" size="lg" >
              <UInput v-model="formState.pp_152_minpromtorg_nds" v-maska="costMask" variant="outline" min="1" class="text-md w-full"/>
            </UFormField>
          </div> -->
          <div class="calculator-row">
            <UFormField class="text-md" label="Масса, тонн" size="xl" name="mass" :disabled="isMassInputDisabled" :required="isMassInputRequired">
              <UInput v-model="formState.mass" placeholder="масса" class="text-md w-full" :disabled="isMassInputDisabled" :required="isMassInputRequired"/>
            </UFormField>
            <div v-if="!isHybridEngine" class="power-input">
              <UFormField class="text-md" required label="Мощность" size="xl" name="power" :disabled="isPowerDisabled">
                <UInput v-model="formState.power" v-maska="powerMask" placeholder="мощность" class="text-md w-full" required :disabled="isPowerDisabled"/>
              </UFormField>
              <div class="power-type">
                <UFormField class="text-md" name="powerType" :disabled="isPowerDisabled">
                  <URadioGroup v-model="formState.power_edizm" orientation="horizontal" :disabled="isPowerDisabled" size="xs" variant="table" :items="POWER_TYPES_OPTIONS" />
                </UFormField>
              </div>
            </div>
            <div v-if="isHybridEngine" class="power-input">
              <UFormField class="text-md" required label="Мощность ДВС" size="xl" name="power_hybrid_dvs">
                <UInput v-model="formState.power_hybrid_dvs" v-maska="powerMask" placeholder="Мощность двс" class="text-md w-full" required/>
              </UFormField>
              <div class="power-type">
                <UFormField class="text-md" name="powerType">
                  <URadioGroup v-model="formState.power_hybrid_dvs_edizm" orientation="horizontal" size="xs" variant="table" :items="POWER_TYPES_OPTIONS" />
                </UFormField>
              </div>
            </div>
            <div v-if="isHybridEngine" class="power-input">
              <UFormField class="text-md" required label="Мощность ЭД" size="xl" name="power_hybrid_electro">
                <UInput v-model="formState.power_hybrid_electro" v-maska="powerMask" placeholder="мощность эд" class="text-md w-full" required/>
              </UFormField>
              <div class="power-type">
                <UFormField class="text-md" name="power_hybrid_electro_edizm">
                  <URadioGroup v-model="formState.power_hybrid_electro_edizm" orientation="horizontal" size="xs" variant="table" :items="POWER_TYPES_OPTIONS" />
                </UFormField>
              </div>
            </div>
          </div>
          <!-- Additional points -->
          <div class="calculator-row">
			      <!-- 00_8703 автомобиль -->
            <UFormField v-if="formState.ts_type === '00_8703'" class="text-md mx-4" size="xl" name="offroad">
              <UCheckbox v-model="formState.offroad" label="Повышенной проходимости"/>
            </UFormField>
            <UFormField v-if="formState.ts_type === '00_8703'" class="text-md mx-4"  size="xl" name="caravan">
              <UCheckbox v-model="formState.caravan" label="Автодом" />
            </UFormField>
			      <!-- 04_8704 грузовик -->
            <UFormField v-if="formState.ts_type === '04_8704'" class="text-md mx-4" size="xl" name="forwarder">
              <UCheckbox v-model="formState.forwarder" label="Тип 'Форвардер'"/>
            </UFormField>
            <!-- 05_870410 самосвал -->
            <UFormField v-if="formState.ts_type === '05_870410'" class="text-md" label="Рама" size="xl" name="chassis">
              <URadioGroup v-model="formState.chassis" size="xs" variant="table" orientation="horizontal" :items="CHASSIS_TYPES_OPTIONS" />
            </UFormField>
            <!-- 12_8903 Катер -->
            <UFormField v-if="formState.ts_type === '12_8903'" class="text-md mx-4"  size="xl" name="boat_sea">
              <UCheckbox v-model="formState.boat_sea" label="Морского класса"/>
            </UFormField>
            <!-- If electric engine or hybrid -->
           <UFormField v-if="formState.engine_type === 'diesel_electric' || formState.engine_type === 'petrol_electric'" class="text-md mx-4" size="xl" name="boat_sea">
              <UCheckbox v-model="formState.mdvs_gt_m30ed" label="Мощность ДВС больше максимальной 30-минутной мощности ЭД" />
            </UFormField>
            <UFormField v-if="formState.engine_type === 'diesel_electric' || formState.engine_type === 'petrol_electric'" class="text-md mx-4" size="xl" name="sequential">
              <UCheckbox v-model="formState.sequential" label="Силовая установка последовательного типа" />
            </UFormField>
            <!-- If 13_8702 автобус -->
            <UFormField v-if="formState.ts_type === '13_8702'" class="text-md" label="Вместимость" size="xl" name="chassis">
              <URadioGroup v-model="formState.buscap" size="xs" variant="table" orientation="horizontal" :items="BUS_CAPACITY_OPTIONS" />
            </UFormField>
            
          </div>
          <div class="bus-eco-class">
            <UFormField v-if="formState.ts_type === '13_8702'" class="text-md mx-4"  size="xl" name="bus_municipal_cb">
              <UCheckbox v-model="formState.bus_municipal_cb" label="Для осуществления перевозок по межмуниципальным, смежным межрегиональным, межрегиональным и международным маршрутам регулярных перевозок"/>
            </UFormField>
            <UFormField v-if="formState.ts_type === '13_8702'" class="text-md mx-4" label="Эк. класс" size="xl" name="chassis">
              <URadioGroup v-model="formState.buscap" size="xs" variant="table" orientation="vertical" :items="BUS_ECO_CLASS_OPTIONS" />
            </UFormField>
          </div>
          
          <div class="actions">
            <UButton :loading="props.isLoading" size="xl" type="submit" variant="solid" label="Расчитать" color="primary" />
            <UButton :disabled="props.isLoading" size="xl" type="reset" variant="subtle" label="Сбросить" color="primary" />
          </div>
        </div>
      </UForm>
</template>

<style lang="css" scoped>
.form {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: var(--light-grey);
  box-shadow: 0 0 10px #a4a4a4;
  border-radius: 10px;
  padding: 16px;
}

.calculator-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-weight: 600;
}

.calculator-row {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  @media screen and (max-width: 1000px) {
    display: flex;
    /* justify-content: space-between; */
    width: 100%;
    flex-wrap: wrap;
    font-size: 1rem;
    gap: 6px;
  }
}

.calculator-row_minpromtorg {
  display: grid;
  grid-template-columns: 175px 175px 175px 175px;
  align-items: end;
  gap: 20px;
  @media screen and (max-width: 868px) {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    font-size: 1rem;
    gap: 6px;
  }
}

.bus-eco-class {
  display: flex;
  flex-direction: column;
  width: 740px;
  gap: 20px;
  @media screen and (max-width: 868px) {
    width: 100%;
    gap: 6px;
    font-size: 1rem;
  }
}



/* .cost-column {
  display: flex;
  flex-direction: column;
  gap: 6px; */
  .cost-input {
    display: flex;
    width: fit-content;
    align-items: flex-end;
    flex-direction: row;
    width: 100%;
    gap: 6px;
  }
/* } */

.power-input {
  display: flex;
  width: fit-content;
  flex-direction: row;
  gap: 6px;
  .power-type {
    display: flex;
    align-items: flex-end;
  }
}

.actions {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
}
</style>