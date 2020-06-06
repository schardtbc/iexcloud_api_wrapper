import { iexApiRequest, KVP } from "./iexcloud.service";
import { Quote } from "./Quote.service";

export type ListType =
  | "mostactive"
  | "gainers"
  | "losers"
  | "iexvolume"
  | "iexpercent"
  | "infocus";

export const list = async (
  listType: ListType = "mostactive"
): Promise<Quote[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/market/list/${listType}`);

  return data.map((o) => new Quote(o));
};
