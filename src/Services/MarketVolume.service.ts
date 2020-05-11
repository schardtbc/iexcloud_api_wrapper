import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const marketVolume = async (): Promise<MarketVolume[]> => {
  const data: KVP[] = await iexApiRequest('/market');

  return data.map((o: KVP) => new MarketVolume(o));
};

export interface IEXMarketVolume {
  mic: string;
  tapeId: string;
  venueName: string;
  volume: number;
  tapeA: number;
  tapeB: number;
  tapeC: number;
  marketPercent: number;
  lastUpdated: number;
}

export class MarketVolume extends DynamicObject{
  public mic: string = "";
  public tapeId: string = "";
  public venueName: string = "";
  public volume: number = 0;
  public tapeA: number = 0;
  public tapeB: number = 0;
  public tapeC: number = 0;
  public marketPercent: number = 0;
  public lastUpdated: number = 0;
}
