import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const tops = async (symbol: string): Promise<TOPS[]> => {
  const data: KVP[] = await iexApiRequest('/tops', {
    symbols: symbol
  });

  return data.map((o: KVP) => new TOPS(o));
};

export interface IEXTOPS {
  symbol: string;
  marketPercent: number;
  bidSize: number;
  bidPrice: number;
  askSize: number;
  askPrice: number;
  volume: number;
  lastSalePrice: number;
  lastSaleSize: number;
  lastSaleTime: number;
  lastUpdated: number;
  sector: string;
  securityType: string;
}

export class TOPS extends DynamicObject {
  public symbol: string = "";
  public marketPercent: number = 0;
  public bidSize: number = 0;
  public bidPrice: number = 0;
  public askSize: number = 0;
  public askPrice: number = 0;
  public volume: number = 0;
  public lastSalePrice: number = 0;
  public lastSaleSize: number = 0;
  public lastSaleTime: number = 0;
  public lastUpdated: number = 0;
  public sector: string = "";
  public securityType: string = "";
}
