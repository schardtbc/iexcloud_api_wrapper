import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

type PriceType = "Open" | "Close";

export const officialPrice = async (
  symbol: string
): Promise<DEEPOfficialPrice> => {
  const data: KVP = await iexApiRequest("/deep/official-price", {
    symbols: symbol,
  });

  return new DEEPOfficialPrice(data);
};

export interface DEEPOfficalPrice {
  symbol: string;
  priceType: PriceType;
  price: number;
  timestamp: number;
}

export class DEEPOfficialPrice extends DynamicObject {
  public symbol: string = "";
  public priceType: PriceType = "Open";
  public price: number = 0;
  public timestamp: number = 0;
}
