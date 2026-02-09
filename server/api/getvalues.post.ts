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
		console.log('urlString:', urlString)

		const res = await fetch(urlString)

		console.log(res.status)
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