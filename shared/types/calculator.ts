export interface TKSRequest {
  cost: string,
	volume: string,
	currency: string, //TODO:
	power: string,
	engine_type: 'petrol'| 'diesel'|'petrol_electric'| 'diesel_electric'| 'electric'| 'no_engine',
	power_edizm: 'kvt' | 'ls',
	age: '3' | '35' | '57' | '7'
	face: 'nat' | 'jur' 
	ts_type: '00_8703' | '00_8704' | '01_8703' | '02_8703' | '03_8703101100' | '04_8704' | '05_870410' | '07_8711201000' | '08_8711100000' | '09_8716400000' | '10_871610' | '11_890399' | '12_8903' | '13_8702'
	mass?: string
	offroad?: boolean
	caravan?: boolean
	chassis?: 'shs' | 'nshs' | 'nshs2'
	forwarder?: boolean
	buscap?: 'gt120' | 'lt120' | 'lt120_ec4' | 'lt120_ec5' // lt120 - менее 120 пасажиров | gt120 - более 120 пасажиров
	mdvs_gt_m30ed?: boolean // Мощность ДВС больше максимальной 30-минутной мощности ЭД
  sequential?: boolean // Силовая установка последовательного типа
	boat_sea?: boolean
	pp_152_minpromtorg_cb?: boolean
	pp_152_minpromtorg_cost?: number
	pp_152_minpromtorg_poshl?: number
	pp_152_minpromtorg_akciz?: number
	pp_152_minpromtorg_nds?: number
  bus_municipal_cb?: boolean
  sh2017?: boolean //TODO ????
}

export type IFormValues = TKSRequest

export interface TKSResponse {
  util_sbor_pp_152: {
    value_util_rub: string,
    value_util_rub_sale: string
  },
  nds: {
    //fiz
    value_stp_usd?: string,
    value_stp_rub?: string,
    name_stp?: string
    //jur
    name?: string
    value_rub?: string
    value_usd?: string
  },
  akciz: {
    value_usd: string,
    value_stp_rub: string,
    value_stp_usd: string,
    name: string,
    value_rub: string,
    name_stp: string
  },
  depozit: {
    value_eur: string,
    value_rub: string,
    name: string,
    value_usd: string
  },
  sum_util_pp_152: {
    value_rub: string,
    value_rub_sale: string,
    value_stp_rub: string
  },
  poshl: {
    name_pp_152_minpromtorg: string,
    value_stp_rub: string,
    value_usd: string,
    name_stp_pp_152_minpromtorg: string,
    value_stp_usd: string,
    name_stp: string,
    value_stp_rub_pp_152_minpromtorg: string,
    name: string,
    value_rub_pp_152_minpromtorg: string,
    value_rub: string
  },
  pp_152_minpromtorg_cb: Record<string, unknown>,
  poshl_pp_152: {
    name_stp: string,
    name_stp_pp_152_minpromtorg: string,
    value_stp_usd: string,
    name_pp_152_minpromtorg: string,
    value_usd: string,
    value_stp_rub: string,
    value_stp_rub_pp_152_minpromtorg: string,
    value_rub_pp_152_minpromtorg: string,
    value_rub: string,
    name: string
  },
  sum: {
    value_rub: string,
    name: string,
    value_stp_usd: string,
    value_stp_rub: string,
    value_usd: string
  },
  sum_util: {
    value_usd: string,
    value_stp_rub: string,
    name: string,
    value_stp_usd: string,
    value_rub_sale: string,
    value_rub: string
  },
  util_sbor: {
    value_rub: string,
    value_util_rub_sale: string,
    util_coef_sale: string,
    util_base_sale: string,
    value_usd: string,
    value_coef: string,
    value_base: string
  },
  tam_oform: {
    value_usd: string,
    name: string,
    value_rub: string
  },
  pp_152: {
    pp_152_minpromtorg_poshl: string,
    pp_152_minpromtorg_nds: string,
    Ka: string,
    Knds: string,
    Ktp: string,
    pp_152_minpromtorg_akciz: string,
    pp_152_minpromtorg_cost: string
  }
}


