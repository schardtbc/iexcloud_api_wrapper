import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const topsLast = async (symbol: string): Promise<TOPSLast[]> => {
  const endpoint = `/tops/last?symbols=${symbol}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => Object.assign(new TOPSLast(), o));
  return result;
};

export interface IEXTOPSLast {
  symbol: string;
  price: number;
  size: number;
  time: number;
}

export class TOPSLast {
  public symbol: string = "";
  public price: number = 0;
  public size: number = 0;
  public time: number = 0;
}
