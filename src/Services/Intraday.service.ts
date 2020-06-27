import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

// TODO: is this file necessary?
export const intraday = async (
  symbol: string,
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<Intraday[]> => {
  let endpoint = `/stock/${symbol}/chart/1d?chartInterval=${chartInterval}`;
  if (chartLastN > 0) {
    endpoint = endpoint + `&chartLast=${chartLastN}`;
  }
  if (changeFromClose) {
    endpoint = endpoint + `&changeFromClose=true`;
  }
  if (chartReset) {
    endpoint = endpoint + `&chartReset=true`;
  }
  if (chartSimplify) {
    endpoint = endpoint + `&chartSimplify=true`;
  }
  const data: KVP[] = await iexApiRequest(endpoint);

  return data.map(
    (o: KVP) =>
      new Intraday({
        ...o,
        symbol,
      })
  );
};

export interface IEXIntraday {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
  marketHigh: number;
  marketLow: number;
  marketAverage: number;
  marketVolume: number;
  marketNotional: number;
  marketNumberOfTrades: number;
  open: number;
  close: number;
  marketOpen: number;
  marketClose: number;
  changeOverTime: number;
  marketChangeOverTime: number;
}

export class Intraday extends DynamicObject {
  public date: string = "";
  public minute: string = "";
  public label: string = "";
  public high: number = 0;
  public low: number = 0;
  public average: number = 0;
  public volume: number = 0;
  public notional: number = 0;
  public numberOfTrades: number = 0;
  public marketHigh: number = 0;
  public marketLow: number = 0;
  public marketAverage: number = 0;
  public marketVolume: number = 0;
  public marketNotional: number = 0;
  public marketNumberOfTrades: number = 0;
  public open: number = 0;
  public close: number = 0;
  public marketOpen: number = 0;
  public marketClose: number = 0;
  public changeOverTime: number = 0;
  public marketChangeOverTime: number = 0;
}
