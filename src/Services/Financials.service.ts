import {DynamicObject, iexApiRequest, KVP} from "./iexcloud.service";

export const financials = async (
  symbol: string,
  lastn: number = 1
): Promise<Financials[]> => {
  const data: KVP = await iexApiRequest(`/stock/${symbol}/financials/${lastn}/`);

  return data.financials.map((o: KVP) => new Financials({
    ...o,
    symbol
  }));
};

export interface IEXFinancials {
  symbol: string;
  reportDate: string;
  grossProfit: number;
  costOfRevenue: number;
  operatingRevenue: number;
  totalRevenue: number;
  operatingIncome: number;
  netIncome: number;
  researchAndDevelopment: number;
  operatingExpense: number;
  currentAssets: number;
  totalAssets: number;
  totalLiabilities: number;
  currentCash: number;
  currentDebt: number;
  totalCash: number;
  totalDebt: number;
  shareholderEquity: number;
  cashChange: number;
  cashFlow: number;
  operatingGainsLosses: number | null;
}

export class Financials extends DynamicObject implements IEXFinancials {
  public symbol: string = "";
  public reportDate: string = "";
  public grossProfit: number = 0;
  public costOfRevenue: number = 0;
  public operatingRevenue: number = 0;
  public totalRevenue: number = 0;
  public operatingIncome: number = 0;
  public netIncome: number = 0;
  public researchAndDevelopment: number = 0;
  public operatingExpense: number = 0;
  public currentAssets: number = 0;
  public totalAssets: number = 0;
  public totalLiabilities: number = 0;
  public currentCash: number = 0;
  public currentDebt: number = 0;
  public totalCash: number = 0;
  public totalDebt: number = 0;
  public shareholderEquity: number = 0;
  public cashChange: number = 0;
  public cashFlow: number = 0;
  public operatingGainsLosses: number | null = 0;
}
