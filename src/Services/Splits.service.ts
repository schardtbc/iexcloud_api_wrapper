import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const splits = async (
  symbol: string,
  period: timePeriod = "1m"
): Promise<Splits[]> => {
  const endpoint = `/stock/${symbol}/splits/${period}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => {
    const r = Object.assign(new Splits(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXSplits {
  exDate: string;
  declaredDate: string;
  ratio: number;
  toFactor: number;
  fromFactor: number;
  description: string;
}

export class Splits implements IEXSplits {
  public exDate: string = "";
  public declaredDate: string = "";
  public ratio: number = 0;
  public toFactor: number = 0;
  public fromFactor: number = 0;
  public description: string = "";
}
