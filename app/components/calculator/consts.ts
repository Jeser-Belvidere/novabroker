export const POWER_TYPES_OPTIONS = [
	{label: 'Л.С.', value:'ls'}, 
	{value: 'kwt', label: 'кВт'}
]

export const FACE_TYPES_OPTIONS = [
	{label: 'Физическое лицо', value:'nat'}, 
	{label: 'Юридическое лицо', value:'jur'}, 

]

export const ENGINE_TYPES_OPTIONS = [
	{label: 'Бензиновый', value:'petrol'}, 
	{label: 'Дизельный', value:'diesel'}, 
	{label: 'Бензиновый гибрид', value:'petrol_electric'}, 
	{label: 'Дизельный гибрид', value:'diesel_electric'}, 
	{label: 'Электрический', value:'electric'}, 
	{label: 'Без двигателя', value:'no_engine', disabled: true},
]

export const CHASSIS_TYPES_OPTIONS = [
	{label: 'Шарнирно - сочленённая', value:'shs'}, 
	{label: 'Не шарнирно - сочленённая, 2 оси', value:'nshs'}, 
	{label: 'Не шарнирно - сочленённая, более 2 осей', value:'nshs2'}, 
]

export const AGE_OPTIONS = [
	{label: 'меньше 3-х лет', value: 3}, 
	{label: '3-5 лет', value: 35}, 
	{label: '5-7 лет', value: 57}, 
	{label: 'больше 7 лет', value: 7}
]

export const TS_TYPES_OPTIONS = [
	{label: 'Автомобиль', value: '00_8703'}, 
	{label: 'Пикап', value: '00_8704'},
	{label: 'Квадроцикл', value: '01_8703'},
	{label: 'Гольф-кар', value: '02_8703'},
	{label: 'Снегоход', value: '03_8703101100'},
	{label: 'Грузовик', value: '04_8704'},
	{label: 'Самосвал', value: '05_870410'},
	{label: 'Мотоцикл', value: '06_8711'},
	{label: 'Мотороллер', value: '07_8711201000'},
	{label: 'Мопед', value: '08_8711100000'},
	{label: 'Автоприцеп', value: '09_8716400000'},
	{label: 'Дом-автоприцеп', value: '10_871610'},
	{label: 'Водный мотоцикл', value: '11_890399'},
	{label: 'Катер (яхта, лодка)', value: '12_8903'},
	{label: 'Автобус', value: '13_8702'},
]

export const CURRENCY_OPTIONS = [
	{label: 'RUB', value: 643},
	{label: 'USD', value: 840}, 
	{label: 'EUR', value: 978}, 
	{label: 'CNY', value: 156},
	{label: 'KRW', value: 410},
]

export const BUS_CAPACITY_OPTIONS = [
	{label: 'Более 120 человек', value: 'gt120'},
	{label: 'Менее 120 человек', value: 'lt120'}, 
]

export const BUS_ECO_CLASS_OPTIONS = [
	{label: 'экологического класса 5, с мощностью двигателя более 308 кВт, габаритной длиной более 13 м, имеющие более 55 посадочных мест, включая водителя, объем багажного отсека более 12 м3', value: 'lt120_ec5'},
	{label: 'прочие экологического класса 4 или выше, габаритной длиной не менее 11,5 м, имеющие не менее 41 посадочного места, включая водителя, объем багажного отсека не менее 5 м3 и предназначенные для перевозки только сидящих пассажиров и их багажа', value: 'lt120_ec4'}, 
]

export const CURRENCY_OPTIONS_MAP: Record<number, string> = CURRENCY_OPTIONS.reduce((acc, cur) => ({...acc, [cur.value]: cur.label}), {})
export const AGE_OPTIONS_MAP: Record<number, string> = AGE_OPTIONS.reduce((acc, cur) => ({...acc, [cur.value]: cur.label}), {})
export const POWER_TYPES_MAP: Record<string, string> = POWER_TYPES_OPTIONS.reduce((acc, cur) => ({...acc, [cur.value]: cur.label}), {})
export const ENGINE_TYPES_MAP: Record<string, string> = ENGINE_TYPES_OPTIONS.reduce((acc, cur) => ({...acc, [cur.value]: cur.label}), {})