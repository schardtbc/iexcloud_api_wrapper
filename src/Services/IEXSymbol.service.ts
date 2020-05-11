import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const iexSymbols = async (): Promise<IEXSymbol[]> => {
  const data: KVP[] = await iexApiRequest('/ref-data/iex/symbols');

  return data.map((o: KVP) => new IEXSymbol(o));
};

export interface IEXSymbolI {
  symbol: string;
  date: string;
  isEnabled: boolean;
}

export class IEXSymbol extends DynamicObject {
  public symbol: string = "";
  public date: string = "";
  public isEnabled: boolean = true;
}
