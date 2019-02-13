import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const financials = async (
  symbol: string,
  lastn: number = 1
): Promise<Financials[]> => {
  const endpoint = `/stock/${symbol}/financials/${lastn}/`;
  const data: KVP = await iexApiRequest(endpoint);
  const tmp: KVP[] = data.financials;
  const result = tmp.map((o: KVP) => {
    const r = Object.assign(new Financials(), o);
    r.symbol = symbol;
    return r;
  });
  return result;
};

export interface IEXFinancials {
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

export class Financials implements IEXFinancials {
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
