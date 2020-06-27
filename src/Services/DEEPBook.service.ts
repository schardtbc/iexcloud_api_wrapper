import { BidOrAsk } from "./Book.service";
import { iexApiRequest, KVP } from "./iexcloud.service";

export const deepBook = async (symbol: string): Promise<any> => {
  const data: KVP = await iexApiRequest("/deep/book", {
    symbol,
  });

  // TODO: verify this is the intention
  for (const key of Object.keys(data)) {
    data[key] = {
      ...new DEEPBook(),
      ...data[key],
      symbol,
    };
  }

  return data;
};

export class DEEPBook {
  public symbol: string = "";
  public bids: BidOrAsk[] = [];
  public asks: BidOrAsk[] = [];
}
