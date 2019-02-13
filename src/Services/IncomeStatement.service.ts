import { iexApiRequest } from "./iexcloud.service";

interface KVP {
  [k: string]: any;
}

export const incomeStatement = async (
  symbol: string,
  period: string = "quarter"
): Promise<IncomeStatement[]> => {
  const endpoint = `/stock/${symbol}/income?period=${period}`;
  const data: KVP = await iexApiRequest(endpoint);
  // console.log(data);
  const result: any[] = data.income;
  return result.map((o: KVP) => {
    const r = Object.assign(new IncomeStatement(), o);
    r.symbol = symbol;
    return r;
  });
};

export interface IEXIncomeStatement {
  reportDate: string;
  totalRevenue: number;
  costOfRevenue: number;
  grossProfit: number;
  researchAndDevelopment: number;
  sellingGeneralAndAdmin: number;
  operatingExpense: number;
  operatingIncome: number;
  otherIncomeExpenseNet: number;
  ebit: number;
  interestIncome: number;
  pretaxIncome: number;
  incomeTax: number;
  minorityInterest: number;
  netIncome: number;
  netIncomeBasic: number;
}

export class IncomeStatement {
  public reportDate: string = "";
  public totalRevenue: number = 0;
  public costOfRevenue: number = 0;
  public grossProfit: number = 0;
  public researchAndDevelopment: number = 0;
  public sellingGeneralAndAdmin: number = 0;
  public operatingExpense: number = 0;
  public operatingIncome: number = 0;
  public otherIncomeExpenseNet: number = 0;
  public ebit: number = 0;
  public interestIncome: number = 0;
  public pretaxIncome: number = 0;
  public incomeTax: number = 0;
  public minorityInterest: number = 0;
  public netIncome: number = 0;
  public netIncomeBasic: number = 0;
}
