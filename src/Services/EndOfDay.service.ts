import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const endOfDay = async (
  symbol: string,
  period: timePeriod = "1m",
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<EndOfDay[]> => {
  let endpoint = `/stock/${symbol}/chart/${period}`;
  if (chartLastN > 0) {
    endpoint = endpoint + `?chartLast=${chartLastN}`;
  }
  if (chartInterval > 1) {
    endpoint = endpoint + `?chartInterval=${chartInterval}`;
  }
  if (changeFromClose) {
    endpoint = endpoint + `?changeFromClose=true`;
  }
  if (chartReset) {
    endpoint = endpoint + `?chartReset=true`;
  }
  if (chartSimplify) {
    endpoint = endpoint + `?chartSimplify=true`;
  }
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => {
    const r = Object.assign(new EndOfDay(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXEndOfDay {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  unadjustedClose: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
  label: string;
  changeOverTime: number;
}

export class EndOfDay implements IEXEndOfDay {
  public symbol: string = "";
  public date: string = "";
  public open: number = 0;
  public high: number = 0;
  public low: number = 0;
  public close: number = 0;
  public volume: number = 0;
  public unadjustedClose: number = 0;
  public unadjustedVolume: number = 0;
  public change: number = 0;
  public changePercent: number = 0;
  public label: string = "";
  public changeOverTime: number = 0;
}
