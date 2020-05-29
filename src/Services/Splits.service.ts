import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

type timePeriod = "next" | "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const splits = async (
  symbol: string,
  period: timePeriod = "1m"
): Promise<Splits[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/${symbol}/splits/${period}`);

  return data.map((o: KVP) => new Splits({
    ...o,
    symbol
  }));
};

export interface IEXSplits {
  exDate: string;
  declaredDate: string;
  ratio: number;
  toFactor: number;
  fromFactor: number;
  description: string;
}

export class Splits extends DynamicObject implements IEXSplits {
  public exDate: string = "";
  public declaredDate: string = "";
  public ratio: number = 0;
  public toFactor: number = 0;
  public fromFactor: number = 0;
  public description: string = "";
}
