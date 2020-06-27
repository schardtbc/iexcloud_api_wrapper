import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const deepTrades = async (symbol: string): Promise<DEEPTrade[]> => {
  const data: KVP = await iexApiRequest("/deep/trades", {
    symbol,
  });

  return Object.keys(data).map(
    (key: string) =>
      new DEEPTrade({
        ...data[key],
        symbol,
      })
  );
};

export interface IEXDEEPTrade {
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

export class DEEPTrade extends DynamicObject implements IEXDEEPTrade {
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
