import { iexApiRequest } from './iexcloud.service';

export const quote = (symbol: string) => iexApiRequest<IEXQuote>(`/stock/${symbol}/quote`);

export interface IEXQuote {
  symbol: string;
  companyName: string;
  primaryExchange?: string;
  calculationPrice: CalculationPrice;
  open: number | null;
  openTime: number | null;
  openSource?: string;
  close: number | null;
  closeTime: number | null;
  closeSource?: string;
  high: number | null;
  highTime?: number | null;
  highSource?: null | string;
  low: number | null;
  lowTime?: number | null;
  lowSource?: null | string;
  latestPrice: number | null;
  latestSource: LatestSource;
  latestTime: string;
  latestUpdate: number | null;
  latestVolume: number | null;
  iexRealtimePrice: number | null;
  iexRealtimeSize: number | null;
  iexLastUpdated: number | null;
  delayedPrice: number | null;
  delayedPriceTime: number | null;
  oddLotDelayedPrice?: number | null;
  oddLotDelayedPriceTime?: number | null;
  extendedPrice: number | null;
  extendedChange: number | null;
  extendedChangePercent: number | null;
  extendedPriceTime: number | null;
  previousClose: number | null;
  previousVolume?: number | null;
  change: number | null;
  changePercent: number | null;
  volume?: number;
  iexMarketPercent: number | null;
  iexVolume: number | null;
  avgTotalVolume: number | null;
  iexBidPrice: number | null;
  iexBidSize: number | null;
  iexAskPrice: number | null;
  iexAskSize: number | null;
  iexOpen?: number | null;
  iexOpenTime?: number | null;
  iexClose?: number | null;
  iexCloseTime?: number | null;
  marketCap: number | null;
  peRatio: number | null;
  week52High: number;
  week52Low: number | null;
  ytdChange: number | null;
  lastTradeTime?: number | null;
  sector?: string;
  isUSMarketOpen?: boolean;
}

export enum CalculationPrice {
  Close = 'close',
  Previousclose = 'previousclose',
  SIP = 'sip',
  Tops = 'tops',
}

export enum LatestSource {
  Close = 'Close',
  IEXRealTimePrice = 'IEX real time price',
  NA = 'N/A',
  PreviousClose = 'Previous close',
  The15MinuteDelayedPrice = '15 minute delayed price',
}
