import { DynamicObject, iexApiRequest } from "./iexcloud.service";

export const recommendationTrends = async (
  symbol: string
): Promise<Recommendation[]> => {
  const data: IEXRecommendation[] = await iexApiRequest(
    `/stock/${symbol}/recommendation-trends`
  );

  return data.map(
    (o: IEXRecommendation) =>
      new Recommendation({
        ...o,
        consensusEndDate: new Date(o.consensusEndDate),
        consensusStartDate: new Date(o.consensusStartDate),
        corporateActionsAppliedDate: new Date(o.corporateActionsAppliedDate),
        symbol,
      })
  );
};

export interface IEXRecommendation {
  consensusEndDate: Date;
  consensusStartDate: Date;
  corporateActionsAppliedDate: Date;
  ratingBuy: number;
  ratingHold: number;
  ratingNone: number;
  ratingOverweight: number;
  ratingScaleMark: number;
  ratingSell: number;
  ratingUnderweight: number;
  symbol: string;
}

export class Recommendation extends DynamicObject {
  public symbol: string = "";
  public consensusEndDate: Date = new Date();
  public consensusStartDate: Date = new Date();
  public corporateActionsAppliedDate: Date = new Date();
  public ratingBuy: number = 0;
  public ratingHold: number = 0;
  public ratingNone: number = 0;
  public ratingOverweight: number = 0;
  public ratingScaleMark: number = 0;
  public ratingSell: number = 0;
  public ratingUnderweight: number = 0;
}
