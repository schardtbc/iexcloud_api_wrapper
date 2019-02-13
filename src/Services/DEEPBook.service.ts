import { iexApiRequest } from "./iexcloud.service";

export interface KVP {
  [k: string]: any;
}

export const deepBook = async (symbol: string): Promise<any> => {
  const endpoint = `/deep/book?symbols=${symbol}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  return data;
};

// export interface BidOrAsk {
//   price: number;
//   size: number;
//   timestamp: number;
// }

// export class DeepBook {
//   public bids: BidOrAsk[]=[];
//   public asks: BidOrAsk[]=[];
// }
