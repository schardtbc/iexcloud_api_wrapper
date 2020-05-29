import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const topsLast = async (symbol: string): Promise<TOPSLast[]> => {
  const data: KVP[] = await iexApiRequest('/tops/last', {
    symbols: symbol
  });

  return data.map((o: KVP) => new TOPSLast(o));
};

export interface IEXTOPSLast {
  symbol: string;
  price: number;
  size: number;
  time: number;
}

export class TOPSLast extends DynamicObject {
  public symbol: string = "";
  public price: number = 0;
  public size: number = 0;
  public time: number = 0;
}
