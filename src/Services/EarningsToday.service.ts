import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const earningsToday = async (
  symbol: string
): Promise<EarningsToday[]> => {
  const { bto } = await iexApiRequest(`/stock/${symbol}/today-earnings/`);

  return bto.map((o: KVP) => new EarningsToday(o));
};

export interface IEXEarningsToday {
  symbol: string;
  consensusEPS: number;
  announceTime: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  quote: KVP;
}

export class EarningsToday extends DynamicObject implements IEXEarningsToday {
  public symbol: string = "";
  public consensusEPS: number = 0;
  public announceTime: number = 0;
  public numberOfEstimates: number = 0;
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public quote: KVP = {};
}
