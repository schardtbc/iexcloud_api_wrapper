import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export type SentimentType = "daily" | "minute";

export const socialSentiment = async (
  symbol: string,
  type: SentimentType = "daily",
  date: string = ""
): Promise<null | SocialSentiment | SocialSentiment[]> => {
  let endpoint = `/stock/${symbol}/sentiment/${type}`;
  if (date) {
    endpoint = endpoint + "/" + date.replace(/-/g, "");
  }

  if (type.includes("daily")) {
    const result: KVP = await iexApiRequest(endpoint);

    return new SocialSentiment(result);
  }

  const data: KVP[] = await iexApiRequest(endpoint);

  return data.map(
    (o: KVP) =>
      new SocialSentiment({
        ...o,
        symbol,
      })
  );
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

export class SocialSentiment extends DynamicObject
  implements IEXSocialSentiment {
  public symbol: string = "";
  public date: string = "";
  public minute: string | null = null;
  public sentiment: number = 0;
  public totalScores: number = 0;
  public positive: number = 0;
  public negative: number = 0;
}
