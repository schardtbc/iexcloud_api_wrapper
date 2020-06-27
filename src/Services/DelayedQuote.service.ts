import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const delayedQuote = async (symbol: string): Promise<DelayedQuote> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/delayed-quote`);

  return new DelayedQuote(data);
};

export interface IEXDelayedQuote {
  symbol: string;
  delayedPrice: number;
  delayedSize: number;
  delayedPriceTime: number;
  high: number;
  low: number;
  totalVolume: number;
  processedTime: number;
}

export class DelayedQuote extends DynamicObject implements IEXDelayedQuote {
  public symbol: string = "";
  public delayedPrice: number = 0;
  public delayedSize: number = 0;
  public delayedPriceTime: number = 0;
  public high: number = 0;
  public low: number = 0;
  public totalVolume: number = 0;
  public processedTime: number = 0;
}
