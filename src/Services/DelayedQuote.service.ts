import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const delayedQuote = async (symbol: string): Promise<DelayedQuote> => {
  const endpoint = `/stock/${symbol}/delayed-quote`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result = Object.assign(new DelayedQuote(), data);
  return result;
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

export class DelayedQuote implements IEXDelayedQuote {
  public symbol: string = "";
  public delayedPrice: number = 0;
  public delayedSize: number = 0;
  public delayedPriceTime: number = 0;
  public high: number = 0;
  public low: number = 0;
  public totalVolume: number = 0;
  public processedTime: number = 0;
}
