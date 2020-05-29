import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const ohlc = async (symbol: string): Promise<OHLC> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/ohlc`);

  return new OHLC({
    close: data.close.price,
    closeTime: data.close.time,
    high: data.high,
    low: data.low,
    open: data.open.price,
    openTime: data.open.time,
    symbol
  });
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

export class OHLC extends DynamicObject{
  public symbol: string = "";
  public open: number = 0;
  public close: number = 0;
  public high: number = 0;
  public low: number = 0;
  public openTime: number = 0;
  public closeTime: number = 0;
}
