import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const earnings = async (
  symbol: string,
  lastn: number = 1
): Promise<Earnings[]> => {
  const data: KVP = await iexApiRequest(
      `/stock/${symbol}/earnings/${lastn}/`
  );

  return data.earnings.map((o: KVP) => new Earnings({
    ...o,
    symbol
  }));
};

export interface IEXEarnings {
  symbol: string;
  actualEPS: number;
  consensusEPS: number;
  announceTime: string;
  numberOfEstimates: number;
  EPSSurpriseDollar: number;
  EPSReportDate: string;
  fiscalPeriod: string;
  fiscalEndDate: string;
  yearAgo: number;
  yearAgoChangePercent: number;
}

export class Earnings extends DynamicObject implements IEXEarnings {
  public symbol: string="";
  public actualEPS: number = 0;
  public consensusEPS: number = 0;
  public announceTime: string = "";
  public numberOfEstimates: number = 0;
  public EPSSurpriseDollar: number = 0;
  public EPSReportDate: string = "";
  public fiscalPeriod: string = "";
  public fiscalEndDate: string = "";
  public yearAgo: number = 0;
  public yearAgoChangePercent: number = 0;
}
