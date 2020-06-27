import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const marketSymbols = async (): Promise<MarketSymbol[]> => {
  const data: KVP[] = await iexApiRequest("/ref-data/symbols");

  return data.map((o: KVP) => new MarketSymbol(o));
};

export interface IEXMarketSymbol {
  symbol: string;
  name: string;
  date: string;
  isEnabled: boolean;
  type: string;
  iexId: string;
}

export class MarketSymbol extends DynamicObject {
  public symbol: string = "";
  public name: string = "";
  public date: string = "";
  public isEnabled: boolean = false;
  public type: string = "";
  public iexId: string = "";
}
