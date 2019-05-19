import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const earningsToday = async (
  symbol: string,
): Promise<EarningsToday[]> => {
  const endpoint = `/stock/${symbol}/today-earnings/`;
  const data: KVP = await iexApiRequest(endpoint);
  console.log(data)
  const bto: KVP[] = data.bto;
  const amc: KVP[] = data.amc;
  const dmt: KVP[] =data.dmt;

  const result = bto.map((o: KVP) => {
    const r = Object.assign(new EarningsToday(), o);
    return r;
  });
  return result;
};

export interface IEXEarningsToday {
  symbol: string;
  consensusEPS: number;
  announceTime: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  quote: KVP
}

export class EarningsToday implements IEXEarningsToday {
  public symbol: string="";
  public consensusEPS: number = 0;
  public announceTime: number = 0;
  public numberOfEstimates: number = 0;
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public quote: KVP = {};
}