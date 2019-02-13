import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const volumeByVenue = async (
  symbol: string
): Promise<VolumeByVenue[]> => {
  const endpoint = `/stock/${symbol}/volume-by-venue`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => {
    const r = Object.assign(new VolumeByVenue(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXVolumeByVenue {
  symbol: string;
  volume: number;
  venue: string;
  venueName: string;
  date: string;
  marketPercent: number;
  avgMarketPercent: number;
}

export class VolumeByVenue {
  public symbol: string = "";
  public volume: number = 0;
  public venue: string = "";
  public venueName: string = "";
  public date: string = "";
  public marketPercent: number = 0;
  public avgMarketPercent: number = 0;
}
