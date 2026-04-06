import { z } from 'zod'

const engineTypes = ['petrol', 'diesel', 'petrol_electric', 'diesel_electric', 'electric', 'no_engine'] as const
const powerUnits = ['kvt', 'ls'] as const
const ages = ['3', '35', '57', '7'] as const
const faceTypes = ['nat', 'jur'] as const
const chassisTypes = ['shs', 'nshs', 'nshs2'] as const
const busCapacities = ['gt120', 'lt120', 'lt120_ec4', 'lt120_ec5'] as const

const tsTypes = [
	'00_8703', '00_8704', '01_8703', '02_8703', '03_8703101100',
	'04_8704', '05_870410', '07_8711201000', '08_8711100000',
	'09_8716400000', '10_871610', '11_890399', '12_8903', '13_8702', '06_8711', '06_8711', '06_8711'
] as const

const formValuesSchema = z.object({
	cost: z.string().min(1, 'Cost is required'),
	volume: z.string().min(1, 'Volume is required'),
	currency: z.string().min(1, 'Currency is required'),
	power: z.string().optional(),
	engine_type: z.enum(engineTypes),
	power_edizm: z.enum(powerUnits).optional(),
	power_hybrid_dvs: z.string().optional() ,
	power_hybrid_dvs_edizm: z.enum(powerUnits).optional(),
	power_hybrid_electro: z.string().optional() ,
	power_hybrid_electro_edizm: z.enum(powerUnits).optional(),
	age: z.enum(ages),
	face: z.enum(faceTypes),
	ts_type: z.enum(tsTypes),
	mass: z.string().optional(),
	offroad: z.boolean().optional(),
	caravan: z.boolean().optional(),
	chassis: z.enum(chassisTypes).optional(),
	forwarder: z.boolean().optional(),
	buscap: z.enum(busCapacities).optional(),
	mdvs_gt_m30ed: z.boolean().optional(),
	sequential: z.boolean().optional(),
	boat_sea: z.boolean().optional(),
	pp_152_minpromtorg_cb: z.boolean().optional(),
	pp_152_minpromtorg_cost: z.number().optional(),
	pp_152_minpromtorg_poshl: z.number().optional(),
	pp_152_minpromtorg_akciz: z.number().optional(),
	pp_152_minpromtorg_nds: z.number().optional(),
	bus_municipal_cb: z.boolean().optional(),
})

type IFormValues = z.infer<typeof formValuesSchema>

const getTKSData = async (data: IFormValues): Promise<TKSResponse | { error: unknown }> => {
	try {
		const apiKey = process.env.TKS_KEY

		if (!apiKey) {
			throw new Error('No TKS_KEY provided')
		}

		const TKS_URL = `https://api1.tks.ru/auto.json/json/${apiKey}/legacy/`

		const queryParams = new URLSearchParams()

		Object.entries(data).forEach(([key, value]) => {
			if (value !== undefined && value !== null) {
				queryParams.append(key, String(value))
			}
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
		const body = await readBody(event)
		const result = formValuesSchema.safeParse(body)

		if (!result.success) {
			log('error', 'ZOD error in /api/getvalues.post', result.error.issues)
			throw createError({
				statusCode: 400,
			})
		}

		const TKSData = await getTKSData(result.data)
		return TKSData

	} catch (error) {
		if ((error as { statusCode?: number }).statusCode) {
			throw error
		}

		log('error', 'Error in /api/getvalues.post', error)
	}
});