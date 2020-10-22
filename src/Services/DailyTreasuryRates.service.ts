import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

/**
 * Daily Treasury Rates
 * https://iexcloud.io/docs/api/#daily-treasury-rates
 *
 * Provides the time series data of daily constant maturity rate for treasuries.
 *
 * - Data Weigthing: 1000 per symbol per date
 *
 * @param symbol - a treasury symbol
 * @returns array of records
 *
 */
export const dailyTreasuryRates = async (
  symbol: TreasurySymbolType
): Promise<readonly IEXDailyTreasuryRate[]> => {
  const dailyTreasuryRatesData: KVP = await iexApiRequest(
    `/time-series/treasury/${symbol}`
  );

  return dailyTreasuryRatesData.map(
    (o: KVP) =>
      new DailyTreasuryRate({
        symbol,
        ...o,
      })
  );
};

export interface IEXDailyTreasuryRate {
  /** Treasury Symbol */
  readonly symbol: string;
  /** Rate value of the treasury */
  readonly value: number;
  /** Id of the treasury */
  readonly id: string;
  /** Key of the treasury */
  readonly key: string;
  /** Sub key of the treasury */
  readonly subkey: string;
  /** Last updated time of the data point represented as millisecond epoch. */
  readonly updated: number;
}

export class DailyTreasuryRate extends DynamicObject
  implements IEXDailyTreasuryRate {
  public symbol: string = "";
  public value: number = 0;
  public id: string = "";
  public key: string = "";
  public subkey: string = "";
  public updated: number = 0;
}

export type TreasurySymbolType =
  | "DGS30" //	30 Year constant maturity rate
  | "DGS20" //	20 Year constant maturity rate
  | "DGS10" //	10 Year constant maturity rate
  | "DGS5" //	5 Year constant maturity rate
  | "DGS2" //	2 Year constant maturity rate
  | "DGS1" //	1 Year constant maturity rate
  | "DGS6MO" //	6 Month constant maturity rate
  | "DGS3MO" //	3 Month constant maturity rate
  | "DGS1MO"; //	1 Month constant maturity rate
