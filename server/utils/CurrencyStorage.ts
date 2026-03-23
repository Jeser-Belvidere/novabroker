import convert from 'xml2js';
import { log } from './Logger';

//US dollar, Chinese yuan, EURO
const CURRENCY_CODES = ['USD', 'CNY', 'EUR', 'KRW'] as const;

type currencyCode = (typeof CURRENCY_CODES)[number];
interface IValute {
  NumCode: [string];
  CharCode: [string];
  Name: [string];
  Value: [string];
  Nominal: ['1' | '10' | '100' | '1000' | '10000' | '100000'];
}

export type TCurrencyData =
  | (Record<currencyCode, { name: string; value: string, diff?: 'bigger' | 'smaller' | 'equal' }>)
  | null;

class CurrencyStorage {
	private instance: null | boolean = null;
	private currencyData: TCurrencyData = null;
	private errorTimeout: NodeJS.Timeout | null = null;
	constructor() {
		if (this.instance) {
			throw new Error(
				'Cannot instantiate Currency Storage Singleton multiple times.'
			);
		}

		this.instance = true;
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private formatCurrencyData(data: any) {
		const {
			ValCurs: { Valute },
		} = data;

		const filterdValute = Valute.filter((item: IValute) => {
			if (CURRENCY_CODES.includes(item['CharCode'][0] as currencyCode)) {
				return item;
			}
		}).map((item: IValute) => {
			const { Nominal, Value } = item;

			let valuteValue: number | string = Number(Value[0].replace(',', '.'));
			const nominalValue = Number(Nominal[0]) as
        | 1
        | 10
        | 100
        | 1000
        | 10000
        | 100000;

			if (nominalValue !== 1) {
				valuteValue /= nominalValue;
			}

			return {
				code: item['CharCode'][0],
				value: valuteValue.toString().slice(0, 5),
			};
		});
		return filterdValute;
	}

	/**
	 * 
	 * @param date dd/mm/yyyy
	 */
	private async fetchCurrency(dateString: string): Promise<TCurrencyData> {
		return new Promise((resolve, reject) => {
			fetch(
				`https://www.cbr.ru/scripts/XML_daily.asp?date_req=${dateString}`
			)
				.then((res) => res.text())
				.then((data) => {
					convert.parseString(data, {}, (err, result) => {
						if (err) {
							log('info', 'Updating currency data failed...');
							reject(err);
						}

						const resultObj = {
							USD: {
								name: 'Американский доллар',
								value: '0',
							},
							CNY: {
								name: 'Китайский юань',
								value: '0',
							},
							EUR: {
								name: 'Евро',
								value: '0',
							},
							KRW: {
								name: 'Вон',
								value: '0',
							},
						};

						const formattedCurrency = this.formatCurrencyData(result);

						for (const item of formattedCurrency) {
							resultObj[item.code as currencyCode].value = item.value;
						}

						resolve(resultObj)
					});
				})
		});

		

	}

	public async updateCurrencyData() {
		const todayDate = new Date().toLocaleDateString('ru-RU');
		const previousDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('ru-RU');
		try {
			if (this.errorTimeout) {
				clearTimeout(this.errorTimeout);
			}

			log('info', 'Updating currency data...');
			const todayCurrencyData = await this.fetchCurrency(todayDate);
			const previousCurrencyData = await this.fetchCurrency(previousDate);

			this.currencyData = todayCurrencyData;

			if (previousCurrencyData) {
				for (const key in this.currencyData) {
					const previousValue = Number(previousCurrencyData[key as currencyCode].value);
					const todayValue = Number(this.currencyData[key as currencyCode].value);

					if (todayValue > previousValue) {
						this.currencyData[key as currencyCode].diff = 'bigger';
					} else if (todayValue < previousValue) {
						this.currencyData[key as currencyCode].diff = 'smaller';
					} else {
						this.currencyData[key as currencyCode].diff = 'equal';
					}

				}
			} else {
				log('error', 'Error during comparing currency data, previousCurrencyData is null');
			}
			
			log('info', `Previous currency data: ${JSON.stringify(previousCurrencyData)}, DATE: ${previousDate}`);
			log('info', `Currency data updated: ${JSON.stringify(todayCurrencyData)}, DATE: ${todayDate}`);
		} catch (e) {
			log(
				'error',
				'Error during updating currency data, will try again in 5 minute',
				e
			);
      
			this.errorTimeout = setTimeout(() => {
				this.updateCurrencyData();
			}, 60000 * 5);
		}
	}

	public getCurrencyData(): TCurrencyData | null {
		return this.currencyData;
	}
}

const currencyStorage = new CurrencyStorage();

export { currencyStorage as CurrencyStorage };
