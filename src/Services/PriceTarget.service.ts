import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const priceTarget = async (symbol: string): Promise<PriceTarget> => {
  const endpoint = `/stock/${symbol}/price-target`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new PriceTarget(), data);
  return result;
};

export interface IEXPriceTarget {
  symbol: string;
  updatedDate: string;
  priceTargetAverage: number;
  priceTargetHigh: number;
  priceTargetLow: number;
  numberOfAnalysts: number;
}

export class PriceTarget implements IEXPriceTarget {
  public symbol: string = "";
  public updatedDate: string = "";
  public priceTargetAverage: number = 0;
  public priceTargetHigh: number = 0;
  public priceTargetLow: number = 0;
  public numberOfAnalysts: number = 0;
}
