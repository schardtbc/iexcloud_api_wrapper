import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const deepTrades = async (symbol: string): Promise<DEEPTrades[]> => {
  const endpoint = `/deep/trades?${symbol}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result: any[] = data.cashflow;
  return result.map((o: KVP) => {
    const r = Object.assign(new DEEPTrades(), o);
    r.symbol = symbol;
    return r;
  });
};

export interface IEXDEEPTrades {
  symbol: string;
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

export class DEEPTrades implements IEXDEEPTrades {
  public symbol: string = "";
  public price: number = 0;
  public size: number = 0;
  public tradeId: number = 0;
  public isISO: boolean = false;
  public isOddLot: boolean = false;
  public isOutsideRegularHours: boolean = false;
  public isSinglePriceCross: boolean = false;
  public isTradeThroughExempt: boolean = false;
  public timestamp: number = 0;
}
