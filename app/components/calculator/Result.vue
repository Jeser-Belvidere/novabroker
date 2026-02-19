<script setup lang="ts">
import {CURRENCY_OPTIONS_MAP, AGE_OPTIONS_MAP, POWER_TYPES_MAP, ENGINE_TYPES_MAP} from './consts'
const props = defineProps<{
    result: TKSResponse | null
    input: IFormValues | null
}>()

const emits = defineEmits(['back'])

const prepareNumber = (number: string | undefined) => {
	if (!number) return number

	const numberWithoutComma = number.split('.')

	if (!numberWithoutComma) return number

	if (number.split('.').length > 1) {
		return [numberWithoutComma[0]!.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '), numberWithoutComma[1]].join('.')
	}

	return numberWithoutComma[0]!.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
}

const prepareNumberInString = (string: string | undefined) => {
	if (!string) return string

	const numberWithoutComma = string.split(' ')

	if (!numberWithoutComma) return string

	return [numberWithoutComma[0]!.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 '), numberWithoutComma[1]].join(' ')
}
</script>
<template>
    <div class="result-container">
        <div class="result-content">
            <div class="result-input">
            <div class="header">
                <h3>Введенные данные</h3>
                <h3>NOVABROKER</h3>
            </div>
                <table class="input-table">
                    <tbody>
                        <tr>
                            <th scope="col">Возраст:</th>
                            <td>{{ props.input?.age ? AGE_OPTIONS_MAP[props.input.age] : 'Не указано' }}</td>
                        </tr>
                        <tr>
                            <th scope="col">Стоймость автомобиля:</th>
                            <td>{{ props.input?.cost ? props.input.cost + ' ' + CURRENCY_OPTIONS_MAP[props.input.currency] : 'Не указано' }}</td>
                        </tr>
                        <tr>
                            <th scope="col">Тип двигателя:</th>
                            <td>{{ props.input?.engine_type ? ENGINE_TYPES_MAP[props.input.engine_type] : 'Не указано' }}</td>
                        </tr>
                        <tr>
                            <th scope="col">Мощность:</th>
                            <td>{{props.input?.power ? props.input?.power + ' ' + POWER_TYPES_MAP[props.input?.power_edizm] : 'Не указано' }}</td>
                        </tr>
                        <tr v-if="props.input?.volume && props.input?.engine_type != 'electric'">
                            <th scope="col">Объем двигателя:</th>
                            <td>{{ props.input?.volume + ' см3' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="result-output">

                <h3>Расчет таможенных сборов ввоза тс на {{ new Date(Date.now()).toLocaleDateString('ru-RU') }}</h3>
                <table>
						<thead>
							<tr>
								<th scope="col">Платеж</th>
								<th scope="col">Ставка</th>
								<th scope="col">Сумма (руб)</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">Таможенное оформление</th>
								<td class="numbers">{{ prepareNumberInString(props.result?.tam_oform?.name) }}</td>
								<td class="numbers">{{ prepareNumberInString(props.result?.tam_oform?.name) }}</td>
							</tr>
							<!-- V if  Единая ставка только для автомобилей b физлиц-->
							<tr v-if="props.input?.face === 'nat'">
								<th scope="row">Единая ставка</th>
								<td class="numbers">{{ props.result?.poshl?.name }}</td>
								<td class="numbers">{{ prepareNumber(props.result?.poshl?.value_rub) }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur' ||  props.input?.sequential === true || props.input?.engine_type === 'electric'" >
								<th scope="row">Пошлина</th>
								<td class="numbers">{{ props.result?.poshl?.name }}</td>
								<td class="numbers">{{ prepareNumber(props.result?.poshl?.value_rub) }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur' ||  props.input?.sequential === true || props.input?.engine_type === 'electric'" >
								<th scope="row">Акциз</th>
								<td class="numbers">{{ props.result?.akciz?.name }}</td>
								<td class="numbers">{{ prepareNumber(props.result?.akciz?.value_rub) }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur' ||  props.input?.sequential === true || props.input?.engine_type === 'electric'">
								<th scope="row">НДС</th>
								<td class="numbers">{{ props.result?.nds?.name }}</td>
								<td class="numbers">{{ prepareNumber(props.result?.nds?.value_rub) }} руб.</td>
							</tr>
							<tr>
								<th scope="row">Утиль сбор</th>
								<td class="numbers">{{ prepareNumber(props.result?.util_sbor.value_base) }} руб. x {{ props.result?.util_sbor.value_coef }}</td>
								<td class="numbers">{{ prepareNumber(props.result?.util_sbor.value_rub) }} руб.</td>
							</tr>
							</tbody>
							<tfoot>
							<tr>
								<th class="result-sum-row-header" colspan="2" scope="row">Итого c утилизационным сбором</th>
								<td class="result-sum-row-td numbers">{{ prepareNumber(props.result?.sum_util.value_rub) }} руб.</td>
							</tr>
							</tfoot>

                </table>
            </div>
        </div>
        <div class="result-actions">
            <UButton variant="solid" label="Вернуться" color="primary" size="xl" @click="emits('back')" />
            <!-- <UButton variant="outline" label="Скачать" color="primary" @click="emits('back')" /> -->
        </div>
        <div class="hint">Примерные результаты расчета. Для точного расчета обратитесь к нашим специалистам <span style="color: red;">*</span> </div>
    </div>
</template>

<style lang="css" scoped>
/* .numbers {
    font-family: "Courier New", monospace;
    letter-spacing: 0.8px;
    font-weight: 400;
} */
.hint {
    font-weight: 600;
    font-size: 0.8rem;
    letter-spacing: 0.5px;
    line-height: 32px;
    letter-spacing: 1px;
}

.result-container {
	font-weight: 600;
    display: flex;
    gap: 16px;
    width: 900px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--light-grey);
    box-shadow: 0 0 10px #a4a4a4;
    border-radius: 10px;
    padding: 16px;
    font-size: 1.1rem;
    @media screen and (max-width: 868px) {
        width: 600px;
    }

	@media screen and (max-width: 620px) {
        width: 400px;
        padding: 8px;
        font-size: 1rem;
	    font-weight: 600;
    }

	@media screen and (max-width: 440px) {
        width: 100%;
    }

    .result-content {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        .result-input {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;
            .header {
                display: flex;
                width: 100%;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                :last-child {
                    color: var(--black);
                }
            }

            table {
                
                width: 100%;
                border-collapse: separate; 
                border-spacing: 0;
                border: 1px solid var(--warm-beige);
                border-radius: 10px;       
                > tbody {
                    > tr {
                        td, th {
                            padding: 8px;
                            border-bottom: solid 1px var(--warm-beige);
                        }
						th {
							text-align: left;
						}
                    }
                }
                tbody > :last-child {
                    td, th {
                        border-bottom: none;
                    }
                }
            }
        }

        .result-output {
            display: flex;
            width: 100%;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            gap: 16px;
	
			table {

				th {
					text-align: left;
				}

				width: 100%;
                border-collapse: separate; 
                border-spacing: 0;
                border: 1px solid var(--warm-beige);
                border-radius: 10px;       
				* {
                    padding: 8px;
					border-bottom: solid 1px var(--warm-beige);
					border-right: solid 1px var(--warm-beige);
				}

				tr :last-child {
					border-right: none;
				}

				tfoot :last-child {
					td, th {
						border-bottom: none;
					}
				}
			}
        }
    }
}

h3 {
    font-size: 1.5rem;
    letter-spacing: 2px;
    font-weight: 600;
    @media screen and (max-width: 620px) {
        font-size: 1.2rem;
    }
}

.result-sum-row-header {
    background-color: var(--warm-beige);
    border-bottom-left-radius: 8px;
}

.result-sum-row-td {
	min-width: 110px;
    background-color: var(--warm-beige);
    border-bottom-right-radius: 8px;
}
</style>