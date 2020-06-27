import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const dividends = async (
  symbol: string,
  range: timePeriod = "1m"
): Promise<Dividends[]> => {
  const data: KVP[] = await iexApiRequest(
    `/stock/${symbol}/dividends/${range}`
  );

  return data.map(
    (o: KVP) =>
      new Dividends({
        ...o,
        symbol,
      })
  );
};

export interface IEXDividends {
  symbol: string;
  exDate: string;
  paymentDate: string;
  recordDate: string;
  declaredDate: string;
  amount: number;
  flag: string;
  currency: string;
  description: string;
  frequency: string;
}

export class Dividends extends DynamicObject implements IEXDividends {
  public symbol: string = "";
  public exDate: string = "";
  public paymentDate: string = "";
  public recordDate: string = "";
  public declaredDate: string = "";
  public amount: number = 0;
  public flag: string = "";
  public currency: string = "";
  public description: string = "";
  public frequency: string = "";
}
