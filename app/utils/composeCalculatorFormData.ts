export const composeCalculatorFormData = (data: IFormValues) => {
	const dataClone = JSON.parse(JSON.stringify(data)) as IFormValues
	
	dataClone.cost = dataClone.cost.replaceAll(' ', '').trim()
	dataClone.volume = dataClone.volume.replaceAll(' ', '').trim()

	if (dataClone.mass) {
		dataClone.mass = dataClone.mass.replaceAll(' ', '').trim()
	}

	if (dataClone.power) {
		dataClone.power = dataClone.power.replaceAll(' ', '').trim()
	}

	if (dataClone.power_hybrid_dvs) {
		dataClone.power_hybrid_dvs = dataClone.power_hybrid_dvs.replaceAll(' ', '').trim()
	}

	if (dataClone.power_hybrid_electro) {
		dataClone.power_hybrid_electro = dataClone.power_hybrid_electro.replaceAll(' ', '').trim()
	}

	if (dataClone.sequential) {
		dataClone.power = dataClone.power_hybrid_electro
		dataClone.power_edizm = dataClone.power_hybrid_electro_edizm
		
		delete dataClone.power_hybrid_dvs
		delete dataClone.power_hybrid_electro
	}
	
	return dataClone
}