import { iexApiRequest } from "./iexcloud.service";

import { Quote } from "./Quote.service";

interface KVP {
  [k: string]: any;
}

export type CollectionType = "sector" | "tag" | "list"

export const collection = async (
  collectionType: CollectionType ,
  collectionName: string
): Promise<Quote[]> => {
  const endpoint = `/stock/market/collection/${collectionType}?collectionName=${collectionName}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map(o => Object.assign(new Quote(), o));
  return result;
};