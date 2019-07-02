import { iexApiRequest } from "./iexcloud.service";


export const recommendationTrends = async (symbol: string): Promise<Recommendation[]> => {
  const endpoint = `/stock/${symbol}/recommendation-trends`;
  const data: IEXRecommendation[] = await iexApiRequest(endpoint);
  const result = data.map((o: IEXRecommendation) => {
    o.consensusEndDate = new Date(o.consensusEndDate)
    o.consensusStartDate = new Date(o.consensusStartDate)
    o.corporateActionsAppliedDate = new Date(o.corporateActionsAppliedDate)
    const r = Object.assign(new Recommendation(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXRecommendation {
    consensusEndDate: Date,
    consensusStartDate: Date,
    corporateActionsAppliedDate: Date,
    ratingBuy: number,
    ratingHold: number,
    ratingNone: number,
    ratingOverweight: number,
    ratingScaleMark: number,
    ratingSell: number,
    ratingUnderweight: number
}

export class Recommendation {
    public symbol: string = ''
    public consensusEndDate: number = 0
    public consensusStartDate: number = 0
    public corporateActionsAppliedDate: number = 0
    public ratingBuy: number = 0
    public ratingHold: number = 0
    public ratingNone: number = 0
    public ratingOverweight: number = 0
    public ratingScaleMark: number = 0
    public ratingSell: number = 0
    public ratingUnderweight: number = 0
}