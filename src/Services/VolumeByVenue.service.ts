import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const volumeByVenue = async (
  symbol: string
): Promise<VolumeByVenue[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/${symbol}/volume-by-venue`);

  return data.map(
    (o: KVP) =>
      new VolumeByVenue({
        ...o,
        symbol,
      })
  );
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

export class VolumeByVenue extends DynamicObject {
  public symbol: string = "";
  public volume: number = 0;
  public venue: string = "";
  public venueName: string = "";
  public date: string = "";
  public marketPercent: number = 0;
  public avgMarketPercent: number = 0;
}
