import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const ohlc = async (symbol: string): Promise<OHLC> => {
  const endpoint = `/stock/${symbol}/ohlc`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = new OHLC();
  result.open = data.open.price;
  result.close = data.close.price;
  result.high = data.high;
  result.low = data.low;
  result.openTime = data.open.time;
  result.closeTime = data.close.time;
  result.symbol = symbol
  return result;
};

export interface IEXOHLC {
  symbol: string;
  open: number;
  close: number;
  high: number;
  low: number;
  openTime: number;
  closeTime: number;
}

export class OHLC {
  public symbol: string = "";
  public open: number = 0;
  public close: number = 0;
  public high: number = 0;
  public low: number = 0;
  public openTime: number = 0;
  public closeTime: number = 0;
}
