// import * as zod from 'zod'


// const IFormValues = z.object({
// 	cost: z.number(),
// 	volume: z.number(),
// 	currency: z.string(),
// 	power: z.number(),
// 	engine_type: z.string(),
// 	power_edizm: z.string(),
// 	age: z.number(),
// })

const getTKSData = async (data: IFormValues): Promise<TKSResponse> => {

	const apiKey = process.env.TKS_KEY

	if (!apiKey) {
		throw new Error('No TKS_KEY provided')
	}

	const TKS_URL = `https://api1.tks.ru/auto.json/json/${apiKey}/legacy/`

	//TODO: errors + ZOD
	const queryParams = new URLSearchParams()

	Object.entries(data).forEach(([key, value]) => {
		queryParams.append(key, value)
	})

	const urlString = TKS_URL + '?' + queryParams.toString()
	console.log('urlString:', urlString)

	const res = await fetch(urlString)

	return await res.json() as TKSResponse
}

export default defineEventHandler(async (event) => {
	try {
	//TODO: ZOD
	//TODO: Ограничить доступ к апи по origin + HELMET + nuxt security

		const formValues = await readBody(event) as IFormValues

		const TKSData = await getTKSData(formValues)

		return TKSData
	} catch (error) {
		log('error', 'Error in /api/getvalues.post', error)
	}

});
// /legacy/?cost=1200000&volume=2000&currency=643&power=160&engine_type=petrol&power_edizm=ls&age=7