import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const intradayForDate = async (
  symbol: string,
  date: string,
  chartLastN: number = 0,
  chartInterval: number = 1,
  changeFromClose: boolean = true,
  chartReset: boolean = false,
  chartSimplify: boolean = false
): Promise<IntradayIEXOnly[]> => {
  date = date.replace(/-/g,"");
  let endpoint = `/stock/${symbol}/chart/date/${date}?chartIEXOnly=true`;
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
  return data.map((o: KVP) => new IntradayIEXOnly({
    ...o.
    symbol
  }));
};

export interface IEXIntradayIEXOnly {
  date: string;
  minute: string;
  label: string;
  high: number;
  low: number;
  average: number;
  volume: number;
  notional: number;
  numberOfTrades: number;
  open: number;
  close: number;
  changeOverTime: number;
}

export class IntradayIEXOnly extends DynamicObject implements IEXIntradayIEXOnly {
  public date: string = "";
  public minute: string = "";
  public label: string = "";
  public high: number = 0;
  public low: number = 0;
  public average: number = 0;
  public volume: number = 0;
  public notional: number = 0;
  public numberOfTrades: number = 0;
  public open: number = 0;
  public close: number = 0;
  public changeOverTime: number = 0;
}
