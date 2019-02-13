import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

type SentimentType = "daily" | "minute";

export const socialSentiment = async (
  symbol: string,
  type: SentimentType = "daily",
  date: string = ""
): Promise<null | SocialSentiment | SocialSentiment[]> => {
  let endpoint = `/stock/${symbol}/sentinent/${type}/`;
  if (date) {
    endpoint = endpoint + date.replace(/-/g, "");
  }
  if (type === "daily") {
    const data: KVP = await iexApiRequest(endpoint);
    const result: SocialSentiment = data.map((o: KVP) => {
      const r = Object.assign(new SocialSentiment(), o);
      r.symbol = symbol;
      return r;
    });
    return result;
  }
  if (type === "minute") {
    const data: KVP[] = await iexApiRequest(endpoint);
    const result = data.map((o: KVP) => {
      const r = Object.assign(new SocialSentiment(), o);
      r.symbol = symbol;
      return r;
    });
    return result;
  }
  return null;
};

export interface IEXSocialSentiment {
  symbol: string;
  date: string;
  minute: string | null;
  sentiment: number;
  totalScores: number;
  positive: number;
  negative: number;
}

export class SocialSentiment implements IEXSocialSentiment {
  public symbol: string = "";
  public date: string = "";
  public minute: string | null = null;
  public sentiment: number = 0;
  public totalScores: number = 0;
  public positive: number = 0;
  public negative: number = 0;
}
