import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export type SentimentType = "daily" | "minute";

export const socialSentiment = async (
  symbol: string,
  type: SentimentType = "daily",
  date: string = ""
): Promise<null | SocialSentiment | SocialSentiment[]> => {
  let endpoint = `/stock/${symbol}/sentiment/${type}`;
  if (date) {
    endpoint = endpoint +"/"+ date.replace(/-/g, "");
  }
  if (type.includes("daily")) {
    const data: KVP = await iexApiRequest(endpoint);
    const result: SocialSentiment = Object.assign(new SocialSentiment(),data);
    return result;
  } else {
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
