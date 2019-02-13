import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const dividends = async (
  symbol: string,
  range: timePeriod = "1m"
): Promise<Dividends[]> => {
  const endpoint = `/stock/${symbol}/dividends/${range}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  // console.log(data);
  const result = data.map((o: KVP) => {
    const r = Object.assign(new Dividends(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXDividends {
  symbol: string;
  exDate: string;
  paymentDate: string;
  recordDate: string;
  declaredDate: string;
  amount: number;
  flag: string;
}

export class Dividends implements IEXDividends {
  public symbol: string = "";
  public exDate: string = "";
  public paymentDate: string = "";
  public recordDate: string = "";
  public declaredDate: string = "";
  public amount: number = 0;
  public flag: string = "";
}
