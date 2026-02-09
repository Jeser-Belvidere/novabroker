// import * as z from 'zod'

//  cost: string,
// 	volume: string,
// 	currency: string, //TODO:
// 	power: string,
// 	engine_type: 'petrol'| 'diesel'|'petrol_electric'| 'diesel_electric'| 'electric'| 'no_engine',
// 	power_edizm: 'kvt' | 'ls',
// 	age: '3' | '35' | '57' | '7'
// 	face: 'nat' | 'jur' 
// 	ts_type: '00_8703' | '00_8704' | '01_8703' | '02_8703' | '03_8703101100' | '04_8704' | '05_870410' | '07_8711201000' | '08_8711100000' | '09_8716400000' | '10_871610' | '11_890399' | '12_8903' | '13_8702'
// 	mass?: string
// 	offroad?: boolean
// 	caravan?: boolean
// 	chassis?: 'shs' | 'nshs' | 'nshs2'
// 	forwarder?: boolean
// 	buscap?: 'gt120' | 'lt120' | 'lt120_ec4' | 'lt120_ec5' // lt120 - менее 120 пасажиров | gt120 - более 120 пасажиров
// 	mdvs_gt_m30ed?: boolean // Мощность ДВС больше максимальной 30-минутной мощности ЭД
//   sequential?: boolean // Силовая установка последовательного типа
// 	boat_sea?: boolean
// 	pp_152_minpromtorg_cb?: boolean
// 	pp_152_minpromtorg_cost?: number
// 	pp_152_minpromtorg_poshl?: number
// 	pp_152_minpromtorg_akciz?: number
// 	pp_152_minpromtorg_nds?: number
//   bus_municipal_cb?: boolean

// const test = z.object({
// 	cost: z.string(),
// 	volume: z.string(),
// 	currency: z.string(),
// 	power: z.string(),
// 	engine_type: z.string(),
// 	power_edizm: z.string(),
// 	age: z.string(),
// })

const getTKSData = async (data: IFormValues): Promise<TKSResponse | {error: unknown}> => {
	try {
		const apiKey = process.env.TKS_KEY
		//TODO: ZOD

		if (!apiKey) {
			throw new Error('No TKS_KEY provided')
		}

		const TKS_URL = `https://api1.tks.ru/auto.json/json/${apiKey}/legacy/`

		const queryParams = new URLSearchParams()

		Object.entries(data).forEach(([key, value]) => {
			queryParams.append(key, value)
		})

		const urlString = TKS_URL + '?' + queryParams.toString()

		const res = await fetch(urlString)

		if (res.status === 500) {
			throw new Error('Ошибка на стороне интегратора')
		}

		return await res.json()
	} catch (error) {
		log('error', 'Error in /api/getvalues.post', `${error}, data: ${JSON.stringify(data)}` )
		return {
			error: (error as Error).message
		}
	}

}

export default defineEventHandler(async (event) => {
	try {
		const formValues = await readBody(event) as IFormValues

		const TKSData = await getTKSData(formValues)

		return TKSData
	} catch (error) {
		log('error', 'Error in /api/getvalues.post', error)
	}

});