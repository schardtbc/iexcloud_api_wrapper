import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const news = async (
  symbol: string,
  lastN: number = 10
): Promise<NewsItem[]> => {
  const endpoint = `/stock/${symbol}/news/last/${lastN}`;
  const data: KVP[] = await iexApiRequest(endpoint);
  const result = data.map((o: KVP) => {
    const r = Object.assign(new NewsItem(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXNewsItem {
  datetime: number;
  headline: string;
  source: string;
  url: string;
  summary: string;
  related: string;
  image: string;
  lang: string;
  hasPaywall: boolean;
}

export class NewsItem implements IEXNewsItem {
  public datetime: number = 0;
  public headline: string = "";
  public source: string = "";
  public url: string = "";
  public summary: string = "";
  public related: string = "";
  public image: string = "";
  public lang: string = "";
  public hasPaywall: boolean = false;
}
