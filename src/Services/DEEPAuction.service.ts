import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const auction = async (symbol: string): Promise<Auction> => {
  const data: KVP = await iexApiRequest("/deep/auction", {
    symbols: symbol,
  });

  return new Auction(data);
};

export interface IEXAuction {
  auctionType: string;
  pairedShares: number;
  imbalanceShares: number;
  referencePrice: number;
  indicativePrice: number;
  auctionBookPrice: number;
  collarReferencePrice: number;
  lowerCollarPrice: number;
  upperCollarPrice: number;
  extensionNumber: number;
  startTime: string;
  lastUpdate: number;
}

export class Auction extends DynamicObject implements IEXAuction {
  public auctionType: string = "";
  public pairedShares: number = 0;
  public imbalanceShares: number = 0;
  public referencePrice: number = 0;
  public indicativePrice: number = 0;
  public auctionBookPrice: number = 0;
  public collarReferencePrice: number = 0;
  public lowerCollarPrice: number = 0;
  public upperCollarPrice: number = 0;
  public extensionNumber: number = 0;
  public startTime: string = "";
  public lastUpdate: number = 0;
}
