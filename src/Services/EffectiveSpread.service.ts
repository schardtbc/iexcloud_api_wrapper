import { DynamicObject, iexApiRequest, KVP } from "./iexcloud.service";

export const effectiveSpread = async (
  symbol: string
): Promise<EffectiveSpread[]> => {
  const data: KVP[] = await iexApiRequest(`/stock/${symbol}/effective-spread`);

  return data.map(
    (o: KVP) =>
      new EffectiveSpread({
        ...o,
        symbol,
      })
  );
};

export interface IEXEffectiveSpread {
  symbol: string;
  volume: number;
  venue: string;
  venueName: string;
  effectiveSpread: number;
  effectiveQuoted: number;
  priceImprovement: number;
}

export class EffectiveSpread extends DynamicObject
  implements IEXEffectiveSpread {
  public symbol: string = "";
  public volume: number = 0;
  public venue: string = "";
  public venueName: string = "";
  public effectiveSpread: number = 0;
  public effectiveQuoted: number = 0;
  public priceImprovement: number = 0;
}
