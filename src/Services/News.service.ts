import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const news = async (
  symbol: string,
  lastN: number = 10
): Promise<NewsItem[]> => {
  const data: KVP[] = await iexApiRequest(
    `/stock/${symbol}/news/last/${lastN}`
  );

  return data.map(
    (o: KVP) =>
      new NewsItem({
        ...o,
        symbol,
      })
  );
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

export class NewsItem extends DynamicObject implements IEXNewsItem {
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
