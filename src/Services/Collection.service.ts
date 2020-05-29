import { iexApiRequest, KVP } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export type CollectionType = "sector" | "tag" | "list"

export const collection = async (
  collectionType: CollectionType ,
  collectionName: string
): Promise<Quote[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/market/collection/${collectionType}`, {
    collectionName
  });

  return data.map(o => new Quote(o));
};