import { Quote } from "./Quote.service";

import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const book = async (symbol: string): Promise<Book> => {
  const endpoint = `/stock/${symbol}/book`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new Book(), data);
  return result;
};

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
    isSinglePriceCross: boolean
    isTradeThroughExempt: boolean
    timestamp: number;
  }

export interface SystemEvent {
    systemEvent: string;
    timestamp: number;
}

export class Book {
    public quote: Quote = new Quote();
    public bids:  BidOrAsk[] = [];
    public asks:  BidOrAsk[] = [];
    public trades: Trade[] = [];
    public systemEvent: SystemEvent = {systemEvent: "", timestamp: 0};
}