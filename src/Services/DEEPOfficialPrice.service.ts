import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type PriceType = "Open" | "Close";

export const officialPrice = async (
  symbol: string
): Promise<DEEPOfficialPrice> => {
  const endpoint = `/deep/officialPrice?symbols=${symbol}`;
  const data: KVP = await iexApiRequest(endpoint);
  const result = Object.assign(new DEEPOfficialPrice(), data);
  return result;
};

export interface DEEPOfficalPrice {
  symbol: string;
  priceType: PriceType;
  price: number;
  timestamp: number;
}

export class DEEPOfficialPrice {
  public symbol: string = "";
  public priceType: PriceType = "Open";
  public price: number = 0;
  public timestamp: number = 0;
}
