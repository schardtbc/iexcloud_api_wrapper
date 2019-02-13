import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const earnings = async (
  symbol: string,
  lastn: number = 1
): Promise<Earnings[]> => {
  const endpoint = `/stock/${symbol}/earnings/${lastn}/`;
  const data: KVP = await iexApiRequest(endpoint);
  const tmp: KVP[] = data.earnings;
  const result = tmp.map((o: KVP) => {
    const r = Object.assign(new Earnings(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXEarnings {
  actualEPS: number;
  consensusEPS: number;
  announceTime: number;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
}

export class Earnings implements IEXEarnings {
  public actualEPS: number = 0;
  public consensusEPS: number = 0;
  public announceTime: number = 0;
  public numberOfEstimates: number = 0;
  public EPSSurpriseDollar: number = 0;
  public EPSReportDate: string = "";
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public yearAgo: number = 0;
  public yearAgoChangePercent: number = 0;
}
