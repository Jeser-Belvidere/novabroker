import convert from "xml2js";
import { log } from "./Logger";

//US dollar, Chinese yuan, EURO
export const CURRENCY_CODES = ["USD", "CNY", "EUR"] as const;

type currencyCode = (typeof CURRENCY_CODES)[number];
interface IValute {
  NumCode: [string];
  CharCode: [string];
  Name: [string];
  Value: [string];
}

export type TCurrencyData = Record<
  currencyCode,
  { name: string; value: string }
> & {date: string} | null;

class CurrencyStorage {
  private instance: null | boolean = null;
  private currencyData: TCurrencyData = null;
  constructor() {
    if (this.instance) {
      throw new Error(
        "Cannot instantiate Currency Storage Singleton multiple times."
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
      if (CURRENCY_CODES.includes(item["CharCode"][0] as currencyCode)) {
        return item;
      }
    }).map((item: IValute) => {
      return {
        code: item["CharCode"][0],
        value: item["Value"][0],
      };
    });
    return filterdValute;
  }

  public async updateCurrencyData() {
    try {
      log("info", "Updating currency data...");
      await fetch("https://www.cbr.ru/scripts/XML_daily.asp")
        .then((res) => res.text())
        .then((data) => {
          convert.parseString(data, {}, (err, result) => {
            if (err) {
              log("info", "Updating currency data failed...");
              throw err;
            }

            const {
              ValCurs: {
                $: { Date: date },
              },
            } = result;

            this.currencyData = {
              date,
              USD: {
                name: "Американский доллар",
                value: "0",
              },
              CNY: {
                name: "Китайский юань",
                value: "0",
              },
              EUR: {
                name: "Евро",
                value: "0",
              },
            };

            const formattedCurrency = this.formatCurrencyData(result);

            for (const item of formattedCurrency) {
              this.currencyData[item.code as currencyCode].value = Number(item.value.replace(
                ",",
                "."
              )).toFixed(2).toString();
            }

            log("info", `Currency data updated: ${JSON.stringify(this.currencyData)}`);
          });
        }).catch((err) => {
          log("error", "Error during updating currency data, will try again in 1 minute", err);
          setTimeout(() => {
            this.updateCurrencyData();
          }, 60000);
        });
    } catch (e) {
      log("error", "Error during updating currency data", e);
      setTimeout(() => {
        this.updateCurrencyData();
      }, 5000);
    }
  }

  public getCurrencyData(): TCurrencyData | null {
    return this.currencyData;
  }
}

const currencyStorage = new CurrencyStorage();

export { currencyStorage as CurrencyStorage };
