import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const sectorPerformance = async (): Promise<SectorPerformance[]> => {
  const data: KVP[] = await iexApiRequest("/stock/market/sector-performance");

  return data.map(o => new SectorPerformance(o));
};

export interface IEXSectorPerformance {
  type: string;
  name: string;
  performance: number;
  lastUpdated: number;
}

export class SectorPerformance extends DynamicObject {
  public type: string = "";
  public name: string = "";
  public performance: number = 0;
  public lastUpdated: number = 0;
}
