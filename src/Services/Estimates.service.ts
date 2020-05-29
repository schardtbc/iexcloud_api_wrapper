import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const estimates = async (
  symbol: string,
  lastN: number = 1
): Promise<Estimates[]> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/estimates/${lastN}`);

  return data.estimates.map((o: KVP) => new Estimates({
    ...o,
    symbol
  }));
};

export interface IEXEstimates {
  consensusEPS: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  reportDate: string;
}

export class Estimates extends DynamicObject {
  public consensusEPS: number = 0;
  public numberOfEstimates: number = 0;
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public reportDate: string = "";
}
