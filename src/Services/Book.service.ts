import { iexApiRequest } from './iexcloud.service';
import { IEXQuote } from './Quote.service';

export const book = (symbol: string) => iexApiRequest<IBook>(`/stock/${symbol}/book`);

const enum systemEvent {
  O = 'O', // Start of messages
  S = 'S', // Start of system hours
  R = 'R', // Start of regular market hours
  M = 'M', // End of regular market hours
  E = 'E', // End of system hours
  C = 'C', // End of messages
}

export interface BidOrAsk {
  price: number;
  size: number;
  timestamp: number;
}

export interface Trade {
  price: number;
  size: number;
  tradeId: number;
  isISO: boolean;
  isOddLot: boolean;
  isOutsideRegularHours: boolean;
  isSinglePriceCross: boolean;
  isTradeThroughExempt: boolean;
  timestamp: number;
}

export interface SystemEvent {
  systemEvent: systemEvent;
  timestamp: number;
}

export interface IBook {
  quote: IEXQuote;
  bids: BidOrAsk[];
  asks: BidOrAsk[];
  trades: Trade[];
  systemEvent: SystemEvent;
}
