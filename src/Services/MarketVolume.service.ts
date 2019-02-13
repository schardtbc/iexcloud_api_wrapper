import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const marketVolume = async (): Promise<MarketVolume[]> => {
  const endpoint = `/market`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => Object.assign(new MarketVolume(), o));
  return result;
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

export class MarketVolume {
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
