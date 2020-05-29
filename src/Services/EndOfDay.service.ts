import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

type timePeriod = "1m" | "3m" | "6m" | "ytd" | "1y" | "2y" | "5y";

export const endOfDay = async (
  symbol: string,
  period: timePeriod = "1m",
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false,
  chartCloseOnly: boolean = false
): Promise<EndOfDay[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/${symbol}/chart/${period}`, {
    changeFromClose,
    chartCloseOnly,
    chartInterval,
    chartLast: chartLastN,
    chartReset,
    chartSimplify
  });

  return data.map((o: KVP) => new EndOfDay({
    ...o,
    symbol
  }));
};

export interface IEXEndOfDay {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  uOpen: number;
  uHigh: number;
  uLow: number;
  uClose: number;
  uVolume: number;
  change: number;
  changePercent: number;
  label: string;
  changeOverTime: number;
}

export class EndOfDay extends DynamicObject implements IEXEndOfDay {
  public symbol: string = "";
  public date: string = "";
  public open: number = 0;
  public high: number = 0;
  public low: number = 0;
  public close: number = 0;
  public volume: number = 0;
  public uOpen: number = 0;
  public uHigh: number = 0;
  public uLow: number = 0;
  public uClose: number = 0;
  public uVolume: number = 0;
  public change: number = 0;
  public changePercent: number = 0;
  public label: string = "";
  public changeOverTime: number = 0;
}
