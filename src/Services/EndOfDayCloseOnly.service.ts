import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const endOfDayCloseOnly = async (
  symbol: string,
  period: timePeriod = "1m",
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<EndOfDayCloseOnly[]> => {
  let endpoint = `/stock/${symbol}/chart/${period}?chartCloseOnly=true`;
  if (chartLastN > 0) {
    endpoint = endpoint + `&chartLast=${chartLastN}`;
  }
  if (chartInterval > 1) {
    endpoint = endpoint + `&chartInterval=${chartInterval}`;
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
  const result = data.map((o: KVP) => {
    const r = Object.assign(new EndOfDayCloseOnly(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXEndOfDayCloseOnly {
  symbol: string;
  date: string;
  close: number;
  volume: number;
}

export class EndOfDayCloseOnly implements IEXEndOfDayCloseOnly {
  public symbol: string = "";
  public date: string = "";
  public close: number = 0;
  public volume: number = 0;
}
