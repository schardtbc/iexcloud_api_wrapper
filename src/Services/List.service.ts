import { iexApiRequest } from "./iexcloud.service";

import { Quote } from "./Quote.service";

interface KVP {
  [k: string]: any;
}

type ListType =
  | "mostactive"
  | "gainers"
  | "losers"
  | "iexvolume"
  | "iexpercent"
  | "infocus";

export const list = async (
  listType: ListType = "mostactive"
): Promise<Quote[]> => {
  const endpoint = `/stock/market/${listType}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map(o => Object.assign(new Quote(), o));
  return result;
};
