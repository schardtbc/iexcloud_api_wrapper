import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const sectorPerformance = async (): Promise<SectorPerformance[]> => {
  const endpoint = "/stock/market/sector-performance";
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map(o => Object.assign(new SectorPerformance(), o));
  return result;
};

export interface IEXSectorPerformance {
  type: string;
  name: string;
  performance: number;
  lastUpdated: number;
}

export class SectorPerformance {
  public type: string = "";
  public name: string = "";
  public performance: number = 0;
  public lastUpdated: number = 0;
}
