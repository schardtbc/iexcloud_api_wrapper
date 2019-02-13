import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const quote = async (symbol: string): Promise<Quote> => {
  const endpoint = `/stock/${symbol}/quote`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new Quote(), data);
  return result;
};

export interface IEXQuote {
  symbol: string;
  companyName: string;
  calculationPrice: string;
  open: number;
  openTime: number;
  close: number;
  closeTime: number;
  high: number;
  low: number;
  latestPrice: number;
  latestSource: string;
  latestTime: string;
  latestUpdate: number;
  latestVolume: number;
  iexRealtimePrice: number;
  iexRealtimeSize: number;
  iexLastUpdated: number;
  delayedPrice: number;
  delayedPriceTime: number;
  extendedPrice: number;
  extendedChange: number;
  extendedChangePercent: number;
  extendedPriceTime: number;
  previousClose: number;
  change: number;
  changePercent: number;
  iexMarketPercent: number;
  iexVolume: number;
  avgTotalVolume: number;
  iexBidPrice: number;
  iexBidSize: number;
  iexAskPrice: number;
  iexAskSize: number;
  marketCap: number;
  week52High: number;
  week52Low: number;
  ytdChange: number;
}

export class Quote implements IEXQuote {
  public symbol: string = "";
  public companyName: string = "";
  public calculationPrice: string = "";
  public open: number = 0;
  public openTime: number = 0;
  public close: number = 0;
  public closeTime: number = 0;
  public high: number = 0;
  public low: number = 0;
  public latestPrice: number = 0;
  public latestSource: string = "";
  public latestTime: string = "";
  public latestUpdate: number = 0;
  public latestVolume: number = 0;
  public iexRealtimePrice: number = 0;
  public iexRealtimeSize: number = 0;
  public iexLastUpdated: number = 0;
  public delayedPrice: number = 0;
  public delayedPriceTime: number = 0;
  public extendedPrice: number = 0;
  public extendedChange: number = 0;
  public extendedChangePercent: number = 0;
  public extendedPriceTime: number = 0;
  public previousClose: number = 0;
  public change: number = 0;
  public changePercent: number = 0;
  public iexMarketPercent: number = 0;
  public iexVolume: number = 0;
  public avgTotalVolume: number = 0;
  public iexBidPrice: number = 0;
  public iexBidSize: number = 0;
  public iexAskPrice: number = 0;
  public iexAskSize: number = 0;
  public marketCap: number = 0;
  public week52High: number = 0;
  public week52Low: number = 0;
  public ytdChange: number = 0;
}
