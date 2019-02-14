import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const estimates = async (
  symbol: string,
  lastN: number = 1
): Promise<Estimates[]> => {
  const endpoint = `/stock/${symbol}/estimates/${lastN}`;
  const data: KVP = await iexApiRequest(endpoint);
  const tmp: KVP[] = data.estimates;
  const result = tmp.map((o: KVP) => {
    const r = Object.assign(new Estimates(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXEstimates {
  consensusEPS: number;
  numberOfEstimates: number;
  fiscalPeriod: string;
  fiscalEndDate: string;
  reportDate: string;
}

export class Estimates {
  public consensusEPS: number = 0;
  public numberOfEstimates: number = 0;
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public reportDate: string = "";
}
