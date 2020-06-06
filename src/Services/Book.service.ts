import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export const book = async (symbol: string): Promise<Book> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/book`);

  return new Book(data);
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
  isSinglePriceCross: boolean;
  isTradeThroughExempt: boolean;
  timestamp: number;
}

export interface SystemEvent {
  systemEvent: string;
  timestamp: number;
}

export class Book extends DynamicObject {
  public quote: Quote = new Quote({});
  public bids: BidOrAsk[] = [];
  public asks: BidOrAsk[] = [];
  public trades: Trade[] = [];
  public systemEvent: SystemEvent = { systemEvent: "", timestamp: 0 };
}
