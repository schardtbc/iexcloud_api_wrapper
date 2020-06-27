import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const previousDay = async (symbol: string): Promise<PreviousDay> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/previous`);

  return new PreviousDay(data);
};

export interface IEXPreviousDay {
  symbol: string;
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  unadjustedVolume: number;
  change: number;
  changePercent: number;
}

export class PreviousDay extends DynamicObject {
  public symbol: string = "";
  public date: string = "";
  public open: number = 0;
  public high: number = 0;
  public low: number = 0;
  public close: number = 0;
  public volume: number = 0;
  public unadjustedVolume: number = 0;
  public change: number = 0;
  public changePercent: number = 0;
}
