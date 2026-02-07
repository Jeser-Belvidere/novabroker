<script setup lang="ts">
import {CURRENCY_OPTIONS_MAP, AGE_OPTIONS_MAP, POWER_TYPES_MAP, ENGINE_TYPES_MAP} from './consts'
const props = defineProps<{
    result: TKSResponse | null
    input: IFormValues | null
}>()

const emits = defineEmits(['back'])
</script>
<template>
    <div class="result-container">
        <div class="result-content">
            <div class="result-input">
                <h3>Введенные данные:</h3>
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
                        <tr>
                            <th scope="col">Объем двигателя:</th>
                            <td>{{ props.input?.volume + ' см3' }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="result-output">
                <h3>Таможенные сборы:</h3>
                <table>
					<caption>
                        Примерные результаты расчета. Для точного расчета обратитесь к нашим специалистам *
                    </caption>
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
								<td>{{ props.result?.tam_oform?.name }}</td>
								<td>{{ props.result?.tam_oform?.name }}</td>
							</tr>
							<!-- V if  Единая ставка только для автомобилей b физлиц-->
							<tr v-if="props.input?.face === 'nat'">
								<th scope="row">Единая ставка</th>
								<td>{{ props.result?.poshl?.name }}</td>
								<td>{{ props.result?.poshl?.value_rub }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur'">
								<th scope="row">Пошлина</th>
								<td>{{ props.result?.poshl?.name }}</td>
								<td>{{ props.result?.poshl?.value_rub }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur'">
								<th scope="row">Акциз</th>
								<td>{{ props.result?.akciz?.name }}</td>
								<td>{{ props.result?.akciz?.value_rub }} руб.</td>
							</tr>
                            <tr v-if="props.input?.face === 'jur'">
								<th scope="row">НДС</th>
								<td>{{ props.result?.nds?.name }}</td>
								<td>{{ props.result?.nds?.value_rub }} руб.</td>
							</tr>
							<tr>
								<th scope="row">Утилизационный сбор</th>
								<td>{{ props.result?.util_sbor.value_base }} руб. x {{ props.result?.util_sbor.value_coef }}</td>
								<td>{{ props.result?.util_sbor.value_rub }} руб.</td>
							</tr>
							</tbody>
							<tfoot>
							<tr>
								<th colspan="2" scope="row">Итого c утилизационным сбором</th>
								<td class="bold">{{ props.result?.sum_util.value_rub }} руб.</td>
							</tr>
							</tfoot>

                </table>
            </div>
        </div>
        <div class="result-actions">
            <UButton variant="outline" label="Вернуться" color="primary" @click="emits('back')" />
            <!-- <UButton variant="outline" label="Скачать" color="primary" @click="emits('back')" /> -->
        </div>
    </div>
</template>

<style lang="css" scoped>
.result-container {
    display: flex;
    width: 900px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 868px) {
        width: 600px;
    }

	@media screen and (max-width: 620px) {
        width: 400px;
    }

	@media screen and (max-width: 440px) {
        width: 340px;
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
				caption {
					caption-side: bottom;
					padding: 10px;
					border: none;
				}

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
    margin-bottom: 10px;
    font-weight: 600;
}

.bold {
	font-weight: 600;
}
</style>