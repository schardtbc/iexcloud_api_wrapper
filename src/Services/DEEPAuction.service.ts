import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const auction = async (symbol: string): Promise<Auction> => {
  const endpoint = `/deep/auction?symbols=${symbol}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result = Object.assign(new Auction(), data);
  return result;
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

export class Auction implements IEXAuction {
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
