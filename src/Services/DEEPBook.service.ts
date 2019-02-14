import { iexApiRequest } from "./iexcloud.service";

import { BidOrAsk } from "./Book.service"

export interface KVP {
  [k: string]: any;
}

export const deepBook = async (symbol: string): Promise<any> => {
  const endpoint = `/deep/book?symbols=${symbol}`;
  const data: KVP = await iexApiRequest(endpoint);
  const result: DEEPBook[] = Object.keys(data).map( (key:string)  => {
    const r: DEEPBook = Object.assign(new DEEPBook(), data.key);
    r.symbol = key;
    return r;
  });  
  return data;
};


export class DEEPBook {
  public symbol: string="";
  public bids: BidOrAsk[]=[];
  public asks: BidOrAsk[]=[];
}
