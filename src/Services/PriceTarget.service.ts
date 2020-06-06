import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const priceTarget = async (symbol: string): Promise<PriceTarget> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/price-target`);

  return new PriceTarget(data);
};

export interface IEXPriceTarget {
  symbol: string;
  updatedDate: string;
  priceTargetAverage: number;
  priceTargetHigh: number;
  priceTargetLow: number;
  numberOfAnalysts: number;
}

export class PriceTarget extends DynamicObject implements IEXPriceTarget {
  public symbol: string = "";
  public updatedDate: string = "";
  public priceTargetAverage: number = 0;
  public priceTargetHigh: number = 0;
  public priceTargetLow: number = 0;
  public numberOfAnalysts: number = 0;
}
